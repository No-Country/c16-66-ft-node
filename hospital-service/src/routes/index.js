//controllers
const {getAllDoctors} = require("../handlers/getDoctorsHandler");
const {createDoctorHandler} = require("../handlers/doctors/createDoctorHandler")
const {updateDoctorHandler} = require("../handlers/doctors/updateDoctorHandler")
const {getDoctorsByIdHandler} = require("../handlers/doctors/getDoctorByIdHandler")
const {deleteDoctorByIdHandler} = require("../handlers/doctors/deleteDoctorByIdHandler")
const {getAllPacientsHandler} = require("../handlers/pacients/getPacientsHandler")
const {getPacientByIdHandler} = require("../handlers/pacients/getPacientByIdHandler")
const {createAppoinmentHandler} = require("../handlers/appoinments/createAppoinmentHandler")
const {getAllAppoinment} = require("../handlers/appoinments/getAppoinmentHandler")

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

router.post("/appoinment", createAppoinmentHandler);

module.exports = router; 