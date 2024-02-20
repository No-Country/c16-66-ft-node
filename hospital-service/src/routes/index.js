//controllers
const {getAllDoctors} = require("../handlers/getDoctorsHandler");
const {createDoctorHandler} = require("../handlers/doctors/createDoctorHandler")
const {updateDoctorHandler} = require("../handlers/doctors/updateDoctorHandler")
const {getDoctorsByIdHandler} = require("../handlers/doctors/getDoctorByIdHandler")
const {deleteDoctorByIdHandler} = require("../handlers/doctors/deleteDoctorByIdHandler")

//express config
const {Router} = require("express");
const router = Router();

router.get("/doctors", getAllDoctors);

router.get("/doctors/:id", getDoctorsByIdHandler);

router.post("/doctors", createDoctorHandler);

router.put("/doctors", updateDoctorHandler);

router.delete("/doctors/:id", deleteDoctorByIdHandler);

module.exports = router; 