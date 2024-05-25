import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import dotenv from "dotenv";
import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log(`Server listening on port http://localhost:8080`);
});

dotenv.config();
const DB_REMOTE = process.env.DB_REMOTE;

mongoose.Promise = Promise;
mongoose.connect(DB_REMOTE);
mongoose.connection.on("error", (error: Error) =>
  console.log("Error connecting to mongo: ", error)
);

app.use("/", router());
