
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Mail,
  Sparkles,
  MoveUpRight,
} from "lucide-react";

import { services } from "../data/servicesData";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Our Services", path: "/services" },
  { name: "About Vilartech", path: "/about" },
  { name: "Get in Touch", path: "/contact" },
];

const CONTACT_EMAIL = "kirtan.gohel@vilartech.com.au";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-white text-[#172B29]">

      {/* LARGE FOOTER CTA */}
      <div className="border-t border-[#DDEAE2] bg-[#F5FAF7]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-[32px] bg-[#172B29] px-8 py-12 text-white sm:px-12 sm:py-16 lg:px-16">

            {/* BACKGROUND ACCENTS */}
            <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#087F5B]/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-36 right-1/4 h-64 w-64 rounded-full bg-[#9ED9B8]/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">

              <div className="max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#9ED9B8]">
                  <Sparkles size={15} />
                  The next idea starts here
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.1] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                  Have something
                  <span className="block text-[#9ED9B8]">
                    extraordinary
                  </span>
                  in mind?
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                  Big ambition or small beginnings, every idea
                  deserves the right conversation. Let's explore
                  what we could create together.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#9ED9B8] px-8 py-4 text-sm font-extrabold text-[#172B29] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                Start a Conversation
                <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-8">

        <div className="grid gap-12 border-b border-[#DDEAE2] pb-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.65fr_1.2fr] lg:gap-16">

          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center"
              aria-label="Vilartech homepage"
            >
              <img
                src="/assets/vilartech-logo.svg"
                alt="Vilartech — Powered by Trinetrix"
                className="h-16 w-auto max-w-[260px] object-contain"
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-8 text-[#657A73]">
              A creative and digital solutions studio
              bringing thoughtful design, fresh perspectives
              and modern technology together to make
              ideas tangible.
            </p>

            <div className="mt-9 space-y-5">

              {/* LOCATION */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#087F5B]">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Adelaide, Australia
                  </p>
                  <p className="mt-1 text-xs text-[#657A73]">
                    Creating connections beyond borders
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#087F5B]">
                  <Mail size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold">
                    Let's connect
                  </p>

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 inline-block break-all text-sm text-[#657A73] transition-colors hover:text-[#087F5B]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#172B29]">
              Explore
            </h3>

            <ul className="mt-8 space-y-5">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-[#657A73] transition-colors hover:text-[#087F5B]"
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#172B29]">
                What We Do
              </h3>

              <Link
                to="/services"
                aria-label="Explore all services"
                className="text-[#087F5B] transition-transform hover:translate-x-1"
              >
                <ArrowUpRight size={19} />
              </Link>
            </div>

            <ul className="mt-8 space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group inline-flex items-start gap-2 text-sm font-medium leading-6 text-[#657A73] transition-colors hover:text-[#087F5B]"
                  >
                    <span>{service.title}</span>

                    <MoveUpRight
                      size={14}
                      className="mt-1 shrink-0 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col gap-8 pt-9 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xs leading-6 text-[#657A73]">
              © {year} Vilartech. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-[#8A9D94]">
              Designed with intention. Built for possibility.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#8A9D94]">
              Powered by
            </span>

            <span className="text-sm font-black uppercase tracking-[0.13em] text-[#087F5B]">
              TRINETRIX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
