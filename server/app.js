import express from "express";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const upload = multer({ dest: "uploads/", preservePath: true });
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("Set up ready");
});

app.get("/signed_pdf", (request, response) => {
  response.send("signed pdf GET response");
  // response.download()
});

app.post(
  "/upload_pdf",
  upload.single("pdf-to-sign"),
  (request, response, next) => {
    response.json({ msg: "File uploaded" });
    response.statusCode = 200;
    console.log(request.file);
  }
);

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
