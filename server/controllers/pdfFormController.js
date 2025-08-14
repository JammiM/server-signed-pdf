const pdfFormCtrl = async function (request, response) {
  response.send(
    `<form
        action="${
          request.protocol + "://" + request.get("host")
        }/api/upload_pdf"
        method="post"
        enctype="multipart/form-data"
      >
        <label for="pdf-to-sign">Choose a pdf to sign:</label>

        <input type="file" id="pdf-to-sign" name="pdf-to-sign" accept=".pdf" />
        <button type="submit">submit</button>
      </form>
    `
  );
};

export { pdfFormCtrl };
