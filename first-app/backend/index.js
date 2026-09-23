const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/employees", async (req, res) => {
  try {
    const emp =await pool.query("SELECT * FROM employees");
    res.json(emp.rows);

  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.get("/employees/:id", async (req, res) => {
  const id  = Number(req.params.id);

  try {
    const emp = await pool.query("SELECT * FROM employees WHERE id = $1", [id]);

    if (emp.rows.length === 0) {
      res.status(404).json({
        message: "Employee not found",
      })
    }

    res.json(emp.rows[0]);

  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});