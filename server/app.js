import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("Set up ready");
});

app.get("/signed_pdf", (request, response) => {
  response.send("signed pdf GET response");
});

app.post("/upload_pdf", (request, response) => {
  response.send("Pdf uploaded");
});

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
