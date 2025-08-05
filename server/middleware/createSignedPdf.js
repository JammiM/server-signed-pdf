const createSignedPdf = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

export { createSignedPdf };
