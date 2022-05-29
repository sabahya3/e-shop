function errorHandler(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res.json("Please Enter A Valid Token");
  }
  if (err) {
    return res.json({ error: err });
  }
}

module.exports = errorHandler;
