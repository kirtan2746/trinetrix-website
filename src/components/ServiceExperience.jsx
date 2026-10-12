
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const content = {
  website: {
    intro:
      "A great website should look professional, explain your business clearly and make it easy for visitors to take the next step.",
    capabilities: [
      {
        title: "Business website design",
        summary: "A professional online home for your business.",
        detail:
          "We plan and design clear pages that explain who you are, what you offer and how customers can reach you. Navigation, layout and messaging are built around your visitors, making it easier for them to understand your business and enquire about your services.",
      },
      {
        title: "Responsive website development",
        summary: "A consistent experience across phones and computers.",
        detail:
          "We build responsive layouts that adapt to different screen sizes, keeping content readable, buttons easy to use and important information easy to find. Your website will work comfortably across mobile phones, tablets and desktop computers.",
      },
      {
        title: "Online stores and customer enquiries",
        summary: "Help customers buy, book or get in touch.",
        detail:
          "We can create product listings, customer enquiry forms and focused landing pages, with suitable integrations based on your business needs. The aim is to make it straightforward for visitors to take action.",
      },
      {
        title: "Website redesign and modernisation",
        summary: "Refresh an outdated or confusing website.",
        detail:
          "We review your existing pages and improve the visual design, content organisation and customer journey while retaining what is already working. This can help your website better represent your current business.",
      },
      {
        title: "Performance and accessibility",
        summary: "Make your website more comfortable to use.",
        detail:
          "We pay attention to loading speed, readable text, clear navigation and accessibility practices so more visitors can use your website confidently.",
      },
      {
        title: "Ongoing website maintenance",
        summary: "Keep your website current as your business grows.",
        detail:
          "We can help with content changes, technical improvements, routine checks and updates after launch. This helps your website remain useful as your products, services and business requirements change.",
      },
    ],
    stages: [
      {
        title: "Plan the experience",
        subtitle: "Understand your audience",
        description:
          "We discuss your goals, customers, preferred style and the actions visitors should take. Together, we identify the pages, features and content your website needs.",
        deliverables: [
          "Website goals and requirements",
          "Page structure and navigation",
          "Content and design direction",
        ],
      },
      {
        title: "Design and build",
        subtitle: "Create the website",
        description:
          "We develop layouts, build responsive pages and review functionality across devices. Your feedback helps us refine the design and user experience.",
        deliverables: [
          "Page designs and development",
          "Forms and essential features",
          "Device and usability testing",
        ],
      },
      {
        title: "Launch and evolve",
        subtitle: "Publish with confidence",
        description:
          "We complete final checks, support the launch and explain options for future updates and maintenance.",
        deliverables: [
          "Launch preparation",
          "Final quality checks",
          "Maintenance guidance",
        ],
      },
    ],
  },

  online: {
    intro:
      "Get the digital essentials working together, from your business domain and professional email to Microsoft 365 and your online presence.",
    capabilities: [
      {
        title: "Domain and DNS setup",
        summary: "Give your business its own online address.",
        detail:
          "We help select and connect a suitable domain, configure essential DNS records and link it to your website or email services. This creates the foundation for your professional online identity.",
      },
      {
        title: "Professional business email",
        summary: "Communicate using your own brand.",
        detail:
          "We set up professional email addresses, mailboxes and the essential settings needed for your team to send and receive messages. For example, you can communicate using hello@yourbusiness.com.au instead of a personal email address.",
      },
      {
        title: "Microsoft 365 configuration",
        summary: "Bring your workplace tools together.",
        detail:
          "We help configure suitable Microsoft 365 accounts, Outlook, Teams and OneDrive, including user access and basic administration. This gives employees practical tools for communication and collaboration.",
      },
      {
        title: "Google Business Profile",
        summary: "Help local customers discover you.",
        detail:
          "We assist with business details, service information and profile presentation so customers can find consistent information about your business through Google Search and Maps.",
      },
      {
        title: "Hosting and online launch",
        summary: "Make your website accessible to customers.",
        detail:
          "We connect hosting, domains and website deployment settings, then check that your online presence is accessible and working as expected.",
      },
      {
        title: "Employee onboarding",
        summary: "Help your team get started.",
        detail:
          "We guide employees through signing in, using their business email and understanding the essential tools they need each day.",
      },
    ],
    stages: [
      {
        title: "Choose the essentials",
        subtitle: "Plan your digital setup",
        description:
          "We review your domain, email, team size and business applications to recommend a practical digital setup.",
        deliverables: [
          "Digital setup checklist",
          "Domain and email plan",
          "Microsoft 365 requirements",
        ],
      },
      {
        title: "Connect your services",
        subtitle: "Configure the tools",
        description:
          "We configure accounts, domain records and the selected online services, checking how they work together.",
        deliverables: [
          "Domain and DNS configuration",
          "Email and cloud accounts",
          "Service connectivity checks",
        ],
      },
      {
        title: "Go live and onboard",
        subtitle: "Prepare your team",
        description:
          "We test access and help employees start using their new business tools with confidence.",
        deliverables: [
          "Account verification",
          "Employee onboarding",
          "Administration guidance",
        ],
      },
    ],
  },

  network: {
    intro:
      "Reliable technology helps people get on with their work. We help connect the devices, networks and office systems your business depends on.",
    capabilities: [
      {
        title: "Computers and laptops",
        summary: "Prepare devices for everyday work.",
        detail:
          "We assist with device configuration, operating system settings, user accounts and essential applications so employees can get started with the technology they need.",
      },
      {
        title: "Office Wi-Fi and networking",
        summary: "Keep your workplace connected.",
        detail:
          "We help configure routers, switches, wireless networks and appropriate access arrangements for your office environment. The focus is on reliable connectivity for everyday operations.",
      },
      {
        title: "Printers and peripherals",
        summary: "Connect the equipment your team uses.",
        detail:
          "We configure compatible printers, scanners and other office devices and help employees access shared equipment without unnecessary complications.",
      },
      {
        title: "Servers and shared storage",
        summary: "Organise common business resources.",
        detail:
          "We help assess and set up suitable shared file locations or server resources, including basic access and organisation, so employees can work with shared information.",
      },
      {
        title: "Workplace communication tools",
        summary: "Make everyday collaboration easier.",
        detail:
          "We assist with business communication tools, meeting equipment and the connections needed for teams to communicate and work together.",
      },
      {
        title: "IT troubleshooting and support",
        summary: "Resolve technical interruptions.",
        detail:
          "We investigate common software, device and connectivity issues and recommend practical steps to improve reliability and reduce recurring problems.",
      },
    ],
    stages: [
      {
        title: "Review your environment",
        subtitle: "Understand your workplace",
        description:
          "We look at the equipment, office layout and connectivity your team needs before recommending the appropriate setup.",
        deliverables: [
          "IT requirements review",
          "Equipment inventory",
          "Connectivity priorities",
        ],
      },
      {
        title: "Install and configure",
        subtitle: "Connect your workplace",
        description:
          "We set up selected devices, networking equipment and business applications, checking that they communicate correctly.",
        deliverables: [
          "Device configuration",
          "Wi-Fi and network setup",
          "Peripheral connections",
        ],
      },
      {
        title: "Test and support",
        subtitle: "Get ready for daily use",
        description:
          "We check the setup, assist employees and identify ongoing support needs.",
        deliverables: [
          "Connectivity testing",
          "User handover",
          "Support recommendations",
        ],
      },
    ],
  },

  branding: {
    intro:
      "A recognisable brand makes it easier for customers to remember you. We bring your identity, creative materials and online communication into one consistent style.",
    capabilities: [
      {
        title: "Logo and visual identity",
        summary: "Create a distinctive first impression.",
        detail:
          "We develop logo concepts, colour palettes, typography and visual elements that reflect your business personality and communicate the impression you want to create.",
      },
      {
        title: "Brand guidelines",
        summary: "Keep your identity consistent.",
        detail:
          "We document practical rules for using your logo, colours, fonts and graphics across different channels, helping your business maintain a recognisable appearance.",
      },
      {
        title: "Marketing and promotional graphics",
        summary: "Present your message professionally.",
        detail:
          "We design banners, brochures, business cards, presentations and promotional material for digital or print use, tailored to your business communication needs.",
      },
      {
        title: "Social media templates",
        summary: "Make content creation more consistent.",
        detail:
          "We create reusable layouts for posts, announcements and campaigns so your business can communicate with a recognisable style across social platforms.",
      },
      {
        title: "Digital campaign assets",
        summary: "Support promotions and business launches.",
        detail:
          "We prepare creative assets for campaigns, landing pages and business announcements, ensuring they align with your visual identity and message.",
      },
      {
        title: "SEO foundations",
        summary: "Make your online content easier to discover.",
        detail:
          "We review website headings, page descriptions and content structure to support clear messaging and search visibility.",
      },
    ],
    stages: [
      {
        title: "Discover your identity",
        subtitle: "Understand your audience",
        description:
          "We explore your business values, customers and the impression you want your brand to make.",
        deliverables: [
          "Brand discovery",
          "Creative references",
          "Visual direction",
        ],
      },
      {
        title: "Create and refine",
        subtitle: "Develop your design",
        description:
          "We prepare creative concepts, gather feedback and refine the chosen design direction.",
        deliverables: [
          "Logo and design concepts",
          "Colour and typography selection",
          "Creative revisions",
        ],
      },
      {
        title: "Prepare brand assets",
        subtitle: "Apply your identity",
        description:
          "We prepare approved files and guidance for consistent use across your website, documents and marketing channels.",
        deliverables: [
          "Final brand files",
          "Usage guidance",
          "Marketing templates",
        ],
      },
    ],
  },

  analytics: {
    intro:
      "Turn spreadsheets, databases and business records into understandable reports that help you see performance, identify trends and make informed decisions.",
    capabilities: [
      {
        title: "Power BI dashboards",
        summary: "See key information in one clear view.",
        detail:
          "We design interactive Power BI dashboards with useful charts, filters and summaries. For example, a sales dashboard can show revenue by month, product and location without searching through multiple spreadsheets.",
      },
      {
        title: "KPI and performance reporting",
        summary: "Measure progress towards your goals.",
        detail:
          "We help define practical performance indicators and display them in reports that managers and teams can review regularly. This makes it easier to understand what is improving and where attention is needed.",
      },
      {
        title: "Excel and spreadsheet analysis",
        summary: "Understand the information you already have.",
        detail:
          "We organise spreadsheet data, review calculations and create summaries that reveal useful patterns in everyday business information.",
      },
      {
        title: "Data cleaning and preparation",
        summary: "Improve the quality of your information.",
        detail:
          "We address inconsistent formats, duplicates and missing values where possible, preparing data for more reliable analysis and reporting.",
      },
      {
        title: "Data modelling and integration",
        summary: "Connect information from different sources.",
        detail:
          "We structure related datasets and help combine suitable spreadsheet, database and system information into a consistent reporting model.",
      },
      {
        title: "Automated reporting",
        summary: "Spend less time preparing the same reports.",
        detail:
          "We help streamline repeatable reporting activities, including suitable data refresh arrangements and scheduled report delivery where supported.",
      },
    ],
    stages: [
      {
        title: "Understand and prepare data",
        subtitle: "Start with reliable information",
        description:
          "We identify the business questions you want answered, review available data and prepare it for analysis.",
        deliverables: [
          "Reporting requirements",
          "Data quality review",
          "Prepared and structured datasets",
        ],
      },
      {
        title: "Build your dashboards",
        subtitle: "Make information easy to understand",
        description:
          "We create dashboards and KPI reports with meaningful visuals, clear labels and useful filtering options.",
        deliverables: [
          "Interactive Power BI dashboards",
          "KPI calculations",
          "Report testing and refinements",
        ],
      },
      {
        title: "Share and improve insights",
        subtitle: "Turn reporting into everyday value",
        description:
          "We help users understand their dashboards, review reporting needs and identify opportunities for improvement.",
        deliverables: [
          "Dashboard handover",
          "User guidance",
          "Reporting improvement recommendations",
        ],
      },
    ],
  },

  automation: {
    intro:
      "We help teams reduce repetitive tasks, organise information and create connected digital tools that support the way they work.",
    capabilities: [
      {
        title: "SharePoint intranets",
        summary: "Give employees a central place for information.",
        detail:
          "We build SharePoint sites where employees can access important documents, announcements, team resources and useful business links in one organised workplace.",
      },
      {
        title: "Power Automate workflows",
        summary: "Reduce repetitive manual activities.",
        detail:
          "We create workflows for tasks such as notifications, document approvals and request routing, helping information move between the right people without unnecessary manual follow-up.",
      },
      {
        title: "Power Apps applications",
        summary: "Create tools around how your business works.",
        detail:
          "We develop practical applications for collecting requests, reviewing records and managing internal activities that would otherwise rely on spreadsheets or emails.",
      },
      {
        title: "Digital forms and approvals",
        summary: "Make requests easier to submit and track.",
        detail:
          "We replace suitable paper or email-based processes with structured digital forms and clear approval stages, helping teams understand the progress of each request.",
      },
      {
        title: "Document management",
        summary: "Keep business information organised.",
        detail:
          "We structure SharePoint libraries, metadata and permissions so employees can find and manage files more easily.",
      },
      {
        title: "Microsoft 365 integration",
        summary: "Connect the tools your team already uses.",
        detail:
          "We help link suitable Microsoft Teams, SharePoint, Lists, Power Apps and Power Automate features into coherent business processes.",
      },
    ],
    stages: [
      {
        title: "Map your process",
        subtitle: "Find the friction",
        description:
          "We review the existing workflow and identify repeated steps, handovers and improvement opportunities.",
        deliverables: [
          "Process review",
          "Workflow requirements",
          "Improvement priorities",
        ],
      },
      {
        title: "Build and connect",
        subtitle: "Create your digital solution",
        description:
          "We develop forms, applications and automations, then test them against real business scenarios.",
        deliverables: [
          "Digital forms or applications",
          "Automated workflows",
          "Functional testing",
        ],
      },
      {
        title: "Roll out and refine",
        subtitle: "Help your team adopt it",
        description:
          "We guide users through the new process and gather feedback for future improvements.",
        deliverables: [
          "Solution rollout",
          "User guidance",
          "Refinement recommendations",
        ],
      },
    ],
  },
};

const serviceTypes = {
  "website-design-development": "website",
  "business-online-setup-microsoft-365": "online",
  "business-it-setup-support": "network",
  "branding-graphic-design-digital-marketing": "branding",
  "data-analytics-business-intelligence": "analytics",
  "business-automation-digital-workplaces": "automation",
};

const raised =
  "shadow-[8px_8px_22px_#dce9e2,-8px_-8px_22px_#ffffff]";

export default function ServiceExperience({ service }) {
  const type = serviceTypes[service.slug] || "website";
  const data = content[type];

  const [expanded, setExpanded] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    setExpanded(0);
    setStageIndex(0);
  }, [service.slug]);

  const stage = data.stages[stageIndex];

  return (
    <>
      {/* INTERACTIVE CAPABILITIES */}
      <section
        id="capabilities"
        className="scroll-mt-24 bg-[#F5FAF7] px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
            Explore the Possibilities
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
            What can we{" "}
            <span className="text-[#087F5B]">
              help you achieve?
            </span>
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#627B71]">
            {data.intro}
          </p>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.18fr_0.82fr]">
            {/* EXPANDABLE CAPABILITY CARDS */}
            <div className="space-y-3">
              {data.capabilities.map((item, index) => {
                const isOpen = expanded === index;

                return (
                  <article
                    key={item.title}
                    className={`overflow-hidden rounded-[24px] border bg-[#F5FAF7] transition-all duration-300 ${
                      isOpen
                        ? `border-[#9FD4B4] ${raised}`
                        : "border-[#DCEBE2] hover:border-[#B6DCC5]"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setExpanded(isOpen ? -1 : index)
                      }
                      className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                    >
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${
                          isOpen
                            ? "bg-[#087F5B] text-white"
                            : "bg-[#E5F4EB] text-[#087F5B]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-extrabold text-[#172B29] sm:text-lg">
                          {item.title}
                        </span>

                        <span className="mt-1 block text-sm leading-6 text-[#627B71]">
                          {item.summary}
                        </span>
                      </span>

                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-[#087F5B] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#DCEBE2] px-5 pb-6 pt-5 sm:px-6">
                        <p className="text-sm leading-8 text-[#526D62]">
                          {item.detail}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {/* BUSINESS BENEFITS */}
            <aside
              className={`rounded-[30px] border border-[#D1E9D9] bg-[#E8F5ED] p-7 lg:sticky lg:top-28 sm:p-9 ${raised}`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#087F5B]">
                <Sparkles size={26} />
              </div>

              <h3 className="mt-7 text-2xl font-black tracking-tight text-[#172B29]">
                Why this matters to your business
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#627B71]">
                Useful technology and thoughtful design
                should make your everyday work easier,
                not more complicated.
              </p>

              <div className="mt-7 space-y-5">
                {(service.businessValue || []).map(
                  (benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={21}
                        className="mt-0.5 shrink-0 text-[#087F5B]"
                      />
                      <span className="text-sm font-medium leading-7 text-[#28483C]">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* UNIQUE PROJECT JOURNEY */}
      <section className="border-y border-[#E1EEE6] bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
            How Your Project Takes Shape
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
            A clear journey,{" "}
            <span className="text-[#087F5B]">
              made for this service.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#627B71]">
            Select a stage to see what happens, why it
            matters and what we work towards together.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            {/* STEP SELECTOR */}
            <div className="space-y-3">
              {data.stages.map((item, index) => {
                const selected = stageIndex === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setStageIndex(index)}
                    className={`flex w-full items-center gap-4 rounded-[24px] border p-5 text-left transition-all ${
                      selected
                        ? "border-[#087F5B] bg-[#E8F5ED] shadow-[5px_5px_15px_#e0ebe4]"
                        : "border-[#E1EBE5] bg-[#F5FAF7] hover:border-[#B8DDC7]"
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${
                        selected
                          ? "bg-[#087F5B] text-white"
                          : "bg-white text-[#087F5B]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span className="flex-1">
                      <span className="block font-extrabold text-[#172B29]">
                        {item.title}
                      </span>

                      <span className="mt-1 block text-xs leading-6 text-[#627B71]">
                        {item.subtitle}
                      </span>
                    </span>

                    <ChevronRight
                      size={19}
                      className="shrink-0 text-[#087F5B]"
                    />
                  </button>
                );
              })}
            </div>

            {/* SELECTED STEP DETAILS */}
            <div className="flex min-h-[385px] flex-col justify-between rounded-[30px] bg-[#172B29] p-7 text-white sm:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9ED9B8]">
                    Stage 0{stageIndex + 1} / 03
                  </span>

                  <CheckCircle2
                    size={24}
                    className="text-[#9ED9B8]"
                  />
                </div>

                <h3 className="mt-9 text-3xl font-black tracking-tight sm:text-4xl">
                  {stage.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-8 text-white/75">
                  {stage.description}
                </p>

                <p className="mt-9 text-xs font-extrabold uppercase tracking-[0.16em] text-[#9ED9B8]">
                  What this stage includes
                </p>

                <ul className="mt-5 space-y-4">
                  {stage.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#9ED9B8]"
                      />
                      <span className="text-sm leading-6 text-white/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* STAGE NAVIGATION */}
              <div className="mt-12 flex items-center justify-between gap-4 border-t border-white/15 pt-6">
                <div className="flex gap-2">
                  {data.stages.map((item, index) => (
                    <button
                      type="button"
                      key={item.title}
                      aria-label={`Go to stage ${index + 1}`}
                      aria-pressed={stageIndex === index}
                      onClick={() => setStageIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        stageIndex === index
                          ? "w-9 bg-[#9ED9B8]"
                          : "w-2.5 bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setStageIndex((stageIndex + 1) % 3)
                  }
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#9ED9B8] hover:text-white"
                >
                  {stageIndex === 2
                    ? "Start Again"
                    : "Next Stage"}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
