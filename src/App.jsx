import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";


export default function App() {
  return (
    <Router>
      <Header /> {/* BURAYA AL */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kurumsal" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}