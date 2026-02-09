import express from "express";
import healthRoute from "./routes/health.js";
import infoRoute from "./routes/info.js";
import crashRoute from "./routes/crash.js";
import burnRoute from "./routes/burn.js";
import metricsRoute from "./routes/metrics.js";
import readyRoute from "./routes/ready.js";

const app = express();

app.use("/", infoRoute);
app.use('/health', healthRoute);
app.use('/ready', readyRoute);
app.use('/crash', crashRoute);
app.use('/burn', burnRoute);
app.use('/info', infoRoute);
app.use('/metrics', metricsRoute);
export default app;
