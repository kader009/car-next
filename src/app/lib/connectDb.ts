import { Db, MongoClient, ServerApiVersion } from 'mongodb';

let db: Db | null;

export const connectDb = async () => {
  if (db) return db;

  try {
    const url = process.env.MONGODB_URL as string;
    const client = new MongoClient(url, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db('car-dortor');
    return db;

  } catch (error) {
    console.log(error);
  }
};
