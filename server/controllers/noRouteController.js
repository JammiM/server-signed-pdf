const noRouteCtrl = async function (request, response) {
  response.render("pages/noRoute.ejs", { request });
  response.status(404);
};

export { noRouteCtrl };
