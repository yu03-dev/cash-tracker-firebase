import { onRequest } from "firebase-functions/v2/https";
import * as express from "express";
import * as cors from "cors";

import RecordRouter from "./routes/records";
import { authChecker } from "./middleware/authChecker";

const corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();

// middleware
app.use(cors(corsOptions));
app.use(authChecker);

app.use("/", RecordRouter);

export const api = onRequest(app);
