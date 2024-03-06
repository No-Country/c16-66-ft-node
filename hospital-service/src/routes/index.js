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

const { getCurrentUser } = require("../utils/getCurrentUser");

//services videoCalls controllers

const { createRoom } = require("../services/videoCallService-A/createRoom");

const {
  createAccessToken,
} = require("../services/videoCallService-A/createAccessToken");

const { getToken } = require("../services/videoCallService-A/getToken");

const { decodeTwilioToken } = require("../utils/decodeTwilioToken");

const { storeTokenMiddleware } = require("../middlewares/storeToken");

//express config
const { Router } = require("express");
const {
  registerPacientHandler,
} = require("../handlers/pacients/registerPacientHandler");
const {
  registerDoctorHandler,
} = require("../handlers/doctors/registerDoctorHandler");
const { checkSessionMiddleware } = require("../middlewares/checkSession");

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
  registerDoctorHandler
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
  registerPacientHandler
);

router.post(
  "/pacients/login",
  passport.authenticate("loginPacient", { failureRedirect: "/failureLogin" }),
  checkSessionMiddleware,
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

router.get("/session", checkSessionMiddleware, checkSessionHandler);

router.get("/logout", destroySessionHandler);

router.get("/currentUser", getCurrentUser);

//videocalls routes

router.post("/createRoom", createRoom);

router.post("/token", createAccessToken);

router.get("/token", getToken);

//let cachedToken;

router.post("/tokenB", storeTokenMiddleware, (req, res) => {
  const token = req.customToken; // Accede al token almacenado en la solicitud

  console.log(token);

  res.send(token);
});

// Ruta GET para decodificar el token y verificar la información
router.get("/tokenB", storeTokenMiddleware, (req, res) => {
  const token = req.customToken; // Accede al token almacenado en la solicitud

  console.log(token);

  if (token) {
    const decodedToken = decodeTwilioToken(token);
    if (decodedToken) {
      res.send(decodedToken);
    } else {
      res.status(500).send("Error al decodificar el token");
    }
  } else {
    res.status(404).send("Token not found");
  }
});

module.exports = router;
