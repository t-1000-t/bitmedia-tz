function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found");
  next(error);
}

module.exports = notFound;
