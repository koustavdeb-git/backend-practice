const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});

app.get("/employees", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Rahul",
      department: "IT",
    },
    {
      id: 2,
      name: "Priya",
      department: "HR",
    },
  ]);
});

app.get("/employees/:id", (req, res) => {
  const id  = Number(req.params.id);

  const employees = [
    {
      id: 1,
      name: "Rahul",
      department: "IT",
    },
    {
      id: 2,
      name: "Priya",
      department: "HR",
    },
  ];

  const emp = employees.find((e) => {
    return e.id === id;
  })

  if (!emp) {
    return res.status(404).json({
      message: "Employee not found",
    });
  }

  res.json(emp);
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});