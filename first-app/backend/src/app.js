const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes")
const authRoute = require('./routes/authRoute')
const app = express();

app.use(cors());
app.use(express.json());

// Routes will be registered here

app.use("/api/auth", authRoute)
app.use("/api/employees", employeeRoutes)

module.exports = app;