const express = require("express");
const router = express.Router();
const {  dashboardController } = require("../../../controllers");
const authenticAdmin = require("../../../middlewares/adminAuth");
const { singleFileUpload, multiDiffFileUpload } = require("../../../helpers/upload");
// const { adminAuthValidation } = require("../../../validations");
// const validate = require("../../../validations/admin.validation");

router.get("/search-doctor-and-patient-list",
    authenticAdmin, 
    dashboardController.searchDoctorAndPatientist);
module.exports = router;
router.get("/doctor-list",authenticAdmin, dashboardController.allDoctorList);
router.post("/doctor-list-id", authenticAdmin, dashboardController.allDoctorListId);
router.get("/doctor-list-search-doctor",authenticAdmin, dashboardController.searchDoctor);
router.delete("/doctor-list-delete",authenticAdmin, dashboardController.deleteDoctor);