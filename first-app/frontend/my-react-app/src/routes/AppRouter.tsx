import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  const Login = lazy(() => import("../pages/Login"));
  const Dashboard = lazy(() => import("../pages/Dashboard"));
  const Form = lazy(() => import("../pages/Form"));
  const Portal = lazy(() => import("../pages/Portal"));
  return (
    <Suspense fallback={<p>Loading Page...</p>}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="portal" element={<Portal />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
