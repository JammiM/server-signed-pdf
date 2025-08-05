import express from "express";
import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

import { router } from "./routes/pdfRoutes.js";

dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", router);

app.get("/signed_pdf", (request, response) => {
  response.send("signed pdf GET response");
  // response.download()
});

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
