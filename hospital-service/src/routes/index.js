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
  registerDoctorHandler,
} = require("../handlers/doctors/registerDoctorHandler");

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
  registerPacientHandler,
} = require("../handlers/pacients/registerPacientHandler");

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

const { storeTokenMiddleware } = require("../middlewares/storeToken");

const { getTokenB } = require("../services/videoCallService-B/getTokenB");

const { createTokenB } = require("../services/videoCallService-B/createTokenB");

//controllers admin

const { createAdminHandler } = require("../handlers/admin/createAdminHandler");

const { getAdminHandler } = require("../handlers/admin/getAdminHandler");

//controllers sessions

const { checkSessionMiddleware } = require("../middlewares/checkSession");

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
  loginPacientHandler
);

//admin routes

router.post("/admin", createAdminHandler);

router.get("/admin", getAdminHandler);

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

router.get("/currentUser", getCurrentUser);

//videocalls routes

router.post("/createRoom", createRoom);

router.post("/token", createAccessToken);

router.get("/token", getToken);

router.post("/tokenB", storeTokenMiddleware, createTokenB);

// Ruta GET para decodificar el token y verificar la información
router.get("/tokenB", storeTokenMiddleware, getTokenB);

module.exports = router;
