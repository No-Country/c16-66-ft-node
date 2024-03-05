const destroySessionHandler = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports = { destroySessionHandler };
