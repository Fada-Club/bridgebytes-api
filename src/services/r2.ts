import { S3Client } from '@aws-sdk/client-s3';

const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const cloudflareAccountId = process.env.CLOUDFLARE_ACCOUNT_ID;

if (!accessKeyId || !secretAccessKey || !cloudflareAccountId) {
    throw new Error('Missing AWS credentials: ACCESS_KEY_ID and/or SECRET_ACCESS_KEY');
}

const s3Client = new S3Client({
    region: 'us-east-1',
    endpoint: `https://${cloudflareAccountId}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId,
        secretAccessKey
    }
});