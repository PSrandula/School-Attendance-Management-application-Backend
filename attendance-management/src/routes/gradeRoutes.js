const express = require("express");
const router = express.Router();
const { createGrade, getGrades, updateGrade, deleteGrade } = require("../controllers/gradeController");
const { validateGrade } = require("../validations/gradeValidation");
const { runValidation } = require("../middlewares/validation");

router.post("/", validateGrade, runValidation, createGrade);
router.get("/", getGrades);
router.put("/:id", validateGrade, runValidation, updateGrade);
router.delete("/:id", deleteGrade);

module.exports = router;
