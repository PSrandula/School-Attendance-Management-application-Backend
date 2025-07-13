const { body } = require("express-validator");

exports.validateGrade = [
  body("name")
    .notEmpty()
    .withMessage("Grade name is required")
    .isLength({ min: 2 })
    .withMessage("Grade name must be at least 2 characters")
];
