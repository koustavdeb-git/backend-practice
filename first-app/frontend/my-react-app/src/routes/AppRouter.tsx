import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"
import Dashboard from "../pages/Dashboard"
import Portal from "../pages/Portal"
import Login from "../pages/Login"
import ProtectedRoute from "./ProtectedRoute"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="portal" element={<Portal />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
