const isAdmin = (req, res, next) => {
  if (req.session.userType !== "Admin") {
    res.status(401).send("Autorización Denegada");
  }
  next();
};

const isPacient = (req, res, next) => {
  if (req.session.userType !== "Pacient") {
    res.status(401).send("Autorización Denegada");
  }
  next();
};

const isDoctor = (req, res, next) => {
  if (req.session.userType !== "Doctor") {
    res.status(401).send("Autorización Denegada");
  }
  next();
};

module.exports = { isAdmin, isDoctor, isPacient };
