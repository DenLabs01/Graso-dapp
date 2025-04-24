import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.atlasURI;

const clientOptions = {
  serverApi: { version: "1" as const, strict: true, deprecationErrors: true },
};

export async function run() {
  try {
    await mongoose.connect(uri as string, clientOptions);
    if (mongoose.connection.db) {
      await mongoose.connection.db.admin().command({ ping: 1 });
    } else {
      throw new Error("Database connection is not initialized.");
    }
    return "Successfully connected to MongoDB!";
  } finally {
    await mongoose.disconnect();
  }
}
