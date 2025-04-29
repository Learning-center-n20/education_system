import e from "express";
import { config } from "dotenv";
import { adminRouter } from "./routes/index.js";
config();
const app = e();

app.use(e.json());

app.use("/api", adminRouter);

export default app;
