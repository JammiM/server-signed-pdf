import express from "express";

import { upload } from "../multer-config.js";

import {
  handleSignedPdf,
  handlePdfUpload,
  handleFilePath,
} from "../controllers/pdfUploadController.js";

const router = express.Router();

const pdfHandler = [handlePdfUpload, handleFilePath];

router.post("/upload_pdf", upload.single("pdf-to-sign"), pdfHandler);

router.get("/signed_pdf", handleSignedPdf);

export { router };
