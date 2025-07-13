const express = require("express");
const router = express.Router();
const { createClass, getClasses, updateClass, deleteClass } = require("../controllers/classController");
const { validateClass } = require("../validations/classValidation");
const { runValidation } = require("../middlewares/validation");

router.post("/:gradeId", validateClass, runValidation, createClass);
router.get("/:gradeId", getClasses);
router.put("/:gradeId/:classId", validateClass, runValidation, updateClass);
router.delete("/:gradeId/:classId", deleteClass);

module.exports = router;
