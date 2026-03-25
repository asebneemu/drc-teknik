import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import FloatingSocialLinks from "./components/FloatingSocialLinks";
import FooterSection from "./components/FooterSection";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ContactPage from "./pages/ContactPage";

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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}
