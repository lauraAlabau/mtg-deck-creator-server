import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./config/.env" })

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB_REMOTE)
    console.log("Mongoose Connected")
  } catch (error) {
    console.log(`Mongoose Error: ${error}`)
  }
}

Connection()