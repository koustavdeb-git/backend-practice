const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router()

const {getEmployees, getEmpByID, createEmployee, updateEmployee, deleteEmployee} = require("../controllers/employeeController")

router.use(authMiddleware)

router.get("/", getEmployees)
router.get("/:id", getEmpByID)
router.post("/", createEmployee)
router.patch("/:id", updateEmployee)
router.delete("/:id", deleteEmployee)

module.exports = router
