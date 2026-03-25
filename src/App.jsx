import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import FloatingSocialLinks from "./components/FloatingSocialLinks";

export default function App() {
  return (
    <Router>
      <Header /> {/* BURAYA AL */}
      <FloatingSocialLinks /> {/* BURAYA AL */}
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kurumsal" element={<AboutUsPage />} />
        <Route path="/urunler" element={<ProductsPage />} />
        <Route path="/hizmetler" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}