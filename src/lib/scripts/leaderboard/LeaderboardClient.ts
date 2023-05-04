import { Client, Databases, Query } from 'appwrite';

// create appwrite client
const client = new Client();
client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT);

// create db instance
const databases = new Databases(client);

// fetch house points
export async function fetchHousePoints() {
    const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_POINTS_COLLECTION_ID);
    return response.documents;
}

// fetch data from DB for given query filters
async function fetchResponse(queries: Array<string>) {
    const response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_LEADERBOARD_COLLECTION_ID,
        queries);
    return response;
};

// fetch projects
export async function fetchProjects(offset: number = 0, limit: number = 15) {
    const response = await fetchResponse([
        Query.orderDesc("points"),
        Query.offset(offset),
        Query.limit(limit)
    ]);
    return response.documents;
};
