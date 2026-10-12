
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Monitor,
  Smartphone,
  Globe2,
  Mail,
  Cloud,
  Search,
  Network,
  Laptop,
  Printer,
  Server,
  Wifi,
  Palette,
  BarChart3,
  FileText,
  UserCheck,
  CircleCheck,
  ChevronRight,
  RefreshCw,
  Layers3,
} from "lucide-react";

import { services } from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";
import ServiceExperience from "../components/ServiceExperience";

const raised =
  "shadow-[9px_9px_24px_#dce9e2,-9px_-9px_24px_#ffffff]";

const inset =
  "shadow-[inset_4px_4px_10px_#dce9e2,inset_-4px_-4px_10px_#ffffff]";

/* =========================================
   1. WEBSITE DESIGN PREVIEW
========================================= */

function WebsiteVisual() {
  const [device, setDevice] = useState("desktop");

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#087F5B]">
          Responsive Website Preview
        </p>

        <div className={`flex gap-1 rounded-full bg-[#F5FAF7] p-1 ${inset}`}>
          {[
            ["desktop", Monitor],
            ["mobile", Smartphone],
          ].map(([value, Icon]) => (
            <button
              key={value}
              type="button"
              aria-label={`${value} preview`}
              aria-pressed={device === value}
              onClick={() => setDevice(value)}
              className={`rounded-full p-2 transition-all ${
                device === value
                  ? "bg-[#087F5B] text-white"
                  : "text-[#668276]"
              }`}
            >
              <Icon size={17} />
            </button>
          ))}
        </div>
      </div>

      <div className={`min-h-[345px] rounded-[26px] bg-[#E8F5ED] p-5 ${inset}`}>
        <div
          className={`mx-auto overflow-hidden rounded-[18px] border border-[#D5E9DC] bg-white shadow-xl transition-all duration-500 ${
            device === "mobile" ? "max-w-[220px]" : "max-w-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#E8F0EA] px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#A6DAB9]" />
              <span className="h-2 w-2 rounded-full bg-[#D7E9DE]" />
              <span className="h-2 w-2 rounded-full bg-[#D7E9DE]" />
            </div>
            <span className="text-[9px] font-bold text-[#668276]">
              yourbusiness.com.au
            </span>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-[#087F5B]">
                yourbrand.
              </span>
              <span className="text-[10px] font-semibold text-[#668276]">
                MENU
              </span>
            </div>

            <div
              className={`mt-7 grid gap-4 ${
                device === "desktop" ? "grid-cols-2" : ""
              }`}
            >
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#087F5B]">
                  Welcome to your business
                </p>
                <h3 className="mt-2 text-xl font-black leading-tight tracking-tight">
                  Your next big idea starts here.
                </h3>
                <p className="mt-2 text-[10px] leading-5 text-[#668276]">
                  A professional digital home designed to
                  connect with your customers.
                </p>
                <div className="mt-4 inline-block rounded-full bg-[#087F5B] px-4 py-2 text-[9px] font-bold text-white">
                  Explore Services
                </div>
              </div>

              <div className="flex min-h-[135px] items-center justify-center rounded-2xl bg-[#DDF2E6]">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-[#087F5B] text-white shadow-lg">
                  <Globe2 size={35} />
                  <Sparkles
                    size={16}
                    className="absolute -right-2 -top-2 text-[#087F5B]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {["Design", "Develop", "Launch"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-[#F5FAF7] px-2 py-3 text-center text-[9px] font-bold text-[#527568]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-[#668276]">
        Select desktop or mobile to explore the layout.
      </p>
    </div>
  );
}

/* =========================================
   2. BUSINESS ONLINE SETUP PREVIEW
========================================= */

const onlineItems = [
  [Globe2, "Business domain", "Your online address"],
  [Mail, "Professional email", "Your branded inbox"],
  [Cloud, "Microsoft 365", "Your workplace tools"],
  [Search, "Google Business", "Help customers find you"],
];

function OnlineVisual() {
  const [completed, setCompleted] = useState([0, 1]);

  const toggle = (index) => {
    setCompleted((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#087F5B]">
          Your Digital Launch
        </p>
        <span className="text-xs font-bold text-[#087F5B]">
          {completed.length} / 4 ready
        </span>
      </div>

      <div className={`mt-5 rounded-[24px] bg-[#E8F5ED] p-5 ${inset}`}>
        <div className="h-2 overflow-hidden rounded-full bg-white">
          <div
            className="h-full rounded-full bg-[#087F5B] transition-all duration-500"
            style={{ width: `${completed.length * 25}%` }}
          />
        </div>

        <div className="mt-5 space-y-3">
          {onlineItems.map(([Icon, title, description], index) => {
            const selected = completed.includes(index);

            return (
              <button
                type="button"
                key={title}
                aria-pressed={selected}
                onClick={() => toggle(index)}
                className="flex w-full items-center gap-4 rounded-2xl border border-[#DDEAE2] bg-white p-4 text-left transition-all hover:border-[#9ED9B8]"
              >
                <div className="rounded-xl bg-[#E8F5ED] p-3 text-[#087F5B]">
                  <Icon size={21} />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-extrabold">{title}</p>
                  <p className="mt-1 text-xs text-[#668276]">
                    {description}
                  </p>
                </div>

                <CheckCircle2
                  size={22}
                  className={
                    selected
                      ? "text-[#087F5B]"
                      : "text-[#D1E4D8]"
                  }
                />
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-[#668276]">
        Tap each item to explore a sample setup checklist.
      </p>
    </div>
  );
}

/* =========================================
   3. BUSINESS IT NETWORK PREVIEW
========================================= */

const devices = [
  [Laptop, "Computers", "Employee devices"],
  [Printer, "Printers", "Office printing"],
  [Server, "Server", "Shared resources"],
  [Wifi, "Wi-Fi", "Wireless access"],
];

function NetworkVisual() {
  const [selected, setSelected] = useState(0);
  const [SelectedIcon, selectedTitle, selectedText] =
    devices[selected];

  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#087F5B]">
        Connected Workplace
      </p>

      <div className={`mt-5 rounded-[26px] bg-[#E8F5ED] p-5 ${inset}`}>
        <div className="mx-auto flex w-fit items-center gap-3 rounded-2xl bg-[#172B29] px-6 py-4 text-white shadow-lg">
          <Network size={24} className="text-[#9ED9B8]" />
          <span className="text-sm font-extrabold">
            Business Network
          </span>
        </div>

        <div className="mx-auto h-8 w-px bg-[#8CCCAA]" />

        <div className="grid grid-cols-2 gap-3">
          {devices.map(([Icon, title], index) => (
            <button
              type="button"
              key={title}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              className={`rounded-2xl border p-5 text-center transition-all duration-300 ${
                selected === index
                  ? "border-[#087F5B] bg-white shadow-lg"
                  : "border-[#DDEAE2] bg-[#F8FCF9] hover:bg-white"
              }`}
            >
              <Icon
                size={26}
                className="mx-auto text-[#087F5B]"
              />
              <p className="mt-3 text-xs font-extrabold">
                {title}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 rounded-2xl bg-white p-5">
          <div className="rounded-xl bg-[#E8F5ED] p-3 text-[#087F5B]">
            <SelectedIcon size={24} />
          </div>

          <div>
            <p className="text-sm font-extrabold">
              {selectedTitle}
            </p>
            <p className="mt-1 text-xs text-[#668276]">
              {selectedText}
            </p>
          </div>

          <CheckCircle2
            size={19}
            className="ml-auto text-[#087F5B]"
          />
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-[#668276]">
        Select a device to explore the workplace setup.
      </p>
    </div>
  );
}

/* =========================================
   4. BRANDING STUDIO PREVIEW
========================================= */

const palettes = [
  ["Emerald", "#087F5B", "#172B29", "#9ED9B8", "#F5FAF7"],
  ["Ocean", "#2563EB", "#172554", "#93C5FD", "#EFF6FF"],
  ["Sunset", "#C2410C", "#431407", "#FDBA74", "#FFF7ED"],
];

function BrandingVisual() {
  const [selected, setSelected] = useState(0);
  const palette = palettes[selected];

  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#087F5B]">
        Interactive Brand Studio
      </p>

      <div className={`mt-5 rounded-[26px] bg-[#E8F5ED] p-5 ${inset}`}>
        <div
          className="rounded-[24px] p-7 text-white transition-colors duration-500"
          style={{ backgroundColor: palette[2] }}
        >
          <div className="flex items-center justify-between">
            <Palette
              size={25}
              style={{ color: palette[3] }}
            />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
              Brand Concept
            </span>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
              style={{ backgroundColor: palette[1] }}
            >
              <Sparkles size={27} />
            </div>

            <div>
              <h3 className="text-2xl font-black">
                yourbrand.
              </h3>
              <p className="text-xs text-white/60">
                Made to be remembered.
              </p>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-4 gap-2">
            {palette.slice(1).map((colour) => (
              <div
                key={colour}
                className="h-12 rounded-xl border border-white/10"
                style={{ backgroundColor: colour }}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {palettes.map((item, index) => (
            <button
              type="button"
              key={item[0]}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              className={`rounded-xl px-3 py-3 text-xs font-extrabold transition-all ${
                selected === index
                  ? "bg-[#087F5B] text-white"
                  : "bg-white text-[#668276] hover:text-[#087F5B]"
              }`}
            >
              {item[0]}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-[#668276]">
        Choose a colour palette to preview a sample identity.
      </p>
    </div>
  );
}

/* =========================================
   5. DATA ANALYTICS DASHBOARD
========================================= */

const metrics = [
  ["Revenue", "$48.6K", "+12.4%", [30, 44, 38, 55, 49, 70, 82]],
  ["Enquiries", "1,284", "+8.2%", [42, 35, 52, 48, 65, 59, 78]],
  ["Efficiency", "86%", "+6.1%", [38, 45, 50, 62, 59, 75, 86]],
];

function AnalyticsVisual() {
  const [selected, setSelected] = useState(0);
  const metric = metrics[selected];

  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#087F5B]">
        Interactive Business Dashboard
      </p>

      <div className={`mt-5 rounded-[26px] bg-[#E8F5ED] p-5 ${inset}`}>
        <div className="rounded-[22px] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-[#668276]">
                Business Overview
              </p>
              <h3 className="mt-1 text-lg font-black">
                Performance Insights
              </h3>
            </div>

            <BarChart3
              size={24}
              className="text-[#087F5B]"
            />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {metrics.map((item, index) => (
              <button
                type="button"
                key={item[0]}
                aria-pressed={selected === index}
                onClick={() => setSelected(index)}
                className={`rounded-xl p-3 text-left transition-all ${
                  selected === index
                    ? "bg-[#087F5B] text-white"
                    : "bg-[#F5FAF7] text-[#172B29]"
                }`}
              >
                <p
                  className={`text-[10px] font-bold ${
                    selected === index
                      ? "text-white/70"
                      : "text-[#668276]"
                  }`}
                >
                  {item[0]}
                </p>

                <p className="mt-2 text-sm font-black sm:text-lg">
                  {item[1]}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-[18px] bg-[#F5FAF7] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#668276]">
                  {metric[0]} Trend
                </p>
                <p className="mt-1 text-xl font-black">
                  {metric[1]}
                </p>
              </div>

              <span className="rounded-full bg-[#DDF2E6] px-3 py-1 text-xs font-extrabold text-[#087F5B]">
                {metric[2]}
              </span>
            </div>

            <div className="mt-7 flex h-36 items-end gap-3 border-b border-[#DCEBE2] pb-1">
              {metric[3].map((value, index) => (
                <div
                  key={`${selected}-${index}`}
                  className="flex-1 rounded-t-lg bg-[#087F5B] transition-all duration-500"
                  style={{
                    height: `${value}%`,
                    opacity: index === 6 ? 1 : 0.65,
                  }}
                  title={`${value} illustrative units`}
                />
              ))}
            </div>

            <div className="mt-3 flex justify-between text-[10px] font-bold text-[#8BA598]">
              {[
                "MON",
                "TUE",
                "WED",
                "THU",
                "FRI",
                "SAT",
                "SUN",
              ].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-[#668276]">
        Illustrative data. Select a metric to explore the dashboard.
      </p>
    </div>
  );
}

/* =========================================
   6. AUTOMATION WORKFLOW PREVIEW
========================================= */

const workflowSteps = [
  [FileText, "Request", "A team member submits a digital request."],
  [UserCheck, "Approval", "The right person reviews and approves it."],
  [CircleCheck, "Complete", "The result is recorded and the team is notified."],
];

function AutomationVisual() {
  const [selected, setSelected] = useState(0);
  const [StepIcon, title, description] = workflowSteps[selected];

  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#087F5B]">
        Interactive Workflow Preview
      </p>

      <div className={`mt-5 rounded-[26px] bg-[#E8F5ED] p-5 ${inset}`}>
        <div className="grid grid-cols-3 gap-2">
          {workflowSteps.map(([Icon, item], index) => (
            <button
              type="button"
              key={item}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
              className={`rounded-2xl border p-3 text-center transition-all duration-300 ${
                selected === index
                  ? "border-[#087F5B] bg-[#087F5B] text-white"
                  : "border-[#DCEBE2] bg-white text-[#527568]"
              }`}
            >
              <Icon size={23} className="mx-auto" />
              <p className="mt-3 text-[11px] font-extrabold">
                {item}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 text-[#087F5B]">
          <span className="h-1.5 flex-1 rounded-full bg-[#A8D8BC]" />
          <ChevronRight size={19} />
          <span className="h-1.5 flex-1 rounded-full bg-[#A8D8BC]" />
          <ChevronRight size={19} />
          <span className="h-1.5 flex-1 rounded-full bg-[#A8D8BC]" />
        </div>

        <div className="mt-5 rounded-[22px] bg-white p-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
            <StepIcon size={30} />
          </div>

          <p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-[#087F5B]">
            Step 0{selected + 1}
          </p>

          <h3 className="mt-2 text-2xl font-black">
            {title}
          </h3>

          <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#668276]">
            {description}
          </p>

          <button
            type="button"
            onClick={() => setSelected((selected + 1) % 3)}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-5 py-3 text-xs font-extrabold text-white hover:bg-[#066A4C]"
          >
            {selected === 2
              ? "Restart Workflow"
              : "Next Step"}

            {selected === 2 ? (
              <RefreshCw size={15} />
            ) : (
              <ArrowRight size={15} />
            )}
          </button>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-[#668276]">
        Follow a sample request through an approval process.
      </p>
    </div>
  );
}

/* =========================================
   SELECT THE CORRECT SERVICE VISUAL
========================================= */

function ServiceVisual({ visual }) {
  switch (visual) {
    case "website":
      return <WebsiteVisual />;
    case "online":
      return <OnlineVisual />;
    case "network":
      return <NetworkVisual />;
    case "branding":
      return <BrandingVisual />;
    case "analytics":
      return <AnalyticsVisual />;
    case "automation":
      return <AutomationVisual />;
    default:
      return <WebsiteVisual />;
  }
}

/* =========================================
   MAIN SERVICE DETAIL PAGE
========================================= */

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  const relatedServices = services
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <main className="flex min-h-[65vh] items-center justify-center bg-[#F5FAF7] px-6 py-24 text-[#172B29]">
        <div className="max-w-xl text-center">
          <Sparkles
            size={40}
            className="mx-auto text-[#087F5B]"
          />

          <h1 className="mt-7 text-4xl font-black">
            Service not found.
          </h1>

          <p className="mt-5 leading-8 text-[#668276]">
            This service page may have moved.
            Explore our current services instead.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-7 py-4 font-bold text-white"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon || Layers3;

  return (
    <main className="overflow-hidden bg-[#F5FAF7] text-[#172B29]">

      {/* HERO SECTION — UNCHANGED DESIGN */}
      <section className="relative border-b border-[#E1EEE6] px-6 pb-24 pt-12 sm:pb-28 sm:pt-16">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[450px] w-[450px] rounded-full bg-[#D9F1E4]/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#668276] hover:text-[#087F5B]"
          >
            <ArrowLeft size={18} />
            All Services
          </Link>

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">

            {/* HERO TEXT */}
            <div>
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-[#DCEBE2] bg-[#F6FBF8] px-5 py-3 text-xs font-extrabold tracking-[0.12em] text-[#087F5B] ${raised}`}
              >
                <Sparkles size={15} />
                {service.category}
              </div>

              <div
                className={`mt-9 flex h-20 w-20 items-center justify-center rounded-[26px] bg-[#E5F4EB] text-[#087F5B] ${inset}`}
              >
                <Icon size={36} strokeWidth={1.7} />
              </div>

              <h1 className="mt-9 text-[clamp(2.8rem,5vw,5.2rem)] font-black leading-[1.1] tracking-[-0.065em]">
                {service.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-[#627B71]">
                {service.details}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  state={{ service: service.title }}
                  className="inline-flex items-center gap-3 rounded-full bg-[#087F5B] px-8 py-5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#066A4C]"
                >
                  Discuss Your Project
                  <ArrowUpRight size={19} />
                </Link>

                <a
                  href="#capabilities"
                  className={`inline-flex items-center gap-3 rounded-full border border-[#D4E6DB] bg-[#F8FCF9] px-8 py-5 text-sm font-bold transition-all hover:-translate-y-1 ${raised}`}
                >
                  Explore Capabilities
                  <ArrowRight size={19} />
                </a>
              </div>
            </div>

            {/* SERVICE-SPECIFIC INTERACTIVE PREVIEW */}
            <div
              className={`rounded-[36px] border border-white bg-[#F5FAF7] p-5 sm:p-8 ${raised}`}
            >
              <ServiceVisual visual={service.visual} />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-b border-[#E1EEE6] bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#087F5B]">
                Tools & Technologies
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                The tools behind the solutions.
              </h2>
            </div>

            <div className="flex max-w-3xl flex-wrap gap-3">
              {(service.technologies || []).map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#DCEBE2] bg-[#F5FAF7] px-4 py-2.5 text-xs font-bold text-[#527568]"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* NEW INTERACTIVE CAPABILITIES AND PROJECT JOURNEY */}
      <ServiceExperience service={service} />

      {/* RELATED SERVICES */}
      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
                Discover More
              </p>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                Explore other ways we can help.
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-[#087F5B]"
            >
              All Services
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {relatedServices.map((item, index) => (
              <ServiceCard
                key={item.slug}
                service={item}
                index={index}
              />
            ))}
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
              Let's discuss your project.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#627B71]">
              Tell us what you want to achieve.
              We'll explore a solution that fits
              your business and your goals.
            </p>
          </div>

          <Link
            to="/contact"
            state={{ service: service.title }}
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#087F5B] px-8 py-5 font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#066A4C]"
          >
            Enquire About This Service
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
