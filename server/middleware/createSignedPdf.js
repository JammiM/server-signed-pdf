import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "node:fs";

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 30;
  page.drawText("Creating PDFs in JavaScript is awesome!", {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
}

const createSignedPdf = function (req, response, next) {
  createPdf()
    .then(function (pdfBuffer) {
      try {
        process.chdir("signed_pdf_file");
      } catch (err) {
        console.error(err.message);
      }
      writeFromBuffer(pdfBuffer);

      const signedPdf = "http://localhost:3000/static/1754563472120-Signed.pdf";
      const responseText = `<a href=${signedPdf} download="signed-pdf.pdf" target="_blank">Download signe pdf</a>`;

      response.statusCode = 200;
      response.type("html");
      response.send(responseText);

      next();
    })
    .catch(function (err) {
      console.error(err.message);
    });
  next();
};

const writeFromBuffer = function (pdfBuffer) {
  fs.writeFile(`${Date.now()}-Signed.pdf`, pdfBuffer, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("File written & Fire clean up / unlink");
    }
  });
};

export { createSignedPdf };
