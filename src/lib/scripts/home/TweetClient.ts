import { createClient } from '@supabase/supabase-js';

// create supabase client
const client = createClient(
    import.meta.env.VITE_FRIDGE_URL,
    import.meta.env.VITE_FRIDGE_KEY,
    {
        db: {
            schema: import.meta.env.VITE_FRIDGE_SCHEMA,
        }
    }
);

const now = new Date();
const queryFilters: Array<Array<string>> = [];

// query for this hour
const oneHourAgo = new Date(now.getTime() - 3600000);

// query for last 24 hours
const oneDayAgo = new Date(now.getTime() - 86400000);

// query for last 7 days
const oneWeekAgo = new Date(now.getTime() - 604800000);

// query for season - start date February 2nd 2024
const seasonStart = new Date("2024-02-02T00:00:00.000Z");

// given string time, return query
function fetchTimeQuery(time: string) {
    queryFilters.length = 0;
    switch (time) {
        case "hour":
            queryFilters.push(['created_on', 'gt', oneHourAgo.toISOString()]);
            break;

        case "day":
            queryFilters.push(['created_on', 'gt', oneDayAgo.toISOString()]);
            break;

        case "week":
            queryFilters.push(['created_on', 'gt', oneWeekAgo.toISOString()]);
            break;

        case "season":
            queryFilters.push(['created_on', 'gt', seasonStart.toISOString()]);
            break;

        default:
            queryFilters.push(['gt', 'created_on', oneHourAgo.toISOString()]);
    };
};

// fetch tweets
export async function fetchTweets(time: string, offset: number = 0, limit: number = 5) {
    fetchTimeQuery(time);

    // build query
    let query = client.from(
        import.meta.env.VITE_TWEETS_COLLECTION_ID
    ).select('*');

    // apply filters
    queryFilters.forEach(element => {
        query = query.filter(...element);
    });

    // apply limit and offset
    query = query.order('score', { ascending: false }).range(offset, offset + limit);
    const response = await query;
    console.log(response);

    if(response.data === null) {
        return [];
    }
    return response.data;
};

// fetch tweet count
export async function fetchTweetCount(time: string) {
    fetchTimeQuery(time);

    // build query
    let query = client.from(
        import.meta.env.VITE_TWEETS_COLLECTION_ID
    ).select('*', { count: 'exact', head: true });

    // apply filters
    queryFilters.forEach(element => {
        query = query.filter(...element);
    });

    const {data, count} = await query;
    return count;
};
