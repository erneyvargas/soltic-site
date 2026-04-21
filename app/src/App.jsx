import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./v2/Navbar";
import Footer from "./v2/Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ServicesPage = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="size-10 animate-spin rounded-full border-2 border-navy-100 border-t-violet dark:border-navy-800" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense key={location.pathname} fallback={<RouteFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/"              element={<PageTransition><Home /></PageTransition>} />
          <Route path="/nosotros"      element={<PageTransition><About /></PageTransition>} />
          <Route path="/servicios"     element={<PageTransition><ServicesPage /></PageTransition>} />
          <Route path="/trabajo"       element={<PageTransition><Work /></PageTransition>} />
          <Route path="/blog"          element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:slug"    element={<PageTransition><BlogPost /></PageTransition>} />
          <Route path="/contacto"      element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="*"              element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="font-poppins bg-white text-navy-900 dark:bg-navy-950 dark:text-white">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
