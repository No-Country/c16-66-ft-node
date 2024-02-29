const destroySessionHandler = (req, res) => {
  req.session.destroy();
  res.redirect("/main");
};

module.exports = { destroySessionHandler };
