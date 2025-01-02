import ContactUs from "@/pages/ContactUs";
import Home from "@/pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default AuthRoute;
