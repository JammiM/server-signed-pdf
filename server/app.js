import express from "express";
import dotenv from "dotenv";
import path from "path";
import { errorHandler } from "./middleware/errorHandler.js";
import { router } from "./routes/pdfRoutes.js";

import { fileURLToPath } from "url";

import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(errorHandler);
app.use("/static", express.static("signed_pdf_file"));
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
