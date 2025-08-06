import express from "express";
import dotenv from "dotenv";

import { router } from "./routes/pdfRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
