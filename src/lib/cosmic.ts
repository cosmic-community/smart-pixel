import { createBucketClient } from '@cosmicjs/sdk';

if (!import.meta.env.COSMIC_BUCKET_SLUG || !import.meta.env.COSMIC_READ_KEY) {
  throw new Error('Missing required Cosmic environment variables');
}

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.COSMIC_READ_KEY,
  writeKey: import.meta.env.COSMIC_WRITE_KEY,
});