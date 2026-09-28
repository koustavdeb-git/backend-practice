const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/employees", async (req, res) => {
  try {
    const emp = await pool.query("SELECT * FROM employees");
    res.json(emp.rows);

  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.get("/employees/:id", async (req, res) => {
  const id = Number(req.params.id);

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

app.post("/employees", async (req, res) => {
  const { name, department } = req.body;

  if (!name || !department) {
    res.status(400).json({ message: "Please provide name and department" })
  }
  try {
    const emp = await pool.query(" INSERT INTO employees (name, department) VALUES ($1, $2) RETURNING *", [name, department]);

    res.status(201).json(emp.rows[0]);
    console.log(emp.rows[0]);

  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.patch("/employees/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { name, department } = req.body;

  try {
    const emp = await pool.query("UPDATE employees  SET name = $1, department =$2 WHERE id = $3 RETURNING *", [name, department, id]);

    if (emp.rows.length === 0) {
      res.status(404).json({
        message: "Employee not found",
      })
    }

    res.status(200).json(emp.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
})

app.delete("/employees/:id", async (req, res) => {
  const id = Number(req.params.id)

  try {
    const emp = await pool.query("DELETE FROM employees WHERE id = $1 RETURNING *", [id]);

    if (emp.rows.length === 0) {
      return res.status(404).json({
        message: "Employee not found",
      })

    }
    res.status(200).json({ message: "Employee deleted", employee: emp.rows[0] });
    console.log(emp.rows[0]);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});