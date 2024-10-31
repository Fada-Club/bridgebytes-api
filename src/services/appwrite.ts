import { Account, Client } from "appwrite";

const projectId = process.env.APPWRITE_PROJECT_ID;

if (!projectId) {
    throw new Error('Missing AWS credentials: ACCESS_KEY_ID and/or SECRET_ACCESS_KEY');
}

const client = new Client()
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(projectId)

export const account = new Account(client)


