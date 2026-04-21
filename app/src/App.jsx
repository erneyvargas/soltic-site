import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./v2/Navbar";
import Footer from "./v2/Footer";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-poppins bg-white text-navy-900 dark:bg-navy-950 dark:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/trabajo" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
