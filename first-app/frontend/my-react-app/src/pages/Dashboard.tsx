import React from 'react'
import Button from '../components/ui/Button'

const Dashboard = () => {
  return (
    <div>
      <h1 className='my-2'>Features to practice:</h1>
      <Button label="Portal" navigation="/portal" />
    </div>
  )
}

export default Dashboard
