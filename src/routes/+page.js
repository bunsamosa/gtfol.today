import { Client, Databases, Query } from 'appwrite';

// create appwrite client
const cient = new Client();
cient
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT);

// create db instance
const databases = new Databases(cient);

// fetch data
export async function load() {
    const data = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        [
            Query.greaterThan("created_on", "2023-04-08T00:00:00.000Z"),
            Query.orderDesc("score"),
            Query.limit(10),
        ]
    );

    return {
        tweets: data.documents,
    }
}
