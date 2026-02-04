import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3200;

app.get("/", (req, res) => {
  res.send("Server is ready now");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
