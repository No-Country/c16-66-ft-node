//controllers Doctors
const {getAllDoctors} = require("../handlers/getDoctorsHandler");
const {createDoctorHandler} = require("../handlers/doctors/createDoctorHandler")
const {updateDoctorHandler} = require("../handlers/doctors/updateDoctorHandler")
const {getDoctorsByIdHandler} = require("../handlers/doctors/getDoctorByIdHandler")
const {deleteDoctorByIdHandler} = require("../handlers/doctors/deleteDoctorByIdHandler")

//controllers Pacients
const {getAllPacientsHandler} = require("../handlers/pacients/getPacientsHandler")
const {getPacientByIdHandler} = require("../handlers/pacients/getPacientByIdHandler")

//controllers Appoinments
const {createAppoinmentHandler} = require("../handlers/appoinments/createAppoinmentHandler")
const {getAllAppoinment} = require("../handlers/appoinments/getAppoinmentHandler")
const {getAppoinmentByIdHandler} = require("../handlers/appoinments/getAppoinmentByIdHandler")
const {deleteAppoinmentByIdHandler} = require("../handlers/appoinments/deleteAppoinmentByIdHandler")

//controllers Reviews
const {createReviewHandler} = require("../handlers/reviews/createReviewHandler")
const {getAllReviesHandler} = require("../handlers/reviews/getReviewsHandler")

//express config
const {Router} = require("express");
const router = Router();

//doctors routes
router.get("/doctors", getAllDoctors);

router.get("/doctors/:id", getDoctorsByIdHandler);

router.post("/doctors", createDoctorHandler);

router.put("/doctors", updateDoctorHandler);

router.delete("/doctors/:doctorId", deleteDoctorByIdHandler);

//pacient routes
router.get("/pacients", getAllPacientsHandler);

router.get("/pacients/:pacientId", getPacientByIdHandler);

//appoinment routes
router.get("/appoinment", getAllAppoinment)

router.get("/appoinment/:id", getAppoinmentByIdHandler);

router.post("/appoinment", createAppoinmentHandler);

router.delete("/appoinment/:id", deleteAppoinmentByIdHandler);

//reviews routes
router.post("/reviews", createReviewHandler);

router.get("/reviews", getAllReviesHandler);

module.exports = router; 