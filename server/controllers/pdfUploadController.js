import { PDFDocument, rgb } from "pdf-lib";
import path from "path";
import { readFileSync, writeFile } from "fs";

const pdfUploadCtrl = async function (request, response) {
  if (!request.file.mimetype == "application/pdf") {
    response.status(406).send("Uploaded file is not a PDF");
    response.end();
    return;
  } else {
    const uploadedPath = request.file.path;
    const editedPath = path.join(
      "signed_pdf_file",
      "signed-" + request.file.filename
    );

    try {
      const existingPdfBytes = readFileSync(uploadedPath);
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      var userSignature = process.env.SIGNATURE || "Test";

      const signatureWithDate = `${userSignature} | ${new Date()
        .toLocaleString("en-IE", { timeZone: "gmt" })
        .toString()}`;

      firstPage.drawText(signatureWithDate, {
        x: 50,
        y: 50,
        size: 16,
        color: rgb(0, 0, 0),
      });

      const modifiedBuffer = await pdfDoc.save();

      writeFile(editedPath, modifiedBuffer, "utf-8", (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("File written & Fire clean up / unlink");
        }
      });

      const downloadUrl = `/static/signed-${request.file.filename}`;
      response.send(
        `<a href="${downloadUrl}" target="_blank">Download signed PDF</a>`
      );
    } catch (err) {
      console.error(err);
      response.status(500).send("Failed to edit PDF.");
    }
  }
};

export { pdfUploadCtrl };
