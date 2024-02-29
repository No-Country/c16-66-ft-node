const passport = require("passport");

//controllers Doctors
const { getAllDoctors } = require("../handlers/getDoctorsHandler");
const {
  createDoctorHandler,
} = require("../handlers/doctors/createDoctorHandler");
const {
  updateDoctorHandler,
} = require("../handlers/doctors/updateDoctorHandler");
const {
  getDoctorsByIdHandler,
} = require("../handlers/doctors/getDoctorByIdHandler");
const {
  deleteDoctorByIdHandler,
} = require("../handlers/doctors/deleteDoctorByIdHandler");

const {
  loginDoctorHandler,
} = require("../handlers/doctors/loginDoctorHandler");

//controllers Pacients
const {
  getAllPacientsHandler,
} = require("../handlers/pacients/getPacientsHandler");
const {
  getPacientByIdHandler,
} = require("../handlers/pacients/getPacientByIdHandler");
const {
  createPacientHandler,
} = require("../handlers/pacients/createPacientHandler");

const {
  deletePacientByIdHandler,
} = require("../handlers/pacients/deletePacientByIdHandler");

const {
  updatePacientHandler,
} = require("../handlers/pacients/updatePacientHandler");

const {
  loginPacientHandler,
} = require("../handlers/pacients/loginPacientsHandler");

//controllers Appoinments
const {
  createAppoinmentHandler,
} = require("../handlers/appoinments/createAppoinmentHandler");
const {
  getAllAppoinment,
} = require("../handlers/appoinments/getAppoinmentHandler");
const {
  getAppoinmentByIdHandler,
} = require("../handlers/appoinments/getAppoinmentByIdHandler");
const {
  deleteAppoinmentByIdHandler,
} = require("../handlers/appoinments/deleteAppoinmentByIdHandler");

//controllers Reviews

const {
  createReviewHandler,
} = require("../handlers/reviews/createReviewHandler");
const {
  getAllReviesHandler,
} = require("../handlers/reviews/getReviewsHandler");

const {
  checkSessionHandler,
} = require("../handlers/session/checkSessionHandler");

const {
  destroySessionHandler,
} = require("../handlers/session/destroySessionHandler");

//express config
const { Router } = require("express");

const router = Router();

//doctors routes
router.get("/doctors", getAllDoctors);

router.get("/doctors/:id", getDoctorsByIdHandler);

router.post("/doctors", createDoctorHandler);

router.put("/doctors/:doctorId", updateDoctorHandler);

router.delete("/doctors/:doctorId", deleteDoctorByIdHandler);

router.post(
  "/doctors/signup",
  passport.authenticate("registerDoctor", {
    failureRedirect: "/failregister",
  }),
  (req, res) => {
    try {
      res.status(200).send("Doctor Registrado");
    } catch (err) {
      res.status(500).send("Error al registrar al Doctor", err.message);
    }
  }
);

router.post(
  "/doctors/login",
  passport.authenticate("loginDoctor", { failureRedirect: "/failurelogin" }),
  loginDoctorHandler
);

//pacient routes
router.get("/pacients", getAllPacientsHandler);

router.get("/pacients/:pacientId", getPacientByIdHandler);

router.post("/pacients", createPacientHandler);

router.put("/pacients/:pacientId", updatePacientHandler);

router.delete("/pacients/:pacientId", deletePacientByIdHandler);

router.post(
  "/pacients/signup",
  passport.authenticate("registerPacient", {
    failureRedirect: "/failregister",
  }),
  (req, res) => {
    try {
      res.status(200).send("Paciente Registrado");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Error al registrar al Paciente");
    }
  }
);

router.post(
  "/pacients/login",
  passport.authenticate("loginPacient", { failureRedirect: "/failureLogin" }),
  loginPacientHandler
);

//appoinment routes
router.get("/appoinment", getAllAppoinment);

router.get("/appoinment/:id", getAppoinmentByIdHandler);

router.post("/appoinment", createAppoinmentHandler);

router.delete("/appoinment/:id", deleteAppoinmentByIdHandler);

//reviews routes
router.post("/reviews", createReviewHandler);

module.exports = router;

router.get("/reviews", getAllReviesHandler);

//sessions routes

router.get("/session", checkSessionHandler);

router.get("/logout", destroySessionHandler);

module.exports = router;
