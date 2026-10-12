
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  MonitorSmartphone,
  Network,
  Palette,
  BarChart3,
  Workflow,
  Sparkles,
  Layers3,
  PenTool,
  Code2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  Lightbulb,
  Rocket,
  Zap,
} from "lucide-react";

// Six updated services for the homepage.
// We will update servicesData.js when redesigning the Services page.
const offerings = [
  {
    title: "Website Design & Development",
    desc:
      "Professional websites, online stores and website redesigns that look great on every device, build trust and help customers find your business.",
    icon: MonitorSmartphone,
    tags: ["Business Websites", "Online Stores", "Website Care"],
  },
  {
    title: "Business Online Setup & Microsoft 365",
    desc:
      "Get your business online with domain registration, website hosting, professional email addresses, Google Business Profile and Microsoft 365.",
    icon: Globe2,
    tags: ["Domains & Hosting", "Business Email", "Microsoft 365"],
  },
  {
    title: "Business IT Setup & Support",
    desc:
      "Set up the essential technology for your shop, startup or office, including computers, printers, Wi-Fi, networks, servers and communication tools.",
    icon: Network,
    tags: ["Computers & Printers", "Networks", "IT Support"],
  },
  {
    title: "Branding, Graphic Design & Digital Marketing",
    desc:
      "Create a memorable business identity with logos, banners, marketing materials, social media graphics and SEO support to reach more customers.",
    icon: Palette,
    tags: ["Logo Design", "Marketing Graphics", "SEO"],
  },
  {
    title: "Data Analytics & Business Intelligence",
    desc:
      "Turn your spreadsheets and business data into meaningful insights using Power BI dashboards, KPI reports and structured data solutions.",
    icon: BarChart3,
    tags: ["Power BI", "KPI Dashboards", "Data Reporting"],
  },
  {
    title: "Business Automation & Digital Workplaces",
    desc:
      "Make everyday work easier with SharePoint intranets, Power Apps, automated workflows and connected systems that help your team work smarter.",
    icon: Workflow,
    tags: ["SharePoint", "Power Automate", "Power Apps"],
  },
];

const studioSlides = [
  {
    eyebrow: "IMAGINE. DESIGN. BUILD.",
    first: "Ideas made",
    second: "tangible.",
    icon: Layers3,
    chips: ["Identity", "Experience", "Innovation"],
    note: "From the first sketch to the finished experience.",
  },
  {
    eyebrow: "YOUR BUSINESS. ONLINE.",
    first: "Digital that",
    second: "works for you.",
    icon: Code2,
    chips: ["Websites", "Cloud", "Support"],
    note: "Practical technology, thoughtfully delivered.",
  },
  {
    eyebrow: "CLARITY. CONNECTION. GROWTH.",
    first: "Smarter ways",
    second: "to grow.",
    icon: BarChart3,
    chips: ["Insights", "Automation", "Progress"],
    note: "Make your next move with confidence.",
  },
];

const strengths = [
  {
    icon: Lightbulb,
    title: "We see the bigger picture.",
    description:
      "Your website, brand and technology should work together. We help connect the pieces into one practical digital experience.",
  },
  {
    icon: Compass,
    title: "Built around your business.",
    description:
      "We understand your goals before recommending solutions, keeping things simple, useful and relevant.",
  },
  {
    icon: Layers3,
    title: "Creativity meets technology.",
    description:
      "We combine thoughtful design with technical expertise to create solutions that look good and work reliably.",
  },
  {
    icon: Zap,
    title: "Ready for what's next.",
    description:
      "From your first business website to smarter workplace systems, we help you build foundations that can grow.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    description:
      "We learn about your business, your challenges and what you want to achieve.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Build",
    description:
      "We plan and create a practical solution tailored to your business needs.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We help you launch, improve and maintain your digital solution as your business evolves.",
  },
];

const raised =
  "shadow-[9px_9px_24px_#dce9e2,-9px_-9px_24px_#ffffff]";

export default function Home() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActive((previous) => (previous + 1) % studioSlides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [paused]);

  const slide = studioSlides[active];
  const SlideIcon = slide.icon;

  const nextSlide = () => {
    setActive((previous) => (previous + 1) % studioSlides.length);
  };

  const previousSlide = () => {
    setActive(
      (previous) =>
        (previous - 1 + studioSlides.length) % studioSlides.length
    );
  };

  return (
    <main className="overflow-hidden bg-[#F5FAF7] text-[#172B29]">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-[#e1eee6] px-6 py-20 sm:py-24 lg:py-28">

        {/* Background effects */}
        <div className="pointer-events-none absolute -right-28 -top-40 h-[550px] w-[550px] rounded-full bg-[#d9f1e4]/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-56 -left-40 h-[480px] w-[480px] rounded-full bg-white blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">

          {/* HERO LEFT */}
          <div>
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-[#dcebe2] bg-[#f6fbf8] px-5 py-3 text-xs font-extrabold tracking-[0.13em] text-[#087F5B] ${raised}`}
            >
              <Sparkles size={16} />
              A CREATIVE & DIGITAL STUDIO
            </span>

            <h1 className="mt-12 max-w-3xl text-[clamp(3.5rem,6.5vw,6.6rem)] font-black leading-[1.06] tracking-[-0.075em]">
              Good ideas
              <span className="block">deserve great</span>
              <span className="block text-[#087F5B]">
                execution.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-lg leading-9 text-[#627b71] sm:text-xl">
              We bring creativity and technology together to help
              businesses build a strong brand, get online and work
              smarter — from the first idea to the finished solution.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-full bg-[#087F5B] px-8 py-5 text-sm font-bold text-white shadow-lg shadow-[#087F5B]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#066a4c]"
              >
                Explore Our Services
                <ArrowUpRight size={19} />
              </Link>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-3 rounded-full border border-[#d4e6db] bg-[#f8fcf9] px-8 py-5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${raised}`}
              >
                Let's Talk
                <ArrowRight size={19} />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm font-medium text-[#668276]">
              <CheckCircle2 size={19} className="shrink-0 text-[#087F5B]" />
              Creative thinking. Practical solutions. Personal service.
            </div>
          </div>

          {/* HERO RIGHT - NEOMORPHIC CAROUSEL */}
          <div
            className={`relative rounded-[38px] border border-white bg-[#f5faf7] p-5 sm:p-8 ${raised}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setPaused(false);
              }
            }}
          >
            {/* Three interactive dots */}
            <div className="mb-6 flex items-center justify-between gap-3 px-2">
              <div className="flex items-center gap-2">
                {studioSlides.map((item, index) => (
                  <button
                    key={item.eyebrow}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show studio slide ${index + 1}`}
                    aria-pressed={index === active}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === active
                        ? "w-9 bg-[#087F5B]"
                        : "w-3 bg-[#d5e5dc] hover:bg-[#9dd7b8]"
                    }`}
                  />
                ))}
              </div>

              <span className="text-[10px] font-extrabold tracking-[0.18em] text-[#6a8277] sm:text-xs">
                THE VILARTECH STUDIO
              </span>
            </div>

            {/* Rotating card */}
            <div className="relative min-h-[420px] overflow-hidden rounded-[32px] bg-[#172B29] p-8 text-white shadow-[inset_5px_5px_15px_#0b1a18,inset_-4px_-4px_14px_#24403a] sm:min-h-[460px] sm:p-11">

              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#087F5B]/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#9ED9B8]/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-[#9ED9B8] shadow-[4px_5px_14px_#071715]">
                  <SlideIcon size={27} />
                </div>

                <ArrowUpRight
                  size={24}
                  className="text-[#9ED9B8]"
                />
              </div>

              <div
                key={active}
                className="relative mt-16 animate-[fadeIn_0.55s_ease-out]"
              >
                <p className="text-xs font-extrabold tracking-[0.22em] text-[#9ED9B8] sm:text-sm">
                  {slide.eyebrow}
                </p>

                <h2 className="mt-7 text-[clamp(2.5rem,4vw,4.2rem)] font-black leading-[1.08] tracking-[-0.06em]">
                  {slide.first}
                  <span className="block text-[#9ED9B8]">
                    {slide.second}
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  {slide.note}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {slide.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom mini cards */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-[24px] bg-[#e8f5ed] p-5 shadow-[inset_3px_3px_8px_#d3e8db,inset_-3px_-3px_8px_#ffffff] sm:p-6">
                <PenTool
                  size={25}
                  className="text-[#087F5B]"
                />
                <h3 className="mt-7 font-extrabold">
                  Creative by nature.
                </h3>
                <p className="mt-1 text-sm text-[#668276]">
                  Design with purpose.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#f5faf7] p-5 shadow-[inset_3px_3px_8px_#dbe8e0,inset_-3px_-3px_8px_#ffffff] sm:p-6">
                <Code2
                  size={25}
                  className="text-[#087F5B]"
                />
                <h3 className="mt-7 font-extrabold">
                  Digital by design.
                </h3>
                <p className="mt-1 text-sm text-[#668276]">
                  Built to work beautifully.
                </p>
              </div>
            </div>

            {/* Carousel controls */}
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                aria-label="Previous studio slide"
                onClick={previousSlide}
                className="rounded-full bg-white p-3 text-[#087F5B] shadow-sm transition-colors hover:bg-[#e8f5ed]"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                aria-label="Next studio slide"
                onClick={nextSlide}
                className="rounded-full bg-white p-3 text-[#087F5B] shadow-sm transition-colors hover:bg-[#e8f5ed]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="border-b border-[#e1eee6] bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <p className="shrink-0 text-xs font-extrabold uppercase tracking-[0.18em] text-[#087F5B]">
            The Vilartech Perspective
          </p>

          <p className="max-w-2xl text-lg font-semibold leading-8">
            Great digital experiences happen when creativity,
            technology and real business needs work together.
          </p>
        </div>
      </section>

      {/* ABOUT US - BEFORE SERVICES */}
      <section className="bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Get To Know Us
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
              Creative ideas.
              <span className="block text-[#087F5B]">
                Real-world results.
              </span>
            </h2>
          </div>

          <div className="rounded-[30px] border border-[#e1eee6] bg-[#F5FAF7] p-8 shadow-[8px_8px_22px_#e0eae4,-8px_-8px_22px_#ffffff] sm:p-10">
            <p className="text-lg leading-9 text-[#627b71]">
              Vilartech, powered by Trinetrix, brings design,
              digital tools and practical IT expertise together.
              We help startups and small businesses establish
              their online presence, strengthen their identity
              and make everyday technology easier to manage.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-bold text-[#087F5B] transition-all hover:gap-4"
            >
              Discover Our Story
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* SIX SERVICES */}
      <section
        id="services"
        className="bg-[#F5FAF7] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
            How We Can Help
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
                Everything your business needs
                <span className="block text-[#087F5B]">
                  to look good and work smarter.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#627b71]">
                From your first website and business email
                to IT support, branding, data insights and
                automation — practical services to help your
                business grow.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-[#087F5B] hover:text-[#066a4c]"
            >
              View All Services
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {offerings.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  to="/services"
                  key={item.title}
                  className={`group flex min-h-[370px] flex-col rounded-[30px] border border-[#e0ede5] bg-[#f5faf7] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#b6dbc7] hover:shadow-[13px_13px_30px_#dce9e2,-13px_-13px_30px_#ffffff] ${raised}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-[#e5f4eb] p-4 text-[#087F5B] shadow-[inset_2px_2px_5px_#cde4d5,inset_-2px_-2px_5px_#ffffff]">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-extrabold text-[#9ab5a6]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-black leading-snug tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#627b71]">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#dcebe2] bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-[#527568]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[#dbe9e1] pt-5 text-sm font-extrabold text-[#087F5B]">
                    Explore Service
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY VILARTECH */}
      <section className="bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              The Way We Think
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
              Less complexity.
              <span className="block text-[#087F5B]">
                More possibility.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#627b71]">
              Technology should make business easier, not more
              complicated. We focus on clear communication,
              thoughtful design and solutions that serve a
              real purpose.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`rounded-[30px] p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10 ${
                    index === 0
                      ? "bg-[#172B29] text-white shadow-[12px_12px_28px_#dce9e2]"
                      : "border border-[#e0ede5] bg-[#F5FAF7] shadow-[8px_8px_22px_#e1ece5,-8px_-8px_22px_#ffffff]"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      index === 0
                        ? "bg-white/10 text-[#9ED9B8]"
                        : "bg-[#e5f4eb] text-[#087F5B]"
                    }`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-10 text-2xl font-black tracking-tight">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-5 max-w-xl text-sm leading-8 ${
                      index === 0
                        ? "text-white/70"
                        : "text-[#627b71]"
                    }`}
                  >
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-y border-[#e1eee6] bg-[#F5FAF7] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              How We Work
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
              A simple path from
              <span className="text-[#087F5B]">
                {" "}idea to impact.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#627b71]">
              A straightforward, collaborative approach that
              makes it easier to turn your ideas into working
              solutions.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {processSteps.map((step) => {
              const StepIcon = step.icon;

              return (
                <article
                  key={step.number}
                  className={`rounded-[30px] border border-[#e0ede5] bg-[#F5FAF7] p-8 transition-all duration-300 hover:-translate-y-1 ${raised}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5f4eb] text-[#087F5B] shadow-[inset_2px_2px_5px_#cde4d5,inset_-2px_-2px_5px_#ffffff]">
                      <StepIcon size={25} />
                    </div>

                    <span className="text-4xl font-black text-[#d1e7d9]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-black">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#627b71]">
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
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[36px] bg-[#e8f5ed] p-10 shadow-[inset_4px_4px_12px_#d4e8da,inset_-4px_-4px_12px_#ffffff] sm:p-16 lg:flex-row lg:items-center">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Let's Build Something Great
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] sm:text-5xl">
              Have an idea? Let's make it happen.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#627b71]">
              Starting a new business, improving your website
              or looking for smarter technology? Tell us what
              you have in mind and let's explore the possibilities.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#087F5B] px-8 py-5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#066a4c]"
          >
            Start a Project
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      {/* CAROUSEL ANIMATION */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </main>
  );
}
