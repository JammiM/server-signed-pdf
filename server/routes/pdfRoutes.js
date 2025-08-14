import express from "express";
import { upload } from "../multer-config.js";
import { pdfUploadCtrl } from "../controllers/pdfUploadController.js";

const router = express.Router();

router.post("/upload_pdf", upload.single("pdf-to-sign"), pdfUploadCtrl);

export { router };
