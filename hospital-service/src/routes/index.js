//controllers
const {getAllDoctors} = require("../handlers/doctorHandler");

//express config
const {Router} = require("express");
const router = Router();

router.get("/doctors", getAllDoctors);

module.exports = router; 