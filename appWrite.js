import { Client, Storage } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APP_ENDPOINT)
    .setProject(import.meta.env.VITE_APP_PROJECT_ID);

export const storage = new Storage(client);
