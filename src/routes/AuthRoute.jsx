import { Navigate, Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import ResetPassword from "pages/ResetPassword";
import Verification from "pages/Verification";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthRoute;
