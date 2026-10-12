
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  const technologies = service.technologies || [];
  const visibleTechnologies = technologies.slice(0, 3);
  const remainingCount = Math.max(
    technologies.length - visibleTechnologies.length,
    0
  );

  return (
    <Link
      to={`/services/${service.slug}`}
      aria-label={`Explore ${service.title}`}
      className="
        group relative flex h-full min-h-[410px] flex-col
        overflow-hidden rounded-[32px]
        border border-[#E0EDE5]
        bg-[#F5FAF7] p-7 sm:p-8

        shadow-[9px_9px_24px_#dce9e2,-9px_-9px_24px_#ffffff]

        transition-all duration-300 ease-out

        hover:-translate-y-2
        hover:border-[#B6DBC7]
        hover:shadow-[14px_14px_32px_#d6e5db,-14px_-14px_32px_#ffffff]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#087F5B]
        focus-visible:ring-offset-4
      "
    >
      {/* SOFT BACKGROUND ACCENTS */}
      <div
        className="
          pointer-events-none absolute -right-20 -top-20
          h-52 w-52 rounded-full
          bg-[#DDF2E6]/60 blur-3xl
          transition-all duration-500
          group-hover:scale-125
          group-hover:bg-[#C8EAD8]/80
        "
      />

      <div
        className="
          pointer-events-none absolute -bottom-24 -left-24
          h-48 w-48 rounded-full
          bg-white/80 blur-3xl
        "
      />

      {/* TOP: CATEGORY AND NUMBER */}
      <div className="relative flex items-center justify-between gap-3">
        <span
          className="
            inline-flex max-w-[80%] items-center gap-2
            rounded-full border border-[#DCEBE2]
            bg-[#F8FCF9] px-3.5 py-2
            text-[10px] font-extrabold uppercase
            tracking-[0.1em] text-[#087F5B]
          "
        >
          <Sparkles size={12} className="shrink-0" />
          <span className="truncate">
            {service.category || "Digital Solutions"}
          </span>
        </span>

        <span className="text-xs font-extrabold tracking-wider text-[#9AB5A6]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* ICON AND ARROW */}
      <div className="relative mt-8 flex items-start justify-between">
        <div
          className="
            flex h-[68px] w-[68px] items-center justify-center
            rounded-[22px] bg-[#E5F4EB]
            text-[#087F5B]

            shadow-[inset_3px_3px_8px_#cde4d5,inset_-3px_-3px_8px_#ffffff]

            transition-all duration-300

            group-hover:bg-[#087F5B]
            group-hover:text-white
            group-hover:shadow-[6px_6px_15px_#c9dfd1,-6px_-6px_15px_#ffffff]
          "
        >
          <Icon
            size={30}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full border border-[#DCEBE2]
            bg-[#F8FCF9] text-[#8FA99B]

            transition-all duration-300

            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:border-[#B6DBC7]
            group-hover:text-[#087F5B]
          "
        >
          <ArrowUpRight size={21} strokeWidth={1.8} />
        </div>
      </div>

      {/* SERVICE HEADING AND DESCRIPTION */}
      <div className="relative mt-8 flex-1">
        <h3
          className="
            max-w-[340px]
            text-[21px] font-black leading-[1.3]
            tracking-[-0.035em] text-[#172B29]
            sm:text-[23px]

            transition-colors duration-300
            group-hover:text-[#087F5B]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-4 text-sm leading-[1.9]
            text-[#627B71]
          "
        >
          {service.short}
        </p>
      </div>

      {/* TECHNOLOGIES AND SERVICE TOOLS */}
      {visibleTechnologies.length > 0 && (
        <div className="relative mt-7">
          <p
            className="
              mb-3 text-[10px] font-extrabold
              uppercase tracking-[0.16em]
              text-[#819B8D]
            "
          >
            Tools & Technologies
          </p>

          <div className="flex flex-wrap gap-2">
            {visibleTechnologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full border border-[#DCEBE2]
                  bg-white/80 px-3 py-1.5
                  text-[11px] font-semibold
                  text-[#527568]

                  shadow-[2px_2px_5px_#e2ebe5,-2px_-2px_5px_#ffffff]
                "
              >
                {technology}
              </span>
            ))}

            {remainingCount > 0 && (
              <span
                className="
                  rounded-full border border-[#CFE8D8]
                  bg-[#E5F4EB] px-3 py-1.5
                  text-[11px] font-bold
                  text-[#087F5B]
                "
              >
                +{remainingCount} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* BOTTOM LINK */}
      <div
        className="
          relative mt-8 flex items-center
          justify-between gap-3
          border-t border-[#DCE9E1] pt-6
        "
      >
        <span className="text-sm font-extrabold text-[#087F5B]">
          Explore Service
        </span>

        <ArrowRight
          size={20}
          strokeWidth={2}
          className="
            text-[#087F5B]
            transition-transform duration-300
            group-hover:translate-x-2
          "
        />
      </div>
    </Link>
  );
}
