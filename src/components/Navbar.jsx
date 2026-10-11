
import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  // Close mobile navigation when the route changes.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling behind an open mobile menu.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DDEAE2] bg-white/95 shadow-[0_4px_24px_rgba(23,43,41,0.025)] backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[82px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        {/* BRAND */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex min-w-0 shrink-0 items-center"
          aria-label="Vilartech homepage"
        >
          <img
            src="/assets/vilartech-logo.svg"
            alt="Vilartech — Powered by Trinetrix"
            className="h-12 w-auto max-w-[195px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-14 sm:max-w-[230px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 rounded-full border border-[#E5EEE8] bg-[#F5FAF7]/80 p-1.5 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                [
                  "relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B]",
                  isActive
                    ? "bg-white text-[#087F5B] shadow-[0_2px_8px_rgba(23,43,41,0.08)]"
                    : "text-[#657A73] hover:bg-white/70 hover:text-[#087F5B]",
                ].join(" ")
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <Link
          to="/contact"
          className="group hidden shrink-0 items-center gap-2 rounded-full bg-[#087F5B] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#066B4D] hover:shadow-[0_8px_22px_rgba(8,127,91,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] focus-visible:ring-offset-2 lg:inline-flex"
        >
          Start a Project
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DDEAE2] bg-white text-[#172B29] transition-all duration-200 hover:border-[#9ED9B8] hover:bg-[#F5FAF7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] md:hidden"
        >
          {mobileMenuOpen ? (
            <X size={22} strokeWidth={2} />
          ) : (
            <Menu size={22} strokeWidth={2} />
          )}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full max-h-[calc(100dvh-82px)] overflow-y-auto border-b border-[#DDEAE2] bg-white px-5 pb-7 pt-4 shadow-[0_18px_35px_rgba(23,43,41,0.10)] md:hidden"
        >
          <div className="mx-auto max-w-7xl">

            {/* MOBILE INTRO */}
            <div className="mb-5 flex items-center gap-2 px-3">
              <Sparkles
                size={15}
                className="text-[#087F5B]"
              />
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#657A73]">
                Explore Vilartech
              </p>
            </div>

            {/* MOBILE LINKS */}
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      "group flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B]",
                      isActive
                        ? "bg-[#E8F5ED] text-[#087F5B]"
                        : "text-[#172B29] hover:bg-[#F5FAF7] hover:text-[#087F5B]",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>

                      <ArrowUpRight
                        size={17}
                        className={
                          isActive
                            ? "text-[#087F5B]"
                            : "text-[#9BAEA5] transition-colors group-hover:text-[#087F5B]"
                        }
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* MOBILE CTA */}
            <div className="mt-6 border-t border-[#DDEAE2] pt-6">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-3 rounded-full bg-[#087F5B] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#066B4D]"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </Link>

              <p className="mt-5 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A9D94]">
                Vilartech · Powered by Trinetrix
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
