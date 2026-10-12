
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Send,
  Loader2,
  AlertCircle,
  MonitorSmartphone,
  Globe2,
  Network,
  Palette,
  BarChart3,
  Workflow,
  HelpCircle,
  Lightbulb,
  ClipboardList,
  MessagesSquare,
  Clock3,
  Compass,
} from "lucide-react";

import { services } from "../data/servicesData";

const CONTACT_EMAIL = "kirtan.gohel@vilartech.com.au";

const raised =
  "shadow-[8px_8px_22px_#dce9e2,-8px_-8px_22px_#ffffff]";

const inset =
  "shadow-[inset_4px_4px_11px_#dce9e2,inset_-4px_-4px_11px_#ffffff]";

const inputClass =
  "w-full rounded-2xl border border-[#DDEAE2] bg-[#FAFCFB] px-5 py-4 text-sm text-[#172B29] outline-none transition-all placeholder:text-[#9BAEA5] focus:border-[#087F5B] focus:ring-4 focus:ring-[#087F5B]/10";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
  website: "",
};

/* =========================================
   CUSTOMER-FRIENDLY BUSINESS NEEDS
========================================= */

const needs = [
  {
    id: "website",
    icon: MonitorSmartphone,
    title: "I need a website",
    short: "Build or improve my online presence.",
    description:
      "Whether you're starting from scratch or refreshing an existing website, we can help create a professional digital experience for your customers.",
    serviceSlug: "website-design-development",
    prompt:
      "I'd like help with a website.\n\nMy business is:\n\nWhat I want my website to achieve:\n\nDo I already have a website?",
    examples: [
      "New website",
      "Website redesign",
      "Online store",
    ],
  },
  {
    id: "online",
    icon: Globe2,
    title: "I'm setting up a business",
    short: "Get my digital essentials ready.",
    description:
      "Get started with a domain, professional business email, Microsoft 365 and the digital tools needed to operate your business.",
    serviceSlug: "business-online-setup-microsoft-365",
    prompt:
      "I'm setting up a business.\n\nMy business idea or industry is:\n\nI need help with:\n\nMy preferred timeframe:",
    examples: [
      "Business email",
      "Domain and hosting",
      "Microsoft 365",
    ],
  },
  {
    id: "it",
    icon: Network,
    title: "I need IT support",
    short: "Improve my workplace technology.",
    description:
      "We can help with business computers, networks, Wi-Fi, printers and practical IT setup or troubleshooting.",
    serviceSlug: "business-it-setup-support",
    prompt:
      "I need help with my business IT.\n\nMy current setup:\n\nThe problem or requirement:\n\nWhen I need assistance:",
    examples: [
      "Computers and devices",
      "Office network",
      "IT troubleshooting",
    ],
  },
  {
    id: "branding",
    icon: Palette,
    title: "I want better branding",
    short: "Make my business stand out.",
    description:
      "Build a recognisable business identity with logo design, visual branding, marketing graphics and digital marketing support.",
    serviceSlug:
      "branding-graphic-design-digital-marketing",
    prompt:
      "I'd like help with branding or marketing.\n\nMy business is:\n\nWhat I'd like to create or improve:\n\nMy target customers:",
    examples: [
      "Logo and identity",
      "Marketing graphics",
      "Digital marketing",
    ],
  },
  {
    id: "data",
    icon: BarChart3,
    title: "I need better reporting",
    short: "Understand my business performance.",
    description:
      "Turn business data into clear dashboards, reports and insights that help you make informed decisions.",
    serviceSlug:
      "data-analytics-business-intelligence",
    prompt:
      "I'd like help with reporting and business data.\n\nOur current data sources:\n\nWhat we want to measure:\n\nWho will use the reports:",
    examples: [
      "Power BI",
      "KPI dashboards",
      "Business reporting",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "I want to save time",
    short: "Reduce repetitive manual work.",
    description:
      "Improve everyday processes using Power Automate, Power Apps, SharePoint and connected digital workflows.",
    serviceSlug:
      "business-automation-digital-workplaces",
    prompt:
      "I'd like to automate or improve a business process.\n\nThe current process:\n\nWhat takes too much time:\n\nThe outcome we'd like:",
    examples: [
      "Workflow automation",
      "Power Apps",
      "SharePoint",
    ],
  },
  {
    id: "unsure",
    icon: HelpCircle,
    title: "I'm not sure yet",
    short: "Help me explore the possibilities.",
    description:
      "You don't need to know the technical solution. Simply tell us your idea or challenge and we can discuss suitable options.",
    serviceSlug: null,
    prompt:
      "I'm not sure which service I need.\n\nMy business or idea:\n\nWhat I'm trying to achieve:\n\nWhere I need guidance:",
    examples: [
      "Explore an idea",
      "Discuss options",
      "Find the right solution",
    ],
  },
];

/* =========================================
   SERVICE MATCHING
========================================= */

function getNeedFromService(serviceTitle) {
  const matchedService = services.find(
    (service) => service.title === serviceTitle
  );

  if (!matchedService) return null;

  return (
    needs.find(
      (need) => need.serviceSlug === matchedService.slug
    ) || null
  );
}

/* =========================================
   SELECTABLE BUSINESS NEED CARD
========================================= */

function NeedCard({ need, selected, onSelect }) {
  const Icon = need.icon;

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`group flex h-full w-full flex-col rounded-[26px] border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
        selected
          ? `border-[#087F5B] bg-[#E8F5ED] ${raised}`
          : "border-[#DDEAE2] bg-[#F5FAF7] hover:border-[#A6D8B9]"
      }`}
    >
      <div className="flex w-full items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            selected
              ? "bg-[#087F5B] text-white"
              : "bg-[#E8F5ED] text-[#087F5B]"
          }`}
        >
          <Icon size={26} strokeWidth={1.8} />
        </div>

        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
            selected
              ? "border-[#087F5B] bg-[#087F5B] text-white"
              : "border-[#C6DCCF]"
          }`}
        >
          {selected && <CheckCircle2 size={15} />}
        </div>
      </div>

      <h3 className="mt-7 text-lg font-black leading-snug tracking-tight">
        {need.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#657A73]">
        {need.short}
      </p>

      <div className="mt-auto flex items-center gap-2 pt-7 text-xs font-extrabold text-[#087F5B]">
        {selected ? "Selected" : "Choose this"}
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </button>
  );
}

/* =========================================
   MAIN CONTACT PAGE
========================================= */

export default function Contact() {
  const location = useLocation();
  const formRef = useRef(null);

  // Receive information from Find Your Solution
  // or from an individual service page.
  const selectedService = location.state?.service || "";
  const suggestedMessage = location.state?.message || "";

  const [form, setForm] = useState(() => ({
    ...initialForm,
    service: selectedService,
    message: suggestedMessage,
  }));

  const [selectedNeed, setSelectedNeed] = useState(() => {
    return getNeedFromService(selectedService)?.id || null;
  });

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const activeNeed = needs.find(
    (need) => need.id === selectedNeed
  );

  /* =====================================
     HANDLE INCOMING PAGE DATA
  ===================================== */

  useEffect(() => {
    if (!location.state) return;

    const incomingService = location.state.service || "";
    const incomingMessage = location.state.message || "";

    setForm((previous) => ({
      ...previous,
      service: incomingService,
      message: incomingMessage || previous.message,
    }));

    const matchedNeed = getNeedFromService(
      incomingService
    );

    setSelectedNeed(matchedNeed?.id || null);

    setSubmitted(false);
    setSubmitError("");
  }, [location.key, location.state]);

  /* =====================================
     FORM FIELD UPDATES
  ===================================== */

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSubmitted(false);
    setSubmitError("");
  };

  /* =====================================
     CHOOSE A BUSINESS NEED
  ===================================== */

  const selectNeed = (need) => {
    setSelectedNeed(need.id);

    const matchedService = services.find(
      (service) => service.slug === need.serviceSlug
    );

    setForm((previous) => ({
      ...previous,
      service: matchedService
        ? matchedService.title
        : "Not Sure Yet",
    }));

    setSubmitted(false);
    setSubmitError("");
  };

  /* =====================================
     SCROLL TO ENQUIRY FORM
  ===================================== */

  const goToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =====================================
     SUGGEST MESSAGE BASED ON NEED
  ===================================== */

  const useMessageSuggestion = () => {
    if (!activeNeed) return;

    updateField("message", activeNeed.prompt);
    goToForm();
  };

  /* =====================================
     SUBMIT ENQUIRY
  ===================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setSubmitted(false);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error(
          "The enquiry service is currently unavailable. Please try again later."
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "We couldn't send your enquiry. Please try again."
        );
      }

      setSubmitted(true);
      setForm({ ...initialForm });
      setSelectedNeed(null);
    } catch (error) {
      setSubmitError(
        error.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5FAF7] text-[#172B29]">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="relative border-b border-[#DDEAE2] px-6 pb-20 pt-16 sm:pb-24 sm:pt-24">
        <div className="pointer-events-none absolute -right-36 -top-36 h-[450px] w-[450px] rounded-full bg-[#DDF2E6] opacity-75 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* HERO TEXT */}

          <div>
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-[#DDEAE2] bg-[#F5FAF7] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#087F5B] ${raised}`}
            >
              <Sparkles size={15} />
              Let's Talk About Your Idea
            </div>

            <h1 className="mt-9 text-[clamp(3rem,5.5vw,5.5rem)] font-black leading-[1.08] tracking-[-0.065em]">
              Tell us what
              <span className="block text-[#087F5B]">
                you need.
              </span>
              We'll help you
              <span className="block text-[#087F5B]">
                move forward.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#627B71]">
              Need a website, business email, branding,
              IT support or a smarter way to work?
              You're in the right place.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#657A73]">
              You don't need to know which technology
              or service to choose. Start by telling
              us what you want to achieve.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#find-your-solution"
                className="inline-flex items-center gap-3 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#066A4C]"
              >
                Choose What You Need
                <ArrowRight size={18} />
              </a>

              <Link
                to="/find-your-solution"
                className={`inline-flex items-center gap-2 rounded-full border border-[#DDEAE2] bg-[#F5FAF7] px-7 py-4 text-sm font-bold ${raised}`}
              >
                Try Solution Finder
                <Sparkles size={17} />
              </Link>
            </div>
          </div>

          {/* HOW IT WORKS */}

          <div
            className={`rounded-[32px] border border-white bg-[#F5FAF7] p-6 sm:p-8 ${raised}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-[0.17em] text-[#087F5B]">
                Your Journey Starts Here
              </span>

              <Lightbulb
                size={23}
                className="text-[#087F5B]"
              />
            </div>

            <div className="mt-7 space-y-3">
              {[
                {
                  icon: Compass,
                  title: "Choose your goal",
                  text: "Tell us what you need help with.",
                },
                {
                  icon: ClipboardList,
                  title: "Share a few details",
                  text: "Explain your idea in your own words.",
                },
                {
                  icon: MessagesSquare,
                  title: "Start a conversation",
                  text: "We'll review your enquiry and discuss options.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 rounded-[22px] bg-[#F5FAF7] p-5 ${
                      index === 0 ? inset : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                      <Icon size={23} />
                    </div>

                    <div>
                      <p className="text-sm font-extrabold">
                        {item.title}
                      </p>

                      <p className="mt-2 text-xs leading-6 text-[#657A73]">
                        {item.text}
                      </p>
                    </div>

                    <span className="ml-auto text-xs font-black text-[#A8CDB8]">
                      0{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl bg-[#E8F5ED] px-5 py-4">
              <p className="text-xs font-semibold leading-6 text-[#527568]">
                <strong className="text-[#087F5B]">
                  Not sure what you need?
                </strong>{" "}
                That's fine. We can help explore
                suitable options with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          BUSINESS NEED SELECTOR
      ===================================== */}

      <section
        id="find-your-solution"
        className="scroll-mt-24 px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Step 01 — Choose Your Goal
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
              What do you need
              <span className="block text-[#087F5B]">
                help with?
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#657A73]">
              Choose the option that sounds most like
              your situation. We'll connect your goal
              with the right Vilartech service.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {needs.map((need) => (
              <NeedCard
                key={need.id}
                need={need}
                selected={selectedNeed === need.id}
                onSelect={() => selectNeed(need)}
              />
            ))}
          </div>

          {/* SELECTED NEED */}

          {activeNeed && (
            <div
              className={`mt-9 rounded-[30px] border border-[#B7DFC7] bg-[#E8F5ED] p-7 sm:p-9 ${raised}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#087F5B]">
                    <CheckCircle2 size={17} />
                    Your Selection
                  </div>

                  <h3 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
                    {activeNeed.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#527568]">
                    {activeNeed.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={goToForm}
                  className="inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-6 py-4 text-sm font-bold text-white hover:bg-[#066A4C]"
                >
                  Continue to Enquiry
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {activeNeed.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#527568]"
                  >
                    {example}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#C8E5D2] pt-6">
                <p className="text-sm text-[#527568]">
                  Need help explaining your project?
                </p>

                <button
                  type="button"
                  onClick={useMessageSuggestion}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-[#087F5B] hover:underline"
                >
                  Use a Suggested Message
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =====================================
          CONTACT AND ENQUIRY FORM
      ===================================== */}

      <section
        ref={formRef}
        id="project-enquiry"
        className="scroll-mt-24 border-t border-[#DDEAE2] bg-white px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Step 02 — Tell Us About Your Project
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] sm:text-5xl">
              Let's start
              <span className="text-[#087F5B]">
                {" "}a conversation.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#657A73]">
              Share a few details about your idea,
              challenge or business requirements.
              You can keep things simple.
            </p>
          </div>

          <div className="grid items-start gap-9 lg:grid-cols-[0.8fr_1.2fr]">

            {/* CONTACT DETAILS */}

            <div className="space-y-6">
              <div className="rounded-[30px] bg-[#172B29] p-8 text-white sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#9ED9B8]">
                  <MessageCircle size={27} />
                </div>

                <h3 className="mt-9 text-3xl font-black tracking-tight">
                  We're here to listen.
                </h3>

                <p className="mt-5 text-sm leading-8 text-white/75">
                  Whether you have a complete project
                  plan or just an idea, we'd love
                  to understand what you're trying
                  to achieve.
                </p>

                <div className="mt-9 space-y-7 border-t border-white/15 pt-8">

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-white/10 p-3 text-[#9ED9B8]">
                      <Mail size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                        Email
                      </p>

                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="mt-2 block break-all text-sm font-semibold hover:text-[#9ED9B8]"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-white/10 p-3 text-[#9ED9B8]">
                      <MapPin size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                        Location
                      </p>

                      <p className="mt-2 text-sm font-semibold">
                        Adelaide, South Australia
                      </p>

                      <p className="mt-1 text-xs leading-6 text-white/55">
                        Working with businesses digitally
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEXT STEPS */}

              <div
                className={`rounded-[30px] border border-[#DDEAE2] bg-[#F5FAF7] p-8 ${raised}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                  <Clock3 size={24} />
                </div>

                <h3 className="mt-7 text-xl font-black">
                  What happens after you enquire?
                </h3>

                <div className="mt-7 space-y-6">
                  {[
                    {
                      title: "We receive your enquiry",
                      text: "Your message is sent to our business inbox.",
                    },
                    {
                      title: "We review your needs",
                      text: "We look at your goals and the details you've shared.",
                    },
                    {
                      title: "We discuss next steps",
                      text: "We'll get in touch to explore suitable options.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E8F5ED] text-xs font-black text-[#087F5B]">
                        0{index + 1}
                      </div>

                      <div>
                        <p className="text-sm font-extrabold">
                          {item.title}
                        </p>

                        <p className="mt-2 text-xs leading-6 text-[#657A73]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ENQUIRY FORM */}

            <div className="rounded-[32px] border border-[#DDEAE2] bg-[#F5FAF7] p-6 shadow-[0_15px_45px_rgba(23,43,41,0.04)] sm:p-10">

              <div className="mb-9">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#087F5B]">
                  <ClipboardList size={17} />
                  Project Enquiry
                </div>

                <h3 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                  Tell us a little about yourself.
                </h3>

                <p className="mt-4 text-sm leading-8 text-[#657A73]">
                  Only your name, email and message
                  are required. Everything else helps
                  us understand your project.
                </p>

                {/* SOLUTION FINDER MESSAGE */}

                {suggestedMessage && !submitted && (
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#B7DFC7] bg-[#E8F5ED] p-4">
                    <Sparkles
                      size={20}
                      className="mt-0.5 shrink-0 text-[#087F5B]"
                    />

                    <div>
                      <p className="text-sm font-extrabold text-[#087F5B]">
                        Your Solution Finder results are ready
                      </p>

                      <p className="mt-2 text-xs leading-6 text-[#527568]">
                        We've added your selected service
                        and suggested message below.
                        You can edit anything before sending.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* HONEYPOT */}

                <div
                  className="absolute -left-[9999px] h-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="contact-website">
                    Website
                  </label>

                  <input
                    id="contact-website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(event) =>
                      updateField(
                        "website",
                        event.target.value
                      )
                    }
                  />
                </div>

                {/* NAME AND EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-bold"
                    >
                      Your Name *
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(event) =>
                        updateField(
                          "name",
                          event.target.value
                        )
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-bold"
                    >
                      Email Address *
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(event) =>
                        updateField(
                          "email",
                          event.target.value
                        )
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* COMPANY */}

                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-2 block text-sm font-bold"
                  >
                    Business Name
                    <span className="ml-2 font-normal text-[#8AA096]">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="contact-company"
                    type="text"
                    autoComplete="organization"
                    maxLength={150}
                    placeholder="Your business or organisation"
                    value={form.company}
                    onChange={(event) =>
                      updateField(
                        "company",
                        event.target.value
                      )
                    }
                    className={inputClass}
                  />
                </div>

                {/* SERVICE */}

                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-sm font-bold"
                  >
                    What can we help you with?
                  </label>

                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(event) => {
                      updateField(
                        "service",
                        event.target.value
                      );

                      const matched = getNeedFromService(
                        event.target.value
                      );

                      setSelectedNeed(
                        matched?.id || null
                      );
                    }}
                    className={inputClass}
                  >
                    <option value="">
                      Select a service (optional)
                    </option>

                    {services.map((service) => (
                      <option
                        key={service.slug}
                        value={service.title}
                      >
                        {service.title}
                      </option>
                    ))}

                    <option value="Not Sure Yet">
                      Not sure yet — let's discuss
                    </option>
                  </select>

                  <p className="mt-2 text-xs leading-6 text-[#8AA096]">
                    If you used our Solution Finder
                    or selected a goal above, this
                    may already be filled in.
                  </p>
                </div>

                {/* BUDGET */}

                <div>
                  <label
                    htmlFor="contact-budget"
                    className="mb-2 block text-sm font-bold"
                  >
                    Estimated Budget
                    <span className="ml-2 font-normal text-[#8AA096]">
                      (Optional)
                    </span>
                  </label>

                  <select
                    id="contact-budget"
                    value={form.budget}
                    onChange={(event) =>
                      updateField(
                        "budget",
                        event.target.value
                      )
                    }
                    className={inputClass}
                  >
                    <option value="">
                      Select a budget
                    </option>

                    <option value="Under AUD 1,000">
                      Under AUD $1,000
                    </option>

                    <option value="AUD 1,000 - 5,000">
                      AUD $1,000 – $5,000
                    </option>

                    <option value="AUD 5,000 - 10,000">
                      AUD $5,000 – $10,000
                    </option>

                    <option value="AUD 10,000+">
                      AUD $10,000+
                    </option>

                    <option value="To Be Discussed">
                      Not sure — let's discuss
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-bold"
                  >
                    Tell Us What You Need *
                  </label>

                  <textarea
                    id="contact-message"
                    rows={7}
                    required
                    maxLength={5000}
                    placeholder="For example: I'm starting a small business and need a website, business email and help getting everything set up."
                    value={form.message}
                    onChange={(event) =>
                      updateField(
                        "message",
                        event.target.value
                      )
                    }
                    className={`${inputClass} resize-y`}
                  />

                  <div className="mt-3 flex items-start gap-2">
                    <Lightbulb
                      size={16}
                      className="mt-1 shrink-0 text-[#087F5B]"
                    />

                    <p className="text-xs leading-6 text-[#657A73]">
                      Helpful tip: Tell us what you
                      want to achieve, what you
                      already have and any challenges
                      you're facing.
                    </p>
                  </div>
                </div>

                {/* SUBMIT */}

                <div className="border-t border-[#DDEAE2] pt-7">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#087F5B] px-8 py-5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#066A4C] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {sending ? (
                      <>
                        Sending Your Enquiry
                        <Loader2
                          size={18}
                          className="animate-spin"
                        />
                      </>
                    ) : (
                      <>
                        Send My Enquiry
                        <Send size={18} />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-xs leading-6 text-[#657A73]">
                    We'll use the information you
                    provide to respond to your enquiry.
                  </p>

                  {/* SUCCESS */}

                  {submitted && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="mt-6 flex items-start gap-3 rounded-2xl border border-[#B9DFC9] bg-[#E8F5ED] p-5"
                    >
                      <CheckCircle2
                        size={22}
                        className="mt-0.5 shrink-0 text-[#087F5B]"
                      />

                      <div>
                        <p className="text-sm font-extrabold text-[#087F5B]">
                          Enquiry submitted successfully!
                        </p>

                        <p className="mt-2 text-sm leading-7 text-[#365D49]">
                          Thank you for contacting
                          Vilartech. Your enquiry
                          has been received and we'll
                          review the details.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ERROR */}

                  {submitError && (
                    <div
                      role="alert"
                      className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5"
                    >
                      <AlertCircle
                        size={22}
                        className="mt-0.5 shrink-0 text-red-600"
                      />

                      <div>
                        <p className="text-sm font-extrabold text-red-700">
                          Unable to send your enquiry
                        </p>

                        <p className="mt-2 text-sm leading-7 text-red-700">
                          {submitError}
                        </p>

                        <p className="mt-3 text-sm text-red-700">
                          You can also email us at{" "}
                          <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="font-bold underline"
                          >
                            {CONTACT_EMAIL}
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[34px] bg-[#E8F5ED] p-9 sm:p-14 lg:flex-row lg:items-center">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Still Exploring?
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Discover what's possible
              <span className="block text-[#087F5B]">
                for your business.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[#657A73]">
              Explore our services or try our
              interactive Solution Finder to
              discover what might suit your needs.
            </p>
          </div>

          <Link
            to="/find-your-solution"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#066A4C]"
          >
            Find Your Solution
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
