import { Client, Databases } from 'appwrite';

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
