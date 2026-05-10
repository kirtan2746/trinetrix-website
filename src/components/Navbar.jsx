import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#050B14]/85 border-b border-cyan-400/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LEFT SIDE LOGO + TEXT */}
        <Link
          to="/"
          className="flex items-center gap-4 group"
        >

          {/* LOGO */}
          <img
            src={logo}
            alt="TRINETRIX Logo"
            className="
              h-16
              w-auto
              object-contain
              transition
              duration-500
              group-hover:scale-105
              drop-shadow-[0_0_35px_rgba(0,229,255,0.45)]
            "
          />

          {/* BRAND TEXT */}
          <div>

            <h1
              className="
                text-3xl
                font-black
                tracking-[0.25em]
                text-white
                leading-none
              "
            >
              TRINETRIX
            </h1>

            <p
              className="
                text-xs
                text-cyan-300
                tracking-[0.28em]
                mt-2
              "
            >
              IT SERVICES & CONSULTING
            </p>

          </div>
        </Link>

        {/* RIGHT SIDE NAVIGATION */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
            text-slate-300
          "
        >

          <Link
            to="/"
            className="
              hover:text-cyan-300
              transition
              duration-300
            "
          >
            Home
          </Link>

          <Link
            to="/services"
            className="
              hover:text-cyan-300
              transition
              duration-300
            "
          >
            Services
          </Link>

          <Link
            to="/about"
            className="
              hover:text-cyan-300
              transition
              duration-300
            "
          >
            About
          </Link>

          <Link
            to="/contact"
            className="
              hover:text-cyan-300
              transition
              duration-300
            "
          >
            Contact
          </Link>

          {/* CTA BUTTON */}
          <Link
            to="/contact"
            className="
              px-6
              py-3
              rounded-full
              bg-cyan-400
              text-black
              font-bold
              hover:bg-white
              transition
              duration-300
              shadow-[0_0_25px_rgba(0,229,255,0.35)]
            "
          >
            Get Consultation
          </Link>

        </div>
      </div>
    </nav>
  );
}