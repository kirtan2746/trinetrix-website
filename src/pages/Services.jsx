
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers3,
  Lightbulb,
  PenTool,
  Rocket,
  CheckCircle2,
  MonitorSmartphone,
  Palette,
  Workflow,
  Globe2,
  Network,
  ChartNoAxesCombined,
  Compass,
  HeartHandshake,
} from "lucide-react";

import { services } from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";

const raised =
  "shadow-[9px_9px_24px_#dce9e2,-9px_-9px_24px_#ffffff]";

const processSteps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We learn about your business, your goals and the challenges you want to solve. Then we help identify the services that make sense for you.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Deliver",
    description:
      "We plan, design and implement a practical solution, keeping you involved throughout the process.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We help you launch your solution, understand how to use it and plan improvements as your business evolves.",
  },
];

const solutionAreas = [
  {
    icon: MonitorSmartphone,
    title: "Build your presence",
    description:
      "Websites, business domains, professional email and online visibility.",
  },
  {
    icon: Palette,
    title: "Shape your identity",
    description:
      "Logos, creative design, marketing materials and brand consistency.",
  },
  {
    icon: Network,
    title: "Set up your workplace",
    description:
      "Computers, networks, printers, Microsoft 365 and everyday IT support.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Understand your data",
    description:
      "Power BI dashboards, KPI reporting and meaningful business insights.",
  },
  {
    icon: Workflow,
    title: "Simplify your work",
    description:
      "Automated workflows, SharePoint intranets and connected applications.",
  },
];

export default function Services() {
  return (
    <main className="overflow-hidden bg-[#F5FAF7] text-[#172B29]">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-[#E1EEE6] px-6 py-20 sm:py-24 lg:py-28">

        {/* Background accents */}
        <div className="pointer-events-none absolute -right-32 -top-44 h-[560px] w-[560px] rounded-full bg-[#D9F1E4]/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-56 -left-32 h-[480px] w-[480px] rounded-full bg-white blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">

          {/* HERO CONTENT */}
          <div>
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-[#DCEBE2] bg-[#F6FBF8] px-5 py-3 text-xs font-extrabold tracking-[0.13em] text-[#087F5B] ${raised}`}
            >
              <Sparkles size={16} />
              WHAT WE DO
            </span>

            <h1 className="mt-10 max-w-3xl text-[clamp(3.3rem,6vw,6rem)] font-black leading-[1.08] tracking-[-0.07em]">
              Creative ideas.
              <span className="block">
                Practical technology.
              </span>
              <span className="block text-[#087F5B]">
                Real solutions.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#627B71]">
              From your first business website to a connected
              digital workplace, we bring design, technology
              and practical support together to help your
              business get started, work smarter and grow
              with confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#explore-services"
                className="inline-flex items-center gap-3 rounded-full bg-[#087F5B] px-8 py-5 text-sm font-bold text-white shadow-lg shadow-[#087F5B]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#066A4C]"
              >
                Explore Our Services
                <ArrowRight size={19} />
              </a>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-3 rounded-full border border-[#D4E6DB] bg-[#F8FCF9] px-8 py-5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${raised}`}
              >
                Discuss Your Project
                <ArrowUpRight size={19} />
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3 text-sm font-medium text-[#668276]">
              <CheckCircle2
                size={19}
                className="shrink-0 text-[#087F5B]"
              />
              One creative and technology partner for
              your business.
            </div>
          </div>

          {/* HERO VISUAL */}
          <div
            className={`relative rounded-[38px] border border-white bg-[#F5FAF7] p-5 sm:p-8 ${raised}`}
          >
            <div className="mb-6 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#9ED9B8]" />
                <span className="h-3 w-3 rounded-full bg-[#D2E9DA]" />
                <span className="h-3 w-3 rounded-full bg-[#E0EEE5]" />
              </div>

              <span className="text-[10px] font-extrabold tracking-[0.17em] text-[#6A8277] sm:text-xs">
                VILARTECH SOLUTIONS
              </span>
            </div>

            {/* MAIN DARK CARD */}
            <div className="relative overflow-hidden rounded-[30px] bg-[#172B29] p-7 text-white shadow-[inset_5px_5px_15px_#0B1A18,inset_-4px_-4px_14px_#24403A] sm:p-9">

              <div className="pointer-events-none absolute -right-20 -top-24 h-60 w-60 rounded-full bg-[#087F5B]/30 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-[#9ED9B8]">
                  <Layers3 size={27} />
                </div>

                <Sparkles
                  size={24}
                  className="text-[#9ED9B8]"
                />
              </div>

              <p className="relative mt-12 text-xs font-extrabold tracking-[0.2em] text-[#9ED9B8]">
                EVERYTHING WORKING TOGETHER
              </p>

              <h2 className="relative mt-5 text-4xl font-black leading-[1.1] tracking-[-0.055em] sm:text-5xl">
                One business.
                <span className="block text-[#9ED9B8]">
                  Many possibilities.
                </span>
              </h2>

              <p className="relative mt-5 max-w-sm text-sm leading-7 text-white/65">
                Design, digital presence, IT systems,
                insights and automation — connected
                around what your business needs.
              </p>

              {/* Connected capability icons */}
              <div className="relative mt-9 grid grid-cols-5 gap-2">
                {[
                  MonitorSmartphone,
                  Globe2,
                  Network,
                  ChartNoAxesCombined,
                  Workflow,
                ].map((Icon, index) => (
                  <div
                    key={index}
                    className="flex aspect-square items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[#9ED9B8] transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* LOWER MINI CARDS */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-[24px] bg-[#E8F5ED] p-5 shadow-[inset_3px_3px_8px_#D3E8DB,inset_-3px_-3px_8px_#FFFFFF] sm:p-6">
                <Palette
                  size={24}
                  className="text-[#087F5B]"
                />

                <h3 className="mt-6 text-sm font-extrabold sm:text-base">
                  Designed with purpose.
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#668276]">
                  Thoughtful, creative and clear.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#F5FAF7] p-5 shadow-[inset_3px_3px_8px_#DBE8E0,inset_-3px_-3px_8px_#FFFFFF] sm:p-6">
                <Workflow
                  size={24}
                  className="text-[#087F5B]"
                />

                <h3 className="mt-6 text-sm font-extrabold sm:text-base">
                  Built for real work.
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#668276]">
                  Practical tools for everyday needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-b border-[#E1EEE6] bg-white px-6 py-14">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="shrink-0 text-xs font-extrabold uppercase tracking-[0.18em] text-[#087F5B]">
            What We Believe
          </p>

          <p className="max-w-3xl text-lg font-semibold leading-9 tracking-tight">
            You shouldn't need multiple providers to
            build your brand, establish your online presence
            and set up the technology behind your business.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        id="explore-services"
        className="scroll-mt-24 bg-[#F5FAF7] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-4xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Explore Our Services
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
              The right support,
              <span className="block text-[#087F5B]">
                wherever you are in your journey.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#627B71]">
              Whether you're starting a business,
              refreshing your brand or improving
              your existing systems, explore six
              practical services designed around
              your needs.
            </p>
          </div>

          {/* 3 x 2 GRID */}
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[28px] border border-[#DCEBE2] bg-[#E8F5ED] p-7 sm:flex-row sm:items-center sm:p-9">
            <div>
              <h3 className="text-xl font-black tracking-tight">
                Not sure which service you need?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-[#627B71]">
                Tell us what you're trying to achieve.
                We'll help you understand the available
                options and identify a practical
                starting point.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#087F5B] px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#066A4C]"
            >
              Ask Us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW OUR SERVICES CONNECT */}
      <section className="bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Connected Solutions
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
              Different services.
              <span className="block text-[#087F5B]">
                One connected vision.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#627B71]">
              Every business is different. You might
              need just one service, or a combination
              of creative and technical support.
              We help bring the right pieces together.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT FEATURE CARD */}
            <div className="relative flex flex-col overflow-hidden rounded-[32px] bg-[#172B29] p-9 text-white sm:p-11">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#087F5B]/25 blur-3xl" />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#9ED9B8]">
                <HeartHandshake size={30} />
              </div>

              <p className="relative mt-12 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9ED9B8]">
                Built Around You
              </p>

              <h3 className="relative mt-5 text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl">
                Start with what
                <span className="block text-[#9ED9B8]">
                  your business needs.
                </span>
              </h3>

              <p className="relative mt-6 max-w-md text-sm leading-8 text-white/70">
                No unnecessary complexity. No
                one-size-fits-all approach. Just
                practical guidance, thoughtful
                design and technology selected
                for your goals.
              </p>

              <Link
                to="/contact"
                className="relative mt-auto inline-flex items-center gap-2 pt-12 text-sm font-bold text-[#9ED9B8] hover:text-white"
              >
                Let's Discuss Your Needs
                <ArrowUpRight size={19} />
              </Link>
            </div>

            {/* RIGHT SOLUTION LIST */}
            <div
              className={`rounded-[32px] border border-[#E0EDE5] bg-[#F5FAF7] p-6 sm:p-8 ${raised}`}
            >
              <div className="space-y-3">
                {solutionAreas.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 rounded-[20px] border border-[#E0EDE5] bg-[#F8FCF9] p-4 transition-all duration-300 hover:translate-x-1 hover:border-[#B6DBC7] sm:p-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E5F4EB] text-[#087F5B]">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h4 className="font-extrabold tracking-tight">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-[#627B71]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="border-y border-[#E1EEE6] bg-[#F5FAF7] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              How We Work
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
              From the first conversation
              <span className="block text-[#087F5B]">
                to the finished solution.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#627B71]">
              We keep the process straightforward,
              collaborative and focused on the
              outcome you want to achieve.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className={`rounded-[30px] border border-[#E0EDE5] bg-[#F5FAF7] p-8 transition-all duration-300 hover:-translate-y-1 ${raised}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5F4EB] text-[#087F5B] shadow-[inset_2px_2px_5px_#CDE4D5,inset_-2px_-2px_5px_#FFFFFF]">
                      <Icon size={25} />
                    </div>

                    <span className="text-4xl font-black text-[#D1E7D9]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-black">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#627B71]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CONTACT SECTION */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[36px] bg-[#E8F5ED] p-10 shadow-[inset_4px_4px_12px_#D4E8DA,inset_-4px_-4px_12px_#FFFFFF] sm:p-16 lg:flex-row lg:items-center">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Your Next Step
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] sm:text-5xl">
              Let's bring your ideas to life.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#627B71]">
              Whether you have a clear project in mind
              or you're still exploring options,
              we'd love to hear what you're working on.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#087F5B] px-8 py-5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#066A4C]"
          >
            Start a Conversation
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
