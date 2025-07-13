const express = require("express");
const router = express.Router();
const { createStudent, getStudents, updateStudent, deleteStudent } = require("../controllers/studentController");
const { validateStudent } = require("../validations/studentValidation");
const { runValidation } = require("../middlewares/validation");

router.post("/:gradeId/:classId", validateStudent, runValidation, createStudent);
router.get("/:gradeId/:classId", getStudents);
router.put("/:gradeId/:classId/:studentId", validateStudent, runValidation, updateStudent);
router.delete("/:gradeId/:classId/:studentId", deleteStudent);

module.exports = router;
