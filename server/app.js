import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";

dotenv.config();

// Set up storage options
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `(${Date.now()})-${file.originalname}`);
  },
});

// Initialize multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only pdf's are allowed"));
    }
  },
});

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
    if (!request.file.mimetype == "application/pdf") {
      response.sendStatus(406);
      response.end();
    } else {
      response.statusCode = 200;
      console.log(request.file);
      response.end();
    }
  }
);

app.listen(port, () => {
  console.log(`Listening on port : ${port}`);
});
