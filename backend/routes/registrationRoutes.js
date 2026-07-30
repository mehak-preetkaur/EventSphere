const express = require("express");
const router = express.Router();

const {
    registerStudent,
    getRegistrations
} = require("../controllers/registrationController");

router.get("/", getRegistrations);
router.post("/", registerStudent);

module.exports = router;