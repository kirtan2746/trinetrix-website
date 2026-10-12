
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Globe2,
  HelpCircle,
  Lightbulb,
  MonitorSmartphone,
  Network,
  Palette,
  BarChart3,
  Workflow,
  RotateCcw,
  Sparkles,
  Send,
} from "lucide-react";

import { services } from "../data/servicesData";

const raised =
  "shadow-[8px_8px_22px_#dce9e2,-8px_-8px_22px_#ffffff]";

const servicePaths = [
  {
    id: "website",
    title: "Website Design & Development",
    friendly: "I need a website",
    description: "Build, redesign or improve your business website.",
    icon: MonitorSmartphone,
    slug: "website-design-development",
    questions: [
      {
        title: "What kind of website do you need?",
        help: "Choose the option that best describes your project.",
        options: [
          "New business website",
          "Redesign an existing website",
          "Online store / e-commerce",
          "Portfolio or personal website",
          "Landing page",
          "Not sure yet",
        ],
      },
      {
        title: "What features would you like?",
        help: "You can choose more than one.",
        multiple: true,
        options: [
          "Contact or enquiry form",
          "Online booking",
          "Online payments",
          "Product catalogue",
          "Blog or news",
          "Customer login",
          "Mobile-friendly design",
          "Search engine optimisation",
          "Help me decide",
        ],
      },
      {
        title: "What is your current website situation?",
        help: "This helps us understand what is already available.",
        options: [
          "I don't have a website",
          "I have a website that needs improvement",
          "I have a domain but no website",
          "I have hosting and a domain",
          "I'm not sure",
        ],
      },
      {
        title: "Do you have content and branding ready?",
        help: "Content includes text, photos, logos and business information.",
        options: [
          "Everything is ready",
          "I have some content",
          "I need help with content and design",
          "I'm starting from scratch",
          "Not sure yet",
        ],
      },
      {
        title: "When would you like your website ready?",
        options: [
          "As soon as possible",
          "Within 2–4 weeks",
          "Within 1–3 months",
          "Flexible timeframe",
          "Just exploring",
        ],
      },
    ],
  },
  {
    id: "online",
    title: "Business Online Setup & Microsoft 365",
    friendly: "I'm setting up my business",
    description: "Professional email, domains and essential business tools.",
    icon: Globe2,
    slug: "business-online-setup-microsoft-365",
    questions: [
      {
        title: "What would you like help setting up?",
        help: "Select all the essentials you need.",
        multiple: true,
        options: [
          "Business domain name",
          "Professional business email",
          "Microsoft 365",
          "Cloud file storage",
          "Microsoft Teams",
          "Website hosting",
          "User accounts and permissions",
          "Complete business setup",
          "Not sure yet",
        ],
      },
      {
        title: "What stage is your business at?",
        options: [
          "Planning a new business",
          "Recently launched",
          "Already operating",
          "Expanding the business",
          "Moving from another provider",
        ],
      },
      {
        title: "How many people need access?",
        options: [
          "Just me",
          "2–5 people",
          "6–20 people",
          "21–50 people",
          "More than 50",
          "Not sure",
        ],
      },
      {
        title: "What tools are you using currently?",
        options: [
          "Personal Gmail or Outlook",
          "Google Workspace",
          "Microsoft 365",
          "Another email or cloud provider",
          "No tools set up yet",
          "Not sure",
        ],
      },
      {
        title: "What matters most for your setup?",
        options: [
          "Getting started quickly",
          "Professional business identity",
          "Secure accounts and data",
          "Team collaboration",
          "Moving existing emails and files",
          "Guidance on everything",
        ],
      },
    ],
  },
  {
    id: "it",
    title: "Business IT Setup & Support",
    friendly: "I need IT help",
    description: "Computers, office networks, devices and technical support.",
    icon: Network,
    slug: "business-it-setup-support",
    questions: [
      {
        title: "What IT support do you need?",
        multiple: true,
        options: [
          "New computer setup",
          "Office Wi-Fi or networking",
          "Printer or device setup",
          "Software installation",
          "Email or account issues",
          "IT troubleshooting",
          "New office IT setup",
          "General ongoing support",
        ],
      },
      {
        title: "How many people or devices are involved?",
        options: [
          "1–2",
          "3–10",
          "11–25",
          "26–50",
          "More than 50",
          "Not sure",
        ],
      },
      {
        title: "What best describes your situation?",
        options: [
          "Setting up a new workplace",
          "Existing system isn't working",
          "Upgrading equipment",
          "Expanding our team",
          "Looking for ongoing IT support",
        ],
      },
      {
        title: "Where will support be needed?",
        options: [
          "Adelaide business location",
          "Remote / online",
          "Multiple business locations",
          "Home office",
          "Not sure yet",
        ],
      },
      {
        title: "How urgent is your requirement?",
        options: [
          "Urgent issue",
          "Within the next week",
          "Within a month",
          "Planned future project",
          "Just exploring",
        ],
      },
    ],
  },
  {
    id: "branding",
    title: "Branding, Graphic Design & Marketing",
    friendly: "I want to improve my brand",
    description: "Create a professional identity and reach your customers.",
    icon: Palette,
    slug: "branding-graphic-design-digital-marketing",
    questions: [
      {
        title: "What creative services do you need?",
        multiple: true,
        options: [
          "Logo design",
          "Complete brand identity",
          "Business cards",
          "Social media graphics",
          "Marketing materials",
          "Website graphics",
          "Digital marketing support",
          "Brand refresh",
        ],
      },
      {
        title: "What stage is your brand at?",
        options: [
          "Brand new business",
          "I have a logo but need more",
          "Existing brand needs a refresh",
          "Established brand with new requirements",
          "Not sure",
        ],
      },
      {
        title: "What style best fits your business?",
        options: [
          "Modern and minimal",
          "Professional and corporate",
          "Creative and colourful",
          "Premium and elegant",
          "Friendly and approachable",
          "Help me discover a style",
        ],
      },
      {
        title: "Who are you trying to reach?",
        options: [
          "Local customers",
          "Small businesses",
          "Corporate clients",
          "Online shoppers",
          "A broad audience",
          "Still defining my audience",
        ],
      },
      {
        title: "What is your main branding goal?",
        options: [
          "Launch a new brand",
          "Look more professional",
          "Improve brand consistency",
          "Attract more customers",
          "Promote a product or service",
          "Explore creative ideas",
        ],
      },
    ],
  },
  {
    id: "data",
    title: "Data Analytics & Business Intelligence",
    friendly: "I need better reporting",
    description: "Understand business data through reports and dashboards.",
    icon: BarChart3,
    slug: "data-analytics-business-intelligence",
    questions: [
      {
        title: "What would you like to achieve with your data?",
        multiple: true,
        options: [
          "Power BI dashboard",
          "Automated business reports",
          "KPI tracking",
          "Financial reporting",
          "Sales or customer insights",
          "Data cleaning",
          "Combine multiple data sources",
          "Improve existing dashboards",
        ],
      },
      {
        title: "Where is your data stored?",
        multiple: true,
        options: [
          "Excel spreadsheets",
          "Microsoft SharePoint",
          "SQL database",
          "Business management software",
          "Power BI",
          "Cloud applications",
          "Multiple different systems",
          "Not sure",
        ],
      },
      {
        title: "How do you currently prepare reports?",
        options: [
          "Manually in Excel",
          "Existing Power BI dashboards",
          "Reports from business software",
          "No formal reporting process",
          "Different teams use different methods",
        ],
      },
      {
        title: "Who will use the reports?",
        options: [
          "Business owner",
          "Managers and team leaders",
          "Operational staff",
          "Executives and stakeholders",
          "Multiple groups",
          "Not sure",
        ],
      },
      {
        title: "What is your biggest reporting challenge?",
        options: [
          "Too much manual work",
          "Information is spread across systems",
          "Reports are difficult to understand",
          "Data quality issues",
          "Reports are not updated regularly",
          "Need better business visibility",
        ],
      },
    ],
  },
  {
    id: "automation",
    title: "Business Automation & Digital Workplaces",
    friendly: "I want to save time",
    description: "Simplify repetitive tasks and connect business processes.",
    icon: Workflow,
    slug: "business-automation-digital-workplaces",
    questions: [
      {
        title: "Which business processes need improvement?",
        multiple: true,
        options: [
          "Approval workflows",
          "Forms and data collection",
          "Email notifications",
          "Document management",
          "Employee onboarding",
          "Customer requests",
          "Task tracking",
          "Reporting processes",
          "Not sure yet",
        ],
      },
      {
        title: "What tools does your business currently use?",
        multiple: true,
        options: [
          "Microsoft 365",
          "SharePoint",
          "Microsoft Teams",
          "Power Apps",
          "Power Automate",
          "Excel",
          "Google Workspace",
          "Other business software",
          "Not sure",
        ],
      },
      {
        title: "What is the biggest problem with your current process?",
        options: [
          "Too much manual data entry",
          "Approvals take too long",
          "Information gets lost",
          "Too many spreadsheets",
          "Poor visibility of progress",
          "Systems don't work together",
        ],
      },
      {
        title: "How many people use this process?",
        options: [
          "Just me",
          "2–5 people",
          "6–20 people",
          "21–50 people",
          "More than 50",
          "Not sure",
        ],
      },
      {
        title: "What outcome matters most?",
        options: [
          "Save staff time",
          "Reduce errors",
          "Improve collaboration",
          "Track work more easily",
          "Create a custom business app",
          "Make processes more consistent",
        ],
      },
    ],
  },
  {
    id: "unsure",
    title: "General Business Discovery",
    friendly: "I'm not sure what I need",
    description: "Tell us your goals and we'll explore possible solutions.",
    icon: HelpCircle,
    slug: null,
    questions: [
      {
        title: "What are you trying to achieve?",
        multiple: true,
        options: [
          "Start a business",
          "Build an online presence",
          "Improve existing technology",
          "Attract more customers",
          "Save time",
          "Understand business data",
          "Explore a new idea",
        ],
      },
      {
        title: "What stage are you at?",
        options: [
          "Just have an idea",
          "Planning a new business",
          "Already running a business",
          "Growing or expanding",
          "Looking to improve something",
        ],
      },
      {
        title: "What is your biggest challenge?",
        options: [
          "Don't know where to begin",
          "Limited technical knowledge",
          "Existing systems are inefficient",
          "Need a professional digital presence",
          "Need advice on available options",
          "Something else",
        ],
      },
      {
        title: "What kind of support would you prefer?",
        options: [
          "Advice and recommendations",
          "Someone to build a solution",
          "Help improving an existing solution",
          "Ongoing technical support",
          "Not sure yet",
        ],
      },
      {
        title: "When would you like to get started?",
        options: [
          "As soon as possible",
          "Within a few weeks",
          "Within 1–3 months",
          "Flexible",
          "Just researching",
        ],
      },
    ],
  },
];

function OptionButton({ selected, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`flex min-h-16 items-center justify-between gap-4 rounded-[20px] border px-5 py-4 text-left text-sm font-semibold transition-all hover:-translate-y-0.5 ${
        selected
          ? "border-[#087F5B] bg-[#E8F5ED] text-[#087F5B]"
          : "border-[#DDEAE2] bg-white text-[#40574D] hover:border-[#9CCDB0]"
      }`}
    >
      <span>{children}</span>
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
          selected
            ? "border-[#087F5B] bg-[#087F5B] text-white"
            : "border-[#C9DCD0]"
        }`}
      >
        {selected && <Check size={15} />}
      </span>
    </button>
  );
}

export default function FindYourSolution() {
  const [selectedPath, setSelectedPath] = useState(null);
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState({});
  const [extraDetails, setExtraDetails] = useState("");

  const path = servicePaths.find(
    (item) => item.id === selectedPath
  );

  const isReview = step === 5;
  const question = path?.questions[step];

  const currentAnswer = answers[step] || [];
  const canContinue = currentAnswer.length > 0;

  const recommendedService = useMemo(() => {
    return services.find(
      (service) => service.slug === path?.slug
    );
  }, [path]);

  const chooseService = (item) => {
    setSelectedPath(item.id);
    setStep(0);
    setAnswers({});
    setExtraDetails("");
  };

  const chooseAnswer = (option) => {
    if (!question) return;

    setAnswers((previous) => {
      const current = previous[step] || [];

      if (question.multiple) {
        return {
          ...previous,
          [step]: current.includes(option)
            ? current.filter((value) => value !== option)
            : [...current, option],
        };
      }

      return {
        ...previous,
        [step]: [option],
      };
    });
  };

  const reset = () => {
    setSelectedPath(null);
    setStep(-1);
    setAnswers({});
    setExtraDetails("");
  };

  const buildEnquiryMessage = () => {
    const lines = [
      "VILARTECH — PROJECT DISCOVERY RESPONSES",
      "",
      `Selected service: ${path?.title || "General enquiry"}`,
      "",
    ];

    path?.questions.forEach((item, index) => {
      lines.push(`QUESTION ${index + 1}: ${item.title}`);
      lines.push(
        `ANSWER: ${(answers[index] || []).join(", ") || "Not answered"}`
      );
      lines.push("");
    });

    if (extraDetails.trim()) {
      lines.push("ADDITIONAL PROJECT DETAILS:");
      lines.push(extraDetails.trim());
      lines.push("");
    }

    lines.push(
      "I would like Vilartech to review my requirements and discuss the next steps."
    );

    return lines.join("\n");
  };

  const contactState = isReview
    ? {
        service: recommendedService?.title || "Not Sure Yet",
        message: buildEnquiryMessage(),
      }
    : null;

  const progress = step < 0 ? 0 : ((step + 1) / 6) * 100;

  return (
    <main className="min-h-screen bg-[#F5FAF7] text-[#172B29]">
      {/* HERO */}

      <section className="border-b border-[#DDEAE2] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DDEAE2] bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#087F5B]">
            <Sparkles size={16} />
            Vilartech Project Discovery
          </div>

          <h1 className="mt-8 max-w-4xl text-[clamp(3rem,6vw,5.5rem)] font-black leading-[1.07] tracking-[-0.06em]">
            Your business goal.
            <span className="block text-[#087F5B]">
              Our starting point.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-9 text-[#657A73]">
            Not sure how to explain your project? We'll
            guide you through five simple questions
            tailored to the service you need.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full bg-[#E8F5ED] px-4 py-2 text-xs font-bold text-[#087F5B]">
              <Clock3 size={14} className="mr-2 inline" />
              Around 2–3 minutes
            </span>

            <span className="rounded-full bg-[#E8F5ED] px-4 py-2 text-xs font-bold text-[#087F5B]">
              <CheckCircle2 size={14} className="mr-2 inline" />
              Five tailored questions
            </span>

            <span className="rounded-full bg-[#E8F5ED] px-4 py-2 text-xs font-bold text-[#087F5B]">
              No technical knowledge required
            </span>
          </div>
        </div>
      </section>

      {/* WIZARD */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087F5B]">
                Interactive Solution Finder
              </p>

              <p className="mt-2 text-sm text-[#657A73]">
                {step === -1
                  ? "Choose your area of interest"
                  : isReview
                  ? "Review your project requirements"
                  : `Question ${step + 1} of 5`}
              </p>
            </div>

            {step !== -1 && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#657A73] hover:text-[#087F5B]"
              >
                <RotateCcw size={16} />
                Start Over
              </button>
            )}
          </div>

          {step >= 0 && (
            <div
              className="mb-9 h-2 overflow-hidden rounded-full bg-[#DFEDE4]"
              role="progressbar"
              aria-label="Discovery progress"
              aria-valuenow={step + 1}
              aria-valuemin={0}
              aria-valuemax={6}
            >
              <div
                className="h-full rounded-full bg-[#087F5B] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          <div
            className={`rounded-[34px] border border-white bg-[#F5FAF7] p-6 sm:p-10 lg:p-12 ${raised}`}
          >

            {/* SERVICE SELECTION */}

            {step === -1 && (
              <>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                  <Lightbulb size={27} />
                </div>

                <h2 className="mt-7 text-3xl font-black tracking-tight sm:text-4xl">
                  What do you need help with?
                </h2>

                <p className="mt-4 text-sm leading-8 text-[#657A73]">
                  Choose the service that sounds closest
                  to your needs. We'll ask relevant
                  questions to understand your project.
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {servicePaths.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => chooseService(item)}
                        className="group flex items-start gap-4 rounded-[24px] border border-[#DDEAE2] bg-white p-6 text-left transition-all hover:-translate-y-1 hover:border-[#9CCDB0] hover:bg-[#E8F5ED]"
                      >
                        <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#E8F5ED] p-3 text-[#087F5B]">
                          <Icon size={24} />
                        </span>

                        <span className="flex-1">
                          <span className="block text-base font-black">
                            {item.friendly}
                          </span>

                          <span className="mt-2 block text-xs leading-6 text-[#657A73]">
                            {item.description}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-[#087F5B]"
                        />
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {/* SERVICE-SPECIFIC QUESTION */}

            {step >= 0 && step < 5 && question && (
              <>
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#E8F5ED] px-4 py-2 text-xs font-extrabold text-[#087F5B]">
                    {path.friendly}
                  </span>

                  <span className="text-xs font-bold text-[#8AA096]">
                    0{step + 1} / 05
                  </span>
                </div>

                <h2 className="mt-9 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
                  {question.title}
                </h2>

                <p className="mt-5 text-sm leading-8 text-[#657A73]">
                  {question.help ||
                    "Choose the option that best describes your needs."}
                </p>

                {question.multiple && (
                  <p className="mt-2 text-xs font-bold text-[#087F5B]">
                    You can select multiple answers.
                  </p>
                )}

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {question.options.map((option) => (
                    <OptionButton
                      key={option}
                      selected={currentAnswer.includes(option)}
                      onClick={() => chooseAnswer(option)}
                    >
                      {option}
                    </OptionButton>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#DDEAE2] pt-7">
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-bold text-[#657A73] hover:bg-[#E8F5ED]"
                  >
                    <ArrowLeft size={18} />
                    {step === 0
                      ? "Change Service"
                      : "Previous"}
                  </button>

                  <button
                    type="button"
                    disabled={!canContinue}
                    onClick={() => setStep(step + 1)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white hover:bg-[#066A4C] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {step === 4
                      ? "Review My Answers"
                      : "Next Question"}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </>
            )}

            {/* REVIEW RESULTS */}

            {isReview && path && (
              <div aria-live="polite">
                <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#E8F5ED] text-[#087F5B]">
                  <ClipboardList size={32} />
                </div>

                <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
                  Your Project Summary
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Your requirements,
                  <span className="block text-[#087F5B]">
                    all in one place.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-8 text-[#657A73]">
                  Review your answers below. We'll
                  include these details when you
                  send your enquiry to Vilartech.
                </p>

                <div className="mt-9 rounded-[24px] bg-[#E8F5ED] p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#087F5B]">
                    Selected Service
                  </p>

                  <h3 className="mt-3 text-xl font-black">
                    {path.title}
                  </h3>

                  {recommendedService && (
                    <Link
                      to={`/services/${recommendedService.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#087F5B] hover:underline"
                    >
                      Learn more about this service
                      <ArrowUpRight size={17} />
                    </Link>
                  )}
                </div>

                <div className="mt-7 space-y-4">
                  {path.questions.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-[#DDEAE2] bg-white p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold text-[#087F5B]">
                            QUESTION 0{index + 1}
                          </p>

                          <h3 className="mt-3 text-sm font-extrabold">
                            {item.title}
                          </h3>
                        </div>

                        <button
                          type="button"
                          onClick={() => setStep(index)}
                          className="text-xs font-bold text-[#087F5B] hover:underline"
                        >
                          Edit
                        </button>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {(answers[index] || []).map((answer) => (
                          <span
                            key={answer}
                            className="rounded-full bg-[#E8F5ED] px-4 py-2 text-xs font-semibold text-[#365D49]"
                          >
                            {answer}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* OPTIONAL DETAILS */}

                <div className="mt-8">
                  <label
                    htmlFor="extra-details"
                    className="block text-base font-black"
                  >
                    Anything else you'd like us to know?
                  </label>

                  <p className="mt-3 text-sm leading-7 text-[#657A73]">
                    Optional — tell us about your
                    business, existing tools, website
                    address, goals or anything we
                    haven't covered.
                  </p>

                  <textarea
                    id="extra-details"
                    rows={5}
                    maxLength={2000}
                    value={extraDetails}
                    onChange={(event) =>
                      setExtraDetails(event.target.value)
                    }
                    placeholder="For example: We are a small Adelaide business looking to improve our online presence..."
                    className="mt-5 w-full resize-y rounded-2xl border border-[#DDEAE2] bg-white px-5 py-4 text-sm leading-7 outline-none focus:border-[#087F5B] focus:ring-4 focus:ring-[#087F5B]/10"
                  />
                </div>

                <div className="mt-9 rounded-[24px] bg-[#172B29] p-7 text-white sm:p-9">
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      size={28}
                      className="shrink-0 text-[#9ED9B8]"
                    />

                    <div>
                      <h3 className="text-xl font-black">
                        Ready to discuss your project?
                      </h3>

                      <p className="mt-4 text-sm leading-8 text-white/70">
                        Your five answers will be
                        transferred into our enquiry
                        form. You'll be able to review
                        the message and enter your
                        contact details before sending.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    state={contactState}
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#9ED9B8] px-7 py-4 text-sm font-bold text-[#172B29] hover:bg-white"
                  >
                    Continue to Enquiry
                    <Send size={18} />
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#657A73] hover:text-[#087F5B]"
                >
                  <ArrowLeft size={18} />
                  Back to Questions
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}

      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 rounded-[32px] bg-[#E8F5ED] p-9 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087F5B]">
              Prefer to Talk Directly?
            </p>

            <h2 className="mt-4 text-2xl font-black sm:text-3xl">
              Your idea is enough to get started.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#657A73]">
              You can always skip the questions and
              explain your requirements in your own words.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white hover:bg-[#066A4C]"
          >
            Contact Vilartech
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
