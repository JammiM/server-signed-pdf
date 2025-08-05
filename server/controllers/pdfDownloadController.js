const createPdfDownloadLink = function (request, response, next) {
  const filePath = path.join(__dirname, request.file.path);

  console.log(filePath);

  const responseText = `<a download href=${filePath} target="_blank">Download signe pdf</a>`;
  response.send(responseText);

  next();
};

export { createPdfDownloadLink };
