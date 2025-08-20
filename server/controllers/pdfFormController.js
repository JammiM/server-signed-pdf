const pdfFormCtrl = async function (request, response) {
  response.render("pages/pdf-upload", {
    request,
  });
};

export { pdfFormCtrl };
