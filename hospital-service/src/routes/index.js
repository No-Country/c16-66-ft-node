//controllers
const {getAllDoctors} = require("../handlers/getDoctorsHandler");
const {createDoctorHandler} = require("../handlers/doctors/createDoctorHandler")
const {updateDoctorHandler} = require("../handlers/doctors/updateDoctorHandler")

//express config
const {Router} = require("express");
const router = Router();

router.get("/doctors", getAllDoctors);

router.post("/doctors", createDoctorHandler);

router.put("/doctors", updateDoctorHandler);

module.exports = router; 