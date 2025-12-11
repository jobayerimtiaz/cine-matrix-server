import express from "express";
import { serve } from "inngest/express";
import { inngest, functions } from "./ingest/index.js";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import ShowRouter from "./routes/showRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

await connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

//api route

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/inngest", serve({ client: inngest, functions }));

app.use("/api/shows", ShowRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
