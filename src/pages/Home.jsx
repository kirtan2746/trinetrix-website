
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Check,
  Layers3,
  MousePointer2,
  MoveUpRight,
  PenTool,
  Code2,
  Zap,
  Compass,
  Lightbulb,
  Rocket,
} from "lucide-react";

import { services } from "../data/servicesData";

const strengths = [
  {
    icon: Lightbulb,
    title: "We see the bigger picture.",
    description:
      "A memorable brand, a thoughtful website and an effective digital system should work together. We connect those pieces with clarity and purpose.",
    featured: true,
  },
  {
    icon: Compass,
    title: "Thoughtful from the start.",
    description:
      "Every decision begins with understanding the people, purpose and goals behind the project.",
  },
  {
    icon: Layers3,
    title: "Creativity meets capability.",
    description:
      "We bring visual thinking and practical technology together to create solutions that work beautifully.",
  },
  {
    icon: Zap,
    title: "Ready for what's next.",
    description:
      "We create flexible digital foundations that can evolve alongside your customers, ideas and ambitions.",
    featured: true,
  },
];

const processSteps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We listen, ask the right questions and understand what success should look like for your business.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Create",
    description:
      "We shape thoughtful designs, functional solutions and connected digital experiences around your goals.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Evolve",
    description:
      "We refine the experience, support your launch and explore opportunities for continued improvement.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F5FAF7] text-[#172B29]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -right-36 -top-48 h-[500px] w-[500px] rounded-full bg-[#9ED9B8]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#DDEFE2]/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:pb-28 lg:pt-28">

          {/* HERO COPY */}
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#DDEAE2] bg-white px-4 py-2 text-xs font-bold tracking-[0.08em] text-[#087F5B] shadow-sm">
              <Sparkles size={15} />
              A CREATIVE & DIGITAL STUDIO
            </div>

            <h1 className="max-w-3xl text-[clamp(3.2rem,6vw,5.8rem)] font-extrabold leading-[1.05] tracking-[-0.065em]">
              Good ideas
              <span className="block">deserve great</span>
              <span className="block text-[#087F5B]">
                execution.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#657A73]">
              We bring design, creativity and technology
              together to shape brands, build digital
              experiences and make ambitious ideas work
              in the real world.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#066B4D] hover:shadow-lg"
              >
                Explore What We Do
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#D0E3D7] bg-white px-7 py-4 text-sm font-bold text-[#172B29] transition-colors hover:border-[#087F5B] hover:text-[#087F5B]"
              >
                Let's Talk
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#DDEAE2] pt-7">
              {[
                "Thoughtful design",
                "Smart technology",
                "Practical outcomes",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-[#657A73]"
                >
                  <Check
                    size={17}
                    className="text-[#087F5B]"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="relative rounded-[36px] border border-[#DDEAE2] bg-white p-5 shadow-[0_30px_80px_rgba(23,43,41,0.08)] sm:p-7">

              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9ED9B8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#DDEAE2]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#DDEAE2]" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#657A73] sm:text-[11px]">
                  The Vilartech Studio
                </span>
              </div>

              <div className="rounded-[26px] bg-[#172B29] p-7 text-white sm:p-9">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Layers3
                      size={22}
                      className="text-[#9ED9B8]"
                    />
                  </div>

                  <MoveUpRight
                    size={21}
                    className="text-[#9ED9B8]"
                  />
                </div>

                <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-[#9ED9B8]">
                  Imagine. Design. Build.
                </p>

                <h2 className="mt-4 max-w-xs text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] sm:text-5xl">
                  Ideas made
                  <span className="block text-[#9ED9B8]">
                    tangible.
                  </span>
                </h2>

                <div className="mt-10 flex flex-wrap gap-2">
                  {[
                    "Identity",
                    "Experience",
                    "Innovation",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-semibold text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-[22px] bg-[#E8F5ED] p-4 sm:p-5">
                  <PenTool
                    size={23}
                    className="text-[#087F5B]"
                  />

                  <p className="mt-8 text-sm font-bold">
                    Creative by nature.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#657A73]">
                    Design with purpose.
                  </p>
                </div>

                <div className="rounded-[22px] border border-[#DDEAE2] bg-[#F5FAF7] p-4 sm:p-5">
                  <Code2
                    size={23}
                    className="text-[#087F5B]"
                  />

                  <p className="mt-8 text-sm font-bold">
                    Digital by design.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#657A73]">
                    Built to work beautifully.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-[#DDEAE2] bg-white px-5 py-4 shadow-xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F5ED]">
                <MousePointer2
                  size={20}
                  className="text-[#087F5B]"
                />
              </div>

              <div>
                <p className="text-xs font-bold">
                  Designed for people
                </p>
                <p className="text-[11px] text-[#657A73]">
                  Built for possibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="border-y border-[#DDEAE2] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-9">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#087F5B]">
            The Vilartech Perspective
          </p>

          <p className="max-w-2xl text-lg font-semibold leading-8 tracking-tight sm:text-xl">
            We believe the best digital experiences happen
            when creativity and technology move in the
            same direction.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
                Our Expertise
              </p>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
                Different disciplines.
                <span className="block text-[#087F5B]">
                  One creative vision.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#657A73]">
                From shaping your identity to building the
                digital tools behind your business, we bring
                together the right ideas and expertise for
                every stage of growth.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#087F5B] transition-colors hover:text-[#066B4D]"
            >
              View All Services
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const featured = index === 0;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`group flex min-h-[290px] flex-col justify-between rounded-[28px] border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,43,41,0.08)] sm:p-8 ${
                    featured
                      ? "border-[#087F5B] bg-[#087F5B] text-white"
                      : "border-[#DDEAE2] bg-[#FAFCFB] text-[#172B29] hover:border-[#9ED9B8]"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                          featured
                            ? "bg-white/15 text-white"
                            : "bg-[#E8F5ED] text-[#087F5B]"
                        }`}
                      >
                        <Icon
                          size={25}
                          strokeWidth={1.8}
                        />
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="opacity-60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                    <h3 className="mt-9 text-xl font-extrabold tracking-tight sm:text-[22px]">
                      {service.title}
                    </h3>

                    <p
                      className={`mt-4 text-sm leading-7 ${
                        featured
                          ? "text-white/80"
                          : "text-[#657A73]"
                      }`}
                    >
                      {service.short}
                    </p>
                  </div>

                  <div
                    className={`mt-7 flex items-center gap-2 border-t pt-5 text-sm font-bold ${
                      featured
                        ? "border-white/20 text-white"
                        : "border-[#DDEAE2] text-[#087F5B]"
                    }`}
                  >
                    Explore Service
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY VILARTECH */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              The Way We Think
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
              Less complexity.
              <span className="block text-[#087F5B]">
                More possibility.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#657A73]">
              Great solutions aren't defined by how
              complicated they are. They're defined by
              how naturally they fit the people and
              businesses they serve.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              const dark = index === 0;
              const wide = item.featured;

              return (
                <article
                  key={item.title}
                  className={`flex flex-col justify-between rounded-[30px] p-8 sm:p-9 ${
                    wide ? "lg:col-span-2" : ""
                  } ${
                    dark
                      ? "bg-[#172B29] text-white"
                      : index === 3
                      ? "bg-[#E8F5ED]"
                      : "border border-[#DDEAE2] bg-white"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      dark
                        ? "bg-white/10 text-[#9ED9B8]"
                        : "bg-white text-[#087F5B]"
                    }`}
                  >
                    <Icon size={27} />
                  </div>

                  <div className="mt-14">
                    <h3
                      className={`font-extrabold leading-tight tracking-tight ${
                        wide
                          ? "max-w-xl text-3xl sm:text-4xl"
                          : "text-2xl"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-5 max-w-xl leading-8 ${
                        dark
                          ? "text-white/70"
                          : "text-[#657A73]"
                      } ${wide ? "text-base" : "text-sm"}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="border-y border-[#DDEAE2] bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              How We Work
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
              A simple path from
              <span className="text-[#087F5B]">
                {" "}idea to impact.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#657A73]">
              A collaborative process that brings clarity
              to every stage of your project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => {
              const StepIcon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-[28px] border border-[#DDEAE2] bg-[#FAFCFB] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DFC9]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#087F5B]">
                      <StepIcon size={23} />
                    </div>

                    <span className="text-4xl font-extrabold text-[#D4E8DB]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-extrabold">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#657A73]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIGHTWEIGHT CONTACT STRIP */}
      <section className="bg-[#F5FAF7] py-12 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087F5B]">
              Let's Connect
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Ready to explore your next idea?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#657A73]">
              Share what you're working towards.
              We'd love to hear about it.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#087F5B] px-7 py-3.5 text-sm font-bold text-[#087F5B] transition-colors hover:bg-[#087F5B] hover:text-white"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
