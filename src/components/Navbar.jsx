
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Compass,
  Home,
  Info,
  Layers3,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

/* =========================================
   NAVIGATION ITEMS
========================================= */

const navigation = [
  {
    name: "Home",
    path: "/",
    icon: Home,
    description: "Welcome to Vilartech",
  },
  {
    name: "About Us",
    path: "/about",
    icon: Info,
    description: "Our story and approach",
  },
  {
    name: "Services",
    path: "/services",
    icon: Layers3,
    description: "What we can do for you",
  },
  {
    name: "Find Your Solution",
    path: "/find-your-solution",
    icon: Compass,
    description: "Discover what fits your needs",
    featured: true,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Mail,
    description: "Start a conversation",
  },
];

/* =========================================
   NEOMORPHISM STYLES
========================================= */

const raised =
  "shadow-[5px_5px_12px_#d7e4dc,-5px_-5px_12px_#ffffff]";

const inset =
  "shadow-[inset_4px_4px_9px_#d3e2d8,inset_-4px_-4px_9px_#ffffff]";

/* =========================================
   DESKTOP NAVIGATION
========================================= */

function DesktopNavigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-2 lg:flex"
    >
      {navigation.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) => {
              const base =
                "group relative inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-2xl border px-3.5 py-3 text-[12px] font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B]";

              if (isActive) {
                return `${base} border-[#B6D8C5] bg-[#E4F3E9] text-[#087F5B] ${inset}`;
              }

              if (item.featured) {
                return `${base} border-[#D8E8DE] bg-[#F5FAF7] text-[#087F5B] ${raised} hover:-translate-y-1 hover:border-[#A5D1B5]`;
              }

              return `${base} border-[#E2ECE5] bg-[#F5FAF7] text-[#40584C] ${raised} hover:-translate-y-1 hover:border-[#B8D9C5] hover:text-[#087F5B]`;
            }}
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={16}
                  strokeWidth={isActive ? 2.4 : 1.9}
                  className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                />

                <span>{item.name}</span>

                {item.featured && !isActive && (
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#087F5B] ring-[3px] ring-[#F5FAF7]" />
                )}

                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-7 -translate-x-1/2 rounded-full bg-[#087F5B]" />
                )}
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}

/* =========================================
   MOBILE NAVIGATION
========================================= */

function MobileNavigation({ isOpen, closeMenu }) {
  return (
    <div
      id="vilartech-mobile-menu"
      className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-in-out lg:hidden ${
        isOpen
          ? "mt-4 max-h-[800px] opacity-100"
          : "pointer-events-none mt-0 max-h-0 opacity-0"
      }`}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div
        className={`rounded-[28px] border border-[#E0ECE3] bg-[#F5FAF7] p-4 ${raised}`}
      >
        <div className="mb-4 flex items-center justify-between px-2 pt-1">
          <div className="flex items-center gap-2">
            <Sparkles
              size={16}
              className="text-[#087F5B]"
            />

            <span className="text-[11px] font-black uppercase tracking-[0.17em] text-[#087F5B]">
              Explore Vilartech
            </span>
          </div>

          <span className="rounded-full bg-[#E5F2E9] px-3 py-1 text-[10px] font-bold text-[#087F5B]">
            MENU
          </span>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="space-y-3"
        >
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-[22px] border px-4 py-4 transition-all duration-300 active:scale-[0.98] ${
                    isActive
                      ? `border-[#B8DCC5] bg-[#E6F3EA] ${inset}`
                      : `border-[#E1ECE4] bg-[#F5FAF7] ${raised} hover:border-[#A9D3B9]`
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                        isActive
                          ? "bg-[#087F5B] text-white"
                          : "bg-[#E8F5ED] text-[#087F5B]"
                      }`}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.9}
                      />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[15px] font-extrabold ${
                          isActive
                            ? "text-[#087F5B]"
                            : "text-[#172B29]"
                        }`}
                      >
                        {item.name}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-[#789084]">
                        {item.description}
                      </span>
                    </span>

                    {isActive ? (
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087F5B] text-white">
                        <Check size={16} />
                      </span>
                    ) : (
                      <ChevronRight
                        size={19}
                        className="text-[#91AB9B] transition-transform group-hover:translate-x-1"
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* MOBILE CTA */}

        <div className="mt-5 rounded-[22px] bg-[#172B29] p-5 text-white">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#A9E2BF]">
              <Sparkles size={21} />
            </span>

            <div>
              <h3 className="text-sm font-black">
                Have a business idea?
              </h3>

              <p className="mt-2 text-xs leading-6 text-white/65">
                Explore how Vilartech can help
                bring your idea to life.
              </p>
            </div>
          </div>

          <Link
            to="/find-your-solution"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-[#A9E2BF] px-5 py-3.5 text-xs font-extrabold text-[#172B29] transition-colors hover:bg-white"
          >
            Find My Solution
            <ArrowRight size={17} />
          </Link>
        </div>

        <p className="mt-5 text-center text-[10px] font-semibold tracking-wide text-[#91A79A]">
          Vilartech — Powered by Trinetrix
        </p>
      </div>
    </div>
  );
}

/* =========================================
   MAIN NAVBAR
========================================= */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  /* CLOSE MENU ON ROUTE CHANGE */

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* CLOSE MENU WITH ESC KEY */

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DDEAE2]/80 bg-[#F5FAF7]/95 backdrop-blur-xl">

      <div className="mx-auto max-w-[1500px] px-4 py-3 sm:px-6 lg:px-7">

        <div className="flex items-center justify-between gap-4">

          {/* =====================================
              BRAND
          ===================================== */}

          <Link
            to="/"
            onClick={closeMenu}
            className="group flex min-w-0 shrink-0 items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B]"
            aria-label="Vilartech home"
          >
            <span
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E1ECE4] bg-[#F5FAF7] text-[#087F5B] transition-all duration-300 group-hover:-translate-y-1 ${raised}`}
            >
              <Sparkles
                size={24}
                strokeWidth={1.8}
              />
            </span>

            <span className="flex flex-col">
              <span className="text-[19px] font-black leading-none tracking-[-0.06em] text-[#172B29] sm:text-[22px]">
                VILAR
                <span className="text-[#087F5B]">
                  TECH
                </span>
              </span>

              <span className="mt-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#7E9989] sm:text-[10px]">
                Powered by Trinetrix
              </span>
            </span>
          </Link>

          {/* =====================================
              DESKTOP NAVIGATION
          ===================================== */}

          <DesktopNavigation />

          {/* =====================================
              DESKTOP CTA
          ===================================== */}

          <Link
            to="/contact"
            className="group hidden shrink-0 items-center gap-2 rounded-2xl bg-[#087F5B] px-5 py-3.5 text-xs font-extrabold text-white shadow-[4px_4px_12px_#cbded1] transition-all duration-300 hover:-translate-y-1 hover:bg-[#066B4C] xl:inline-flex"
          >
            Let's Talk

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* =====================================
              MOBILE MENU BUTTON
          ===================================== */}

          <button
            type="button"
            onClick={() =>
              setIsOpen((previous) => !previous)
            }
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="vilartech-mobile-menu"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#DFEAE2] bg-[#F5FAF7] text-[#087F5B] transition-all duration-300 active:scale-95 lg:hidden ${
              isOpen ? inset : raised
            }`}
          >
            {isOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>

        {/* =====================================
            MOBILE NAVIGATION
        ===================================== */}

        <MobileNavigation
          isOpen={isOpen}
          closeMenu={closeMenu}
        />
      </div>
    </header>
  );
}
