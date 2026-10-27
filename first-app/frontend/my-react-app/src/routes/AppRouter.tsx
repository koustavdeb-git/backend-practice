import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"
import Dashboard from "../pages/Dashboard"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Dashboard/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
