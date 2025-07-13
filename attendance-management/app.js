const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const gradeRoutes = require("./src/routes/gradeRoutes");
const classRoutes = require("./src/routes/classRoutes");
const studentRoutes = require("./src/routes/studentRoutes");

app.use("/api/grades", gradeRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
