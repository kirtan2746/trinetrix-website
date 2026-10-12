
import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Mail,
  Sparkles,
  MoveUpRight,
  Compass,
  Home,
  Info,
  Layers3,
  MessageCircle,
  CheckCircle2,
  Heart,
  Globe2,
  ChevronRight,
} from "lucide-react";

import { services } from "../data/servicesData";

const CONTACT_EMAIL = "kirtan.gohel@vilartech.com.au";

const quickLinks = [
  {
    name: "About Us",
    path: "/about",
    icon: Info,
  },
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Our Services",
    path: "/services",
    icon: Layers3,
  },
  {
    name: "Find Your Solution",
    path: "/find-your-solution",
    icon: Compass,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: MessageCircle,
  },
];

const raised =
  "shadow-[7px_7px_18px_#d9e6de,-7px_-7px_18px_#ffffff]";

const raisedSmall =
  "shadow-[4px_4px_10px_#d8e5dc,-4px_-4px_10px_#ffffff]";

const inset =
  "shadow-[inset_4px_4px_9px_#d5e3d9,inset_-4px_-4px_9px_#ffffff]";

/* =========================================
   FOOTER QUICK LINK
========================================= */

function FooterNavLink({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `group flex items-center gap-3 rounded-2xl border px-4 py-3.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] ${
          isActive
            ? `border-[#B9DCC6] bg-[#E8F5ED] ${inset}`
            : `border-[#E1ECE4] bg-[#F5FAF7] ${raisedSmall} hover:-translate-y-0.5 hover:border-[#ADD5BD]`
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
              isActive
                ? "bg-[#087F5B] text-white"
                : "bg-[#E8F5ED] text-[#087F5B]"
            }`}
          >
            <Icon size={18} strokeWidth={1.9} />
          </span>

          <span
            className={`min-w-0 flex-1 text-sm font-bold ${
              isActive
                ? "text-[#087F5B]"
                : "text-[#52685D]"
            }`}
          >
            {item.name}
          </span>

          {isActive ? (
            <CheckCircle2
              size={17}
              className="shrink-0 text-[#087F5B]"
            />
          ) : (
            <ChevronRight
              size={17}
              className="shrink-0 text-[#8CAA98] transition-transform group-hover:translate-x-1"
            />
          )}
        </>
      )}
    </NavLink>
  );
}

/* =========================================
   SERVICE LINK
========================================= */

function FooterServiceLink({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className={`group flex items-center justify-between gap-3 rounded-2xl border border-[#E1ECE4] bg-[#F5FAF7] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ADD5BD] ${raisedSmall}`}
    >
      <span className="text-sm font-semibold leading-6 text-[#52685D] transition-colors group-hover:text-[#087F5B]">
        {service.title}
      </span>

      <MoveUpRight
        size={16}
        className="shrink-0 text-[#087F5B] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

/* =========================================
   MAIN FOOTER
========================================= */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[#F5FAF7] text-[#172B29]">

      {/* =====================================
          PREMIUM CTA SECTION
      ===================================== */}

      <section className="border-t border-[#DDEAE2] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">

          <div
            className={`relative overflow-hidden rounded-[36px] border border-[#DDEAE2] bg-[#F5FAF7] p-3 sm:p-4 ${raised}`}
          >
            <div className="relative overflow-hidden rounded-[29px] bg-[#172B29] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">

              {/* BACKGROUND EFFECTS */}

              <div className="pointer-events-none absolute -right-24 -top-36 h-96 w-96 rounded-full bg-[#087F5B]/35 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-[#9ED9B8]/10 blur-3xl" />

              <div className="pointer-events-none absolute right-12 top-12 hidden h-28 w-28 rounded-full border border-white/10 lg:block" />

              <div className="pointer-events-none absolute right-20 top-20 hidden h-12 w-12 rounded-full border border-white/10 lg:block" />

              <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">

                <div className="max-w-2xl">

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#A9E2BF]">
                    <Sparkles size={16} />
                    Let's Create Something Meaningful
                  </div>

                  <h2 className="mt-8 text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[1.08] tracking-[-0.06em]">
                    Have a great idea?
                    <span className="mt-2 block text-[#9ED9B8]">
                      Let's make it real.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-xl text-base leading-8 text-white/70">
                    Whether you're launching a business,
                    improving your digital presence or
                    exploring smarter ways to work,
                    we're here to help you move forward.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85">
                      <CheckCircle2
                        size={15}
                        className="text-[#9ED9B8]"
                      />
                      Creative Thinking
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85">
                      <CheckCircle2
                        size={15}
                        className="text-[#9ED9B8]"
                      />
                      Practical Technology
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85">
                      <CheckCircle2
                        size={15}
                        className="text-[#9ED9B8]"
                      />
                      Connected Solutions
                    </span>
                  </div>
                </div>

                {/* CTA BUTTONS */}

                <div className="flex w-full flex-col gap-4 sm:w-auto">

                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#9ED9B8] px-7 py-4 text-sm font-extrabold text-[#172B29] shadow-[5px_5px_15px_rgba(0,0,0,0.22),-3px_-3px_10px_rgba(255,255,255,0.07)] transition-all duration-300 hover:-translate-y-1 hover:bg-white active:translate-y-0"
                  >
                    Start a Conversation
                    <ArrowUpRight
                      size={19}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    to="/find-your-solution"
                    className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                  >
                    Find Your Solution
                    <Compass
                      size={18}
                      className="text-[#9ED9B8]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          MAIN FOOTER
      ===================================== */}

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-5">

        <div className="grid gap-12 border-b border-[#DDEAE2] pb-16 lg:grid-cols-[1.1fr_0.85fr_1.15fr] lg:gap-10">

          {/* =====================================
              BRAND & CONTACT
          ===================================== */}

          <div>

            {/* BRAND CARD */}

            <Link
              to="/"
              aria-label="Vilartech homepage"
              className={`group inline-flex items-center rounded-[24px] border border-[#E1ECE4] bg-[#F5FAF7] p-4 transition-all duration-300 hover:-translate-y-1 ${raised}`}
            >
              <img
                src="/assets/vilartech-logo.svg"
                alt="Vilartech — Powered by Trinetrix"
                className="h-14 w-auto max-w-[240px] object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-16"
              />
            </Link>

            <p className="mt-8 max-w-sm text-sm leading-8 text-[#657A73]">
              A creative and digital solutions studio
              bringing thoughtful design, fresh
              perspectives and modern technology
              together to make ideas tangible.
            </p>

            {/* CONTACT CARDS */}

            <div className="mt-8 space-y-4">

              <div
                className={`flex items-start gap-4 rounded-[22px] border border-[#E1ECE4] bg-[#F5FAF7] p-4 ${raisedSmall}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                  <MapPin size={21} />
                </span>

                <div>
                  <p className="text-sm font-extrabold">
                    Adelaide, Australia
                  </p>

                  <p className="mt-2 text-xs leading-6 text-[#657A73]">
                    Creating connections beyond borders
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`group flex items-start gap-4 rounded-[22px] border border-[#E1ECE4] bg-[#F5FAF7] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ADD5BD] ${raisedSmall}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                  <Mail size={21} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-extrabold">
                    Let's Connect
                  </span>

                  <span className="mt-2 block break-all text-xs leading-6 text-[#657A73] transition-colors group-hover:text-[#087F5B]">
                    {CONTACT_EMAIL}
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-[#087F5B]"
                />
              </a>
            </div>
          </div>

          {/* =====================================
              QUICK LINKS
          ===================================== */}

          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                <Compass size={22} />
              </span>

              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#8AA096]">
                  Navigation
                </p>

                <h3 className="mt-1 text-lg font-black tracking-tight">
                  Explore Vilartech
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {quickLinks.map((item) => (
                <FooterNavLink
                  key={item.path}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* =====================================
              SERVICES
          ===================================== */}

          <div>
            <div className="flex items-center justify-between gap-4">

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                  <Layers3 size={22} />
                </span>

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#8AA096]">
                    Our Expertise
                  </p>

                  <h3 className="mt-1 text-lg font-black tracking-tight">
                    What We Do
                  </h3>
                </div>
              </div>

              <Link
                to="/services"
                aria-label="Explore all services"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border border-[#E1ECE4] bg-[#F5FAF7] text-[#087F5B] transition-all hover:-translate-y-0.5 ${raisedSmall}`}
              >
                <ArrowUpRight size={19} />
              </Link>
            </div>

            <div className="mt-7 space-y-3">
              {services.map((service) => (
                <FooterServiceLink
                  key={service.slug}
                  service={service}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM FOOTER
        ===================================== */}

        <div className="flex flex-col gap-7 pt-9 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xs font-medium leading-6 text-[#657A73]">
              © {year} Vilartech. All rights reserved.
            </p>

            <p className="mt-1 text-xs text-[#8A9D94]">
              Designed with intention. Built for possibility.
            </p>
          </div>

          <div
            className={`inline-flex w-fit items-center gap-3 rounded-2xl border border-[#E1ECE4] bg-[#F5FAF7] px-5 py-3.5 ${raisedSmall}`}
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#8A9D94]">
              Powered by
            </span>

            <span className="text-sm font-black uppercase tracking-[0.12em] text-[#087F5B]">
              TRINETRIX
            </span>

            <Sparkles
              size={16}
              className="text-[#087F5B]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
