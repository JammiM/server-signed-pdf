import express from "express";

import { upload } from "../multer-config.js";

import {
  handleSignedPdf,
  handlePdfUpload,
} from "../controllers/pdfUploadController.js";
import { createSignedPdf } from "../middleware/createSignedPdf.js";

const router = express.Router();

const pdfHandler = [handlePdfUpload, createSignedPdf];

router.post("/upload_pdf", upload.single("pdf-to-sign"), pdfHandler);

router.get("/signed_pdf", handleSignedPdf);

export { router };
