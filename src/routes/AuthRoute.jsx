import CategoryHighlights from "@/pages/CategoryHighlights";
import ContactUs from "@/pages/ContactUs";
import Home from "@/pages/Home";
import ProductCarousel from "@/pages/ProductCarousel";
import { Navigate, Route, Routes } from "react-router-dom";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/category-highlights" element={<CategoryHighlights />} />
      <Route path="/product-carousel" element={<ProductCarousel />} />
      {/* <Route path="/category-highlights" element={<CategoryHighlights />} /> */}
      {/* <Route path="/category-highlights" element={<CategoryHighlights />} /> */}
    </Routes>
  );
};

export default AuthRoute;
