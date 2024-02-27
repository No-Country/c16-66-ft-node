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

//express config
const { Router } = require("express");

const router = Router();

//doctors routes
router.get("/doctors", getAllDoctors);

router.get("/doctors/:id", getDoctorsByIdHandler);

router.post("/doctors", createDoctorHandler);

router.put("/doctors", updateDoctorHandler);

router.delete("/doctors/:doctorId", deleteDoctorByIdHandler);

router.post(
  "/doctors/signup",
  passport.authenticate("registerDoctor", {
    failureRedirect: "/failregister",
  }),
  (req, res) => {
    try {
      res.send("Registrado");
    } catch (err) {
      res.send("El usuario ya existe en la base de datos", err.message);
    }
  }
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
      res.send("Registrado");
    } catch (err) {
      console.error(err.message);
    }
  }
);

router.post(
  "/pacients/login",
  passport.authenticate("loginPacient", { failureRedirect: "/FailureLogin" }),
  (req, res) => {
    try {
      res.status(200).send("Paciente logueado");
    } catch (err) {
      res.send(err);
    }
  }
);

//appoinment routes
router.get("/appoinment", getAllAppoinment);

router.get("/appoinment/:id", getAppoinmentByIdHandler);

router.post("/appoinment", createAppoinmentHandler);

router.delete("/appoinment/:id", deleteAppoinmentByIdHandler);

//reviews routes
router.post("/reviews", createReviewHandler);

module.exports = router;
