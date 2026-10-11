
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import { ArrowLeft, Home as HomeIcon } from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Scroll to the top when navigating between pages.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Professional fallback for incorrect URLs.
function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center justify-center bg-[#F5FAF7] px-6 py-24 text-[#172B29]">
      <div className="mx-auto max-w-2xl text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#DDEAE2] bg-white text-[#087F5B] shadow-sm">
          <HomeIcon size={30} strokeWidth={1.7} />
        </div>

        <p className="mt-9 text-sm font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
          404 — Page Not Found
        </p>

        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
          Looks like you've taken
          <span className="block text-[#087F5B]">
            a different path.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#657A73]">
          The page you're looking for may have moved
          or no longer exists. Let's get you back
          to somewhere familiar.
        </p>

        <Link
          to="/"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#066B4D] hover:shadow-lg"
        >
          <ArrowLeft size={18} />
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5FAF7] text-[#172B29]">
      <ScrollToTop />

      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/:slug"
            element={<ServiceDetail />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
