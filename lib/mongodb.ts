import {MongoClient} from "mongodb";

const uri: string = process.env.MONGO_DB_URL || "";
const options = {};

if (!uri) {
    throw new Error("Please add MONGODB_URI to .env.local");
}

const client: MongoClient = new MongoClient(uri, options);
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    if (!(global as { _mongoClientPromise?: Promise<MongoClient> })._mongoClientPromise) {
        (global as { _mongoClientPromise?: Promise<MongoClient> })._mongoClientPromise = client.connect();
    }
    clientPromise = (global as { _mongoClientPromise?: Promise<MongoClient> })._mongoClientPromise || client.connect();
} else {
    clientPromise = client.connect();
}

export default clientPromise;
