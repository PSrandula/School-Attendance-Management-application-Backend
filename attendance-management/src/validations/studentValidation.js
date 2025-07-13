const { body } = require("express-validator");

exports.validateStudent = [
  body("name")
    .notEmpty()
    .withMessage("Student name is required"),
  body("age")
    .notEmpty()
    .withMessage("Student age is required")
    .isInt({ min: 3, max: 30 })
    .withMessage("Student age must be between 3 and 30")
];
