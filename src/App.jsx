import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import AppointmentPage from "./pages/AppoitmentPage";
import PortalPage from "./pages/PortalPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import BlogPage from "./pages/BlogPage";
import TestimonialsPage from "./pages/TestimonialPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import Avalibel from "../src/pages/Avalibel.jsx";
import ScreenPage from "./pages/ScreenPage";

// Media Pages
import EducationPage from "./pages/media/EducationPage";
import SocialPage from "./pages/media/SocialPage";
import ArticlePage from "./pages/media/ArticlePage";
import ArticleDetailPage from "./pages/media/ArticleDetailPage";
import PublicationPage from "./pages/media/PublicationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/portal" element={<PortalPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/Avalibel" element={<Avalibel />} />
        <Route path="/screen" element={<ScreenPage />} />
        
        {/* Media Routes */}
        <Route path="/media/education" element={<EducationPage />} />
        <Route path="/media/social" element={<SocialPage />} />
        <Route path="/media/article" element={<ArticlePage />} />
        <Route path="/media/article/:id" element={<ArticleDetailPage />} />
        <Route path="/media/publication" element={<PublicationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

