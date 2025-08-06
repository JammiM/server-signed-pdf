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

const handleSignedPdf = function (request, response, next) {
  response.send("signed pdf GET response");
  next();
};

const handleFilePath = function (request, response, next) {
  console.log(request.file.path);
  next();
};

export { handlePdfUpload, handleSignedPdf, handleFilePath };
