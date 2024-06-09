import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { Router } from "./routes/routes.js";

import "./config/db.js";

const app = express();
app.use(express.json());

// const allowedOrigins = [
//   "https://mtg-deck-creator-client.vercel.app"
// ];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || origin.startsWith("https://mtg-deck-creator-client")) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

dotenv.config({ path: "./config/.env" });

app.use("/contactmsyt", Router);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port http://localhost:${process.env.PORT}`);
});
