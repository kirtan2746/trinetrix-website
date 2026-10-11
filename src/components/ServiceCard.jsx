
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      aria-label={`Explore ${service.title}`}
      className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[28px] border border-[#DDEAE2] bg-white p-7 shadow-[0_4px_20px_rgba(23,43,41,0.025)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#9ED9B8] hover:shadow-[0_18px_45px_rgba(23,43,41,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F5B] focus-visible:ring-offset-4 sm:p-8"
    >
      {/* SUBTLE ACCENT */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#E8F5ED]/0 blur-2xl transition-colors duration-300 group-hover:bg-[#E8F5ED]/80" />

      {/* ICON AND ARROW */}
      <div className="relative mb-9 flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B] transition-colors duration-300 group-hover:bg-[#087F5B] group-hover:text-white">
          <Icon size={26} strokeWidth={1.8} />
        </div>

        <ArrowUpRight
          size={21}
          strokeWidth={1.8}
          className="text-[#9BAEA5] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#087F5B]"
        />
      </div>

      {/* SERVICE CONTENT */}
      <div className="relative flex-1">
        <h3 className="text-xl font-extrabold leading-snug tracking-[-0.025em] text-[#172B29] sm:text-[22px]">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#657A73]">
          {service.short}
        </p>
      </div>

      {/* BOTTOM LINK */}
      <div className="relative mt-9 flex items-center gap-2 border-t border-[#E8F0EA] pt-5 text-sm font-bold text-[#087F5B]">
        <span>Explore Service</span>

        <ArrowRight
          size={17}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-1.5"
        />
      </div>
    </Link>
  );
}
