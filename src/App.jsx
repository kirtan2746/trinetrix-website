
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import FindYourSolution from "./pages/FindYourSolution";
import Contact from "./pages/Contact";

// Scroll to top when navigating between pages
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex min-h-screen flex-col bg-[#F5FAF7]">
        {/* Main navigation */}
        <Navbar />

        {/* Website pages */}
        <div className="flex-1">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About Us */}
            <Route path="/about" element={<About />} />

            {/* All Services */}
            <Route path="/services" element={<Services />} />

            {/* Individual Service Pages */}
            <Route
              path="/services/:slug"
              element={<ServiceDetail />}
            />

            {/* Interactive Solution Finder */}
            <Route
              path="/find-your-solution"
              element={<FindYourSolution />}
            />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Unknown URL - redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
