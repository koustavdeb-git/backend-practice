import React, { useEffect } from 'react'
import Button from '../components/ui/Button'
import api from '../api/axiosInterceptors'

const Dashboard = () => {
  useEffect(() => {
    const getEmp = async () => {

      try {
        const res = await api.get("/employees")

        console.log("Api response", res.data)

      }
      catch (error) {
        console.log(error)
      }
    }

    getEmp()
  }, [])

  const addEmployee = async () => {
    const employeeData = {
      "name": "Rahul",
      "department": "Frontend Developer",

    }

    try {
      const res = await api.post("/employees", employeeData)
      console.log("Employee created:", res.data)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      <h1 className='my-2'>Features to practice:</h1>
      <Button label="Portal" navigation="/portal" />
      <button onClick={addEmployee}>
        Add Employee
      </button>
    </div>
  )
}

export default Dashboard
