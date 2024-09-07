import express from "express";
import { loggingMiddleware } from "./loggingMiddleware.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(loggingMiddleware);
app.get("/", (req, res) => {
  console.log("Request Received.");
  res.status(200).json({ message: "Request Successful!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
