
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

const links = [
  { label: "About Us", to: "/about" },
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Find Your Solution", to: "/find-your-solution" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const navClass = ({ isActive }) =>
    `relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
      isActive
        ? "bg-[#E8F5ED] text-[#087F5B]"
        : "text-[#50675F] hover:bg-[#E8F5ED] hover:text-[#087F5B]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#E0EAE3] bg-[#F5FAF7]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-6">
        <Link
          to="/"
          aria-label="Vilartech home"
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#087F5B] text-white shadow-[4px_4px_12px_#D6E6DC,-4px_-4px_12px_#FFFFFF]">
            <Sparkles size={23} />
          </span>

          <span className="flex flex-col">
            <span className="text-xl font-black tracking-[-0.05em] text-[#172B29]">
              VILAR<span className="text-[#087F5B]">TECH</span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#7A9588]">
              Powered by Trinetrix
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#066A4C]"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DDEAE2] bg-white text-[#172B29] lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#DDEAE2] bg-[#F5FAF7] px-5 pb-6 pt-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navClass}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#087F5B] px-6 py-4 text-sm font-bold text-white"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
