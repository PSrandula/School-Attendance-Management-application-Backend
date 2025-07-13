const { body } = require("express-validator");

exports.validateClass = [
  body("name")
    .notEmpty()
    .withMessage("Class name is required")
];
