import { Client, Databases, Query } from 'appwrite';

// create appwrite client
const client = new Client();
client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT);

// create db instance
const databases = new Databases(client);

// query for this hour
const now = new Date();
const oneHourAgo = new Date(now.getTime() - 3600000);
const thisHourQuery = Query.greaterThan("created_on", oneHourAgo.toISOString());

// query for last 24 hours
const oneDayAgo = new Date(now.getTime() - 86400000);
const thisDayQuery = Query.greaterThan("created_on", oneDayAgo.toISOString());

// query for last 7 days
const oneWeekAgo = new Date(now.getTime() - 604800000);
const thisWeekQuery = Query.greaterThan("created_on", oneWeekAgo.toISOString());

// query for season 3 - start date april 8th 2023
const season3Start = new Date("2023-04-08T00:00:00.000Z");
const season3Query = Query.greaterThan("created_on", season3Start.toISOString());

// fetch data from DB for given query filters
async function fetchResponse(queries: Array<string>) {
    const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_TWEETS_COLLECTION_ID,
        queries);
    return response;
};

// given string time, return query
function fetchTimeQuery(time: string) {
    let timeQuery;
    switch (time) {
        case "hour":
            timeQuery = thisHourQuery;
            break;
        case "day":
            timeQuery = thisDayQuery;
            break;
        case "week":
            timeQuery = thisWeekQuery;
            break;
        case "season3":
            timeQuery = season3Query;
            break;
        default:
            timeQuery = thisHourQuery;
    };
    return timeQuery;
};

// fetch tweets
export async function fetchTweets(time: string, offset: number = 0, limit: number = 5) {
    let timeQuery = fetchTimeQuery(time);
    console.log(timeQuery);
    const response = await fetchResponse([
        timeQuery,
        Query.orderDesc("score"),
        Query.offset(offset),
        Query.limit(limit)
    ]);
    return response.documents;
};

// fetch tweet count
export async function fetchTweetCount(time: string) {
    let timeQuery = fetchTimeQuery(time);
    console.log(timeQuery);

    let offset = 0;
    let limit = 5000;
    let response = await fetchResponse([
        timeQuery,
        Query.offset(offset),
        Query.limit(limit)
    ]);

    // fetch count when more than limit
    let count = response.documents.length;
    let total = count;
    while (count > limit - 1) {
        offset += count;
        response = await fetchResponse([
            timeQuery,
            Query.offset(offset),
            Query.limit(limit)
        ]);
        count = response.documents.length;
        total += count;
        console.log(limit, offset, total);
    }
    return total;
};
