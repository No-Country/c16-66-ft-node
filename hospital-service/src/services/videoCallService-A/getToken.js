const getToken = (req, res) => {
  if (req.session.isLogged) {
    const token = req.session.token;
    res.send(token);
  }
};

module.exports = { getToken };
