
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Palette,
  Code2,
  Lightbulb,
  Compass,
  HeartHandshake,
  Layers3,
  Target,
  Rocket,
  MapPin,
  Globe2,
  MonitorSmartphone,
  Network,
  BarChart3,
  Workflow,
  CheckCircle2,
  ChevronRight,
  PenTool,
  MousePointer2,
} from "lucide-react";

const raised =
  "shadow-[8px_8px_22px_#dce9e2,-8px_-8px_22px_#ffffff]";

const inset =
  "shadow-[inset_5px_5px_12px_#dce9e2,inset_-5px_-5px_12px_#ffffff]";

/* =========================================
   INTERACTIVE HERO CONTENT
========================================= */

const heroTabs = [
  {
    label: "Creative Design",
    icon: Palette,
    eyebrow: "THE CREATIVE SIDE",
    title: "Ideas made",
    accent: "memorable.",
    description:
      "We create thoughtful designs, distinctive brands and digital experiences that help businesses make a strong impression.",
    tags: ["Brand Identity", "Web Design", "Digital Creativity"],
  },
  {
    label: "Practical Technology",
    icon: Code2,
    eyebrow: "THE TECHNOLOGY SIDE",
    title: "Technology made",
    accent: "useful.",
    description:
      "We bring together websites, workplace tools, business intelligence and automation to make everyday business easier.",
    tags: ["Microsoft 365", "Power BI", "Business Automation"],
  },
  {
    label: "One Connected Approach",
    icon: Layers3,
    eyebrow: "THE VILARTECH APPROACH",
    title: "Better",
    accent: "together.",
    description:
      "We connect creativity and technology so every solution looks considered, works effectively and supports your business goals.",
    tags: ["Discover", "Create", "Improve"],
  },
];

/* =========================================
   VALUES
========================================= */

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "We ask questions, explore possibilities and look for better ways to solve business challenges.",
  },
  {
    icon: Target,
    title: "Purpose",
    description:
      "Every design decision and technology solution should have a clear reason and practical value.",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    description:
      "We listen, share ideas and work closely with clients throughout the project.",
  },
  {
    icon: Rocket,
    title: "Progress",
    description:
      "We create solutions that can improve and evolve as your business grows.",
  },
];

/* =========================================
   SERVICES
========================================= */

const capabilities = [
  {
    icon: MonitorSmartphone,
    title: "Website Design & Development",
    description:
      "Professional websites, online stores and modern digital experiences.",
  },
  {
    icon: Globe2,
    title: "Business Online Setup & Microsoft 365",
    description:
      "Business domains, professional email, hosting and workplace tools.",
  },
  {
    icon: Network,
    title: "Business IT Setup & Support",
    description:
      "Computers, networks, Wi-Fi and practical workplace technology.",
  },
  {
    icon: Palette,
    title: "Branding & Digital Marketing",
    description:
      "Logos, visual identity, marketing graphics and digital presence.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    description:
      "Power BI dashboards, reporting and meaningful business insights.",
  },
  {
    icon: Workflow,
    title: "Business Automation & Digital Workplaces",
    description:
      "SharePoint, Power Apps, Power Automate and connected workflows.",
  },
];

/* =========================================
   PROJECT APPROACH
========================================= */

const approach = [
  {
    number: "01",
    icon: Compass,
    title: "Listen & Understand",
    short: "First, we understand your business.",
    description:
      "We begin with a conversation about your business, your customers and the challenge you want to solve. This helps us identify what matters before recommending a solution.",
    points: [
      "Understand your goals",
      "Identify business requirements",
      "Explore practical possibilities",
    ],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Create & Deliver",
    short: "Then, we turn ideas into solutions.",
    description:
      "We design and develop a solution that fits your requirements. Throughout the process, we keep communication clear and welcome your feedback.",
    points: [
      "Plan the solution",
      "Design and develop",
      "Review and refine",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Improve",
    short: "Finally, we help you move forward.",
    description:
      "We help introduce the solution into your business, check that it works as intended and identify opportunities for future improvement.",
    points: [
      "Prepare for launch",
      "Support handover",
      "Explore future improvements",
    ],
  },
];

/* =========================================
   MAIN ABOUT PAGE
========================================= */

export default function About() {
  const [activeHero, setActiveHero] = useState(0);
  const [activeApproach, setActiveApproach] = useState(0);

  const hero = heroTabs[activeHero];
  const HeroIcon = hero.icon;

  const currentStep = approach[activeApproach];
  const StepIcon = currentStep.icon;

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5FAF7] text-[#172B29]">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="relative border-b border-[#DDEAE2] px-6 pb-24 pt-16 sm:pt-24">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#DDF2E6] opacity-70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}

          <div>
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-[#DCEBE2] bg-[#F5FAF7] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#087F5B] ${raised}`}
            >
              <Sparkles size={15} />
              Get to Know Vilartech
            </div>

            <h1 className="mt-9 text-[clamp(3rem,5.5vw,5.5rem)] font-black leading-[1.08] tracking-[-0.065em]">
              Creativity meets
              <span className="block text-[#087F5B]">
                technology.
              </span>
              Business moves
              <span className="block text-[#087F5B]">
                forward.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[#526D62]">
              Vilartech is an Adelaide-based creative and
              digital solutions studio helping businesses
              build their brand, establish their online
              presence and work smarter with technology.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#657A73]">
              From designing your website and setting up
              business email to creating Power BI dashboards
              and automating everyday tasks, we bring
              creative thinking and practical technology
              together in one place.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#066A4C]"
              >
                Explore Our Services
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-3 rounded-full border border-[#DCEBE2] bg-[#F5FAF7] px-7 py-4 text-sm font-bold transition-all hover:-translate-y-1 ${raised}`}
              >
                Let's Connect
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* INTERACTIVE HERO */}

          <div
            className={`rounded-[34px] border border-white bg-[#F5FAF7] p-5 sm:p-7 ${raised}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087F5B]">
                The Vilartech Studio
              </span>

              <MousePointer2
                size={18}
                className="text-[#087F5B]"
              />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {heroTabs.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    type="button"
                    aria-pressed={activeHero === index}
                    onClick={() => setActiveHero(index)}
                    className={`flex min-h-[84px] flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center transition-all duration-300 ${
                      activeHero === index
                        ? "bg-[#087F5B] text-white shadow-lg"
                        : "bg-[#E8F5ED] text-[#527568] hover:bg-[#DDF2E6]"
                    }`}
                  >
                    <Icon size={21} />
                    <span className="text-[10px] font-extrabold leading-4 sm:text-xs">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              key={activeHero}
              className="mt-5 rounded-[27px] bg-[#172B29] p-7 text-white sm:p-9"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 p-3 text-[#9ED9B8]">
                  <HeroIcon size={27} />
                </div>

                <span className="text-xs font-bold text-[#9ED9B8]">
                  0{activeHero + 1} / 03
                </span>
              </div>

              <p className="mt-12 text-xs font-extrabold uppercase tracking-[0.2em] text-[#9ED9B8]">
                {hero.eyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">
                {hero.title}
                <span className="block text-[#9ED9B8]">
                  {hero.accent}
                </span>
              </h2>

              <p className="mt-6 min-h-[105px] text-sm leading-8 text-white/75">
                {hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-bold text-white/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-[#668276]">
              Select a category to explore our approach.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          WHO WE ARE
      ===================================== */}

      <section className="bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Who We Are
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
              One studio.
              <span className="block text-[#087F5B]">
                Many possibilities.
              </span>
            </h2>

            <div className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-[#E8F5ED] px-5 py-4">
              <Layers3 size={24} className="text-[#087F5B]" />

              <div>
                <p className="text-sm font-extrabold">
                  Vilartech
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#668276]">
                  Powered by Trinetrix
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xl font-bold leading-9 tracking-tight sm:text-2xl">
              We believe businesses should not have to
              choose between great design and practical
              technology.
            </p>

            <p className="mt-7 text-base leading-8 text-[#657A73]">
              Vilartech brings both together. We work with
              businesses that need a professional identity,
              a stronger online presence or better tools
              for everyday operations.
            </p>

            <p className="mt-5 text-base leading-8 text-[#657A73]">
              Whether you're starting something new,
              improving an existing website or exploring
              ways to save time through automation,
              our focus is on understanding what you
              need and creating something genuinely useful.
            </p>

            <div className="mt-9 flex items-center gap-3 border-t border-[#DDEAE2] pt-7">
              <MapPin size={20} className="text-[#087F5B]" />
              <span className="text-sm font-semibold text-[#527568]">
                Based in Adelaide, South Australia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          WHY VILARTECH
      ===================================== */}

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              What Makes Us Different
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
              Creative in thinking.
              <span className="block text-[#087F5B]">
                Practical in delivery.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#657A73]">
              We look beyond individual tools and design
              elements to understand how everything
              supports your business.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            <article className="flex flex-col justify-between rounded-[30px] bg-[#172B29] p-9 text-white lg:col-span-2 sm:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#9ED9B8]">
                <Sparkles size={28} />
              </div>

              <div className="mt-16">
                <h3 className="max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  Beautiful experiences.
                  <span className="block text-[#9ED9B8]">
                    Useful technology.
                  </span>
                </h3>

                <p className="mt-6 max-w-xl leading-8 text-white/75">
                  We consider how your brand, website,
                  systems and customer experience work
                  together, helping create a more
                  consistent and connected business.
                </p>
              </div>
            </article>

            <article
              className={`flex flex-col justify-between rounded-[30px] border border-[#DDEAE2] bg-[#F5FAF7] p-9 ${raised}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                <Compass size={27} />
              </div>

              <div className="mt-14">
                <h3 className="text-2xl font-black">
                  Clarity first.
                </h3>

                <p className="mt-5 text-sm leading-8 text-[#657A73]">
                  We explain options in straightforward
                  language, helping you understand the
                  solution without unnecessary technical
                  complexity.
                </p>
              </div>
            </article>

            <article
              className={`flex flex-col justify-between rounded-[30px] border border-[#DDEAE2] bg-[#F5FAF7] p-9 ${raised}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                <HeartHandshake size={27} />
              </div>

              <div className="mt-14">
                <h3 className="text-2xl font-black">
                  Collaboration matters.
                </h3>

                <p className="mt-5 text-sm leading-8 text-[#657A73]">
                  We listen to your ideas, discuss
                  possibilities and keep you involved
                  as the solution takes shape.
                </p>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-[30px] bg-[#E8F5ED] p-9 lg:col-span-2 sm:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#087F5B]">
                <Rocket size={27} />
              </div>

              <div className="mt-14">
                <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Built for what comes next.
                </h3>

                <p className="mt-6 max-w-xl leading-8 text-[#527568]">
                  Your business will change over time.
                  We aim to create practical solutions
                  that can be maintained, refined and
                  extended as your needs evolve.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================
          OUR VALUES
      ===================================== */}

      <section className="border-y border-[#DDEAE2] bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              What Matters to Us
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
              The principles behind
              <span className="block text-[#087F5B]">
                everything we create.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-[28px] border border-[#DDEAE2] bg-[#F5FAF7] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#9ED9B8] hover:shadow-[8px_8px_22px_#dce9e2]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-10 text-xl font-black">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#657A73]">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          WHAT WE DO
      ===================================== */}

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
                Our Expertise
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
                What we can
                <span className="block text-[#087F5B]">
                  help you with.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[#657A73]">
                Six connected service areas, designed
                to help businesses establish, improve
                and grow their digital presence.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-[#087F5B]"
            >
              Explore All Services
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  to="/services"
                  key={item.title}
                  className={`group rounded-[28px] border border-[#DDEAE2] bg-[#F5FAF7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#9ED9B8] ${raised}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                      <Icon size={27} />
                    </div>

                    <span className="text-xs font-black text-[#A8CDB8]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-9 text-xl font-black leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#657A73]">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 border-t border-[#DDEAE2] pt-5 text-sm font-bold text-[#087F5B]">
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          INTERACTIVE PROJECT JOURNEY
      ===================================== */}

      <section className="border-y border-[#DDEAE2] bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
            Working With Vilartech
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
            Simple to understand.
            <span className="block text-[#087F5B]">
              Thoughtful at every step.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-[#657A73]">
            Every project is different, but our approach
            follows three practical stages. Select
            a stage to see how we work with you.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">

            {/* STAGE SELECTOR */}

            <div className="space-y-3">
              {approach.map((item, index) => {
                const Icon = item.icon;
                const selected = activeApproach === index;

                return (
                  <button
                    key={item.number}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveApproach(index)}
                    className={`flex w-full items-center gap-4 rounded-[24px] border p-5 text-left transition-all ${
                      selected
                        ? "border-[#087F5B] bg-[#E8F5ED]"
                        : "border-[#DDEAE2] bg-[#F5FAF7] hover:border-[#9ED9B8]"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                        selected
                          ? "bg-[#087F5B] text-white"
                          : "bg-white text-[#087F5B]"
                      }`}
                    >
                      <Icon size={23} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-black">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-6 text-[#657A73]">
                        {item.short}
                      </p>
                    </div>

                    <ChevronRight
                      size={19}
                      className="text-[#087F5B]"
                    />
                  </button>
                );
              })}
            </div>

            {/* ACTIVE STAGE */}

            <div className="flex min-h-[370px] flex-col justify-between rounded-[30px] bg-[#172B29] p-8 text-white sm:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#9ED9B8]">
                    Stage {currentStep.number} / 03
                  </span>

                  <StepIcon
                    size={27}
                    className="text-[#9ED9B8]"
                  />
                </div>

                <h3 className="mt-10 text-3xl font-black tracking-tight sm:text-4xl">
                  {currentStep.title}
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-8 text-white/75">
                  {currentStep.description}
                </p>

                <div className="mt-8 space-y-4">
                  {currentStep.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="shrink-0 text-[#9ED9B8]"
                      />
                      <span className="text-sm font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-6">
                <div className="flex gap-2">
                  {approach.map((item, index) => (
                    <button
                      key={item.number}
                      type="button"
                      aria-label={`View stage ${index + 1}`}
                      aria-pressed={activeApproach === index}
                      onClick={() => setActiveApproach(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeApproach === index
                          ? "w-9 bg-[#9ED9B8]"
                          : "w-2.5 bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setActiveApproach(
                      (activeApproach + 1) % approach.length
                    )
                  }
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#9ED9B8]"
                >
                  {activeApproach === 2
                    ? "Start Again"
                    : "Next Stage"}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          TRINETRIX CONNECTION
      ===================================== */}

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Our Brand Connection
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
              Vilartech.
              <span className="block text-[#087F5B]">
                Powered by Trinetrix.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#657A73]">
              Vilartech combines a creative, design-led
              perspective with the practical IT and
              digital technology capabilities associated
              with Trinetrix.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#657A73]">
              Together, the two brands bring creative
              thinking and technical capability into
              a connected approach—helping businesses
              create a professional identity and build
              the systems that support their work.
            </p>

            <a
              href="https://trinetrix-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#087F5B] hover:underline"
            >
              Discover Trinetrix
              <ArrowUpRight size={19} />
            </a>
          </div>

          <div
            className={`rounded-[32px] border border-white bg-[#F5FAF7] p-7 sm:p-10 ${raised}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[25px] bg-[#E8F5ED] p-6">
                <Palette
                  size={31}
                  className="text-[#087F5B]"
                />

                <h3 className="mt-12 text-xl font-black">
                  Vilartech
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#657A73]">
                  Creative thinking, branding and
                  digital experiences.
                </p>
              </div>

              <div className="rounded-[25px] bg-[#172B29] p-6 text-white">
                <Code2
                  size={31}
                  className="text-[#9ED9B8]"
                />

                <h3 className="mt-12 text-xl font-black">
                  Trinetrix
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/70">
                  IT capability, business systems
                  and practical technology.
                </p>
              </div>
            </div>

            <div
              className={`mt-5 flex items-center justify-center gap-3 rounded-[22px] bg-[#F5FAF7] p-5 ${inset}`}
            >
              <Layers3
                size={23}
                className="text-[#087F5B]"
              />

              <span className="text-sm font-extrabold">
                Creativity + Technology
              </span>

              <Sparkles
                size={18}
                className="text-[#087F5B]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CONTACT SECTION
      ===================================== */}

      <section className="bg-white px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[36px] bg-[#E8F5ED] p-10 sm:p-16 lg:flex-row lg:items-center">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Let's Build Something Meaningful
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.055em] sm:text-5xl">
              Have an idea?
              <span className="block text-[#087F5B]">
                Let's make it happen.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#657A73]">
              Whether you're starting a business,
              refreshing your online presence or
              exploring better ways to work, we'd
              love to hear what you're planning.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#087F5B] px-8 py-5 font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#066A4C]"
          >
            Start a Conversation
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
