const handlePdfUpload = function (request, response, next) {
  if (!request.file.mimetype == "application/pdf") {
    response.sendStatus(406);
    response.end();
  } else {
    response.statusCode = 200;
    next();
    response.end();
  }
};

const handleSignedPdf = function (request, response) {
  response.send("signed pdf GET response");
};

const handleFilePath = function (request, response) {
  console.log(request.file.path);
};

export { handlePdfUpload, handleSignedPdf, handleFilePath };
