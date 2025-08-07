import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler.js";
import { router } from "./routes/pdfRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(errorHandler);
app.use("/static", express.static("signed_pdf_file"));
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
