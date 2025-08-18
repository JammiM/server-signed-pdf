import express from "express";
import { upload } from "../multer-config.js";
import { pdfUploadCtrl } from "../controllers/pdfUploadController.js";
import { pdfFormCtrl } from "../controllers/pdfFormController.js";

const router = express.Router();

router.get("/", pdfFormCtrl);

router.post("/upload_pdf", upload.single("pdf-to-sign"), pdfUploadCtrl);

export { router };
