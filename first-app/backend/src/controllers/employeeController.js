const pool = require("../config/db")

const getEmployees = async (req, res) => {
    try {
        const emp = await pool.query("SELECT * FROM employees");
        res.json(emp.rows);

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
    }
};


const getEmpByID = async (req, res) => {
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
};


const createEmployee = async (req, res) => {
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
};


const updateEmployee = async (req, res) => {
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
}



const deleteEmployee = async (req, res) => {
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
};

module.exports = {
    getEmployees,
    getEmpByID,
    createEmployee,
    updateEmployee,
    deleteEmployee
}