
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  PenTool,
  Rocket,
} from "lucide-react";

import { services } from "../data/servicesData";

const approachSteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discover & Understand",
    description:
      "We take the time to understand your business, objectives, audience and the challenges you want to solve.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Shape & Deliver",
    description:
      "We translate your requirements into a considered solution, balancing creativity, usability and practical delivery.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Refine & Evolve",
    description:
      "We review the outcomes, identify opportunities for improvement and consider what comes next.",
  },
];

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  const relatedServices = services
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  if (!service) {
    return (
      <main className="flex min-h-[65vh] items-center bg-[#F5FAF7] px-6 py-24 text-[#172B29]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
            <Sparkles size={28} />
          </div>

          <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
            Service Not Found
          </p>

          <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
            Let's find what you're looking for.
          </h1>

          <p className="mt-6 text-base leading-8 text-[#657A73]">
            This service page may have moved or is no
            longer available. Explore our current services
            to discover how Vilartech can help.
          </p>

          <Link
            to="/services"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#066B4D]"
          >
            <ArrowLeft size={18} />
            Explore Our Services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-[#F5FAF7] text-[#172B29]">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#DDEAE2]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#9ED9B8]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-12 sm:pb-24 sm:pt-16">

          {/* BREADCRUMB */}
          <nav aria-label="Breadcrumb">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#657A73] transition-colors hover:text-[#087F5B]"
            >
              <ArrowLeft size={17} />
              Back to All Services
            </Link>
          </nav>

          <div className="mt-12 max-w-4xl">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#DDEAE2] bg-white text-[#087F5B] shadow-sm">
              <Icon size={30} strokeWidth={1.7} />
            </div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DDEAE2] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#087F5B]">
              <Sparkles size={14} />
              Vilartech Services
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              {service.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#657A73]">
              {service.details}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                state={{ service: service.title }}
                className="group inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#066B4D] hover:shadow-lg"
              >
                Discuss Your Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="#service-overview"
                className="inline-flex items-center gap-2 rounded-full border border-[#D0E3D7] bg-white px-7 py-4 text-sm font-bold text-[#172B29] transition-colors hover:border-[#087F5B] hover:text-[#087F5B]"
              >
                Explore Capabilities
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES & BUSINESS VALUE */}
      <section
        id="service-overview"
        className="scroll-mt-28 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              What We Deliver
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
              The right capabilities.
              <span className="block text-[#087F5B]">
                The outcomes that matter.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#657A73]">
              Every business has different priorities.
              We focus on understanding your needs and
              shaping an approach that makes sense for you.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {/* WHAT WE DO */}
            <article className="rounded-[30px] border border-[#DDEAE2] bg-white p-7 shadow-[0_12px_35px_rgba(23,43,41,0.035)] sm:p-10">

              <div className="mb-9 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#9BAEA5]">
                  Capabilities
                </span>
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                What we do
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#657A73]">
                A tailored combination of creative thinking,
                technical expertise and practical execution.
              </p>

              <ul className="mt-9 space-y-5">
                {service.whatWeDo.map((item, index) => (
                  <li
                    key={`${index}-${item}`}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#087F5B]"
                    />

                    <span className="text-sm font-medium leading-7 text-[#172B29]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            {/* BUSINESS VALUE */}
            <article className="rounded-[30px] border border-[#CFE8D8] bg-[#E8F5ED] p-7 sm:p-10">

              <div className="mb-9 flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#087F5B]">
                  <Sparkles size={26} strokeWidth={1.8} />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#087F5B]">
                  Business Value
                </span>
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Why it matters
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#657A73]">
                Beyond the deliverables, we consider
                the experience and practical value
                your business can gain.
              </p>

              <ul className="mt-9 space-y-5">
                {service.businessValue.map((item, index) => (
                  <li
                    key={`${index}-${item}`}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#087F5B]"
                    />

                    <span className="text-sm font-medium leading-7 text-[#172B29]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="border-y border-[#DDEAE2] bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              How We Work
            </p>

            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              Thoughtful from the start.
              <span className="block text-[#087F5B]">
                Practical at every step.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#657A73]">
              A collaborative approach helps us keep
              your objectives at the centre of every decision.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {approachSteps.map((step) => {
              const StepIcon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group rounded-[28px] border border-[#DDEAE2] bg-[#FAFCFB] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DFC9] hover:shadow-[0_16px_35px_rgba(23,43,41,0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#087F5B]">
                      <StepIcon size={23} />
                    </div>

                    <span className="text-3xl font-extrabold text-[#9ED9B8]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-9 text-xl font-extrabold tracking-tight">
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

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-11 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
                  Discover More
                </p>

                <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                  Explore other possibilities.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#657A73]">
                  The right digital solution often brings
                  several capabilities together.
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#087F5B] transition-colors hover:text-[#066B4D]"
              >
                View All Services
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {relatedServices.map((item) => {
                const RelatedIcon = item.icon;

                return (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className="group flex h-full flex-col rounded-[26px] border border-[#DDEAE2] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DFC9] hover:shadow-[0_16px_35px_rgba(23,43,41,0.06)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#087F5B]">
                        <RelatedIcon size={23} />
                      </div>

                      <ArrowUpRight
                        size={19}
                        className="text-[#9BAEA5] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#087F5B]"
                      />
                    </div>

                    <h3 className="mt-8 text-xl font-extrabold leading-snug tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-[#657A73]">
                      {item.short}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#087F5B]">
                      Explore Service
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SUBTLE CONTACT STRIP */}
      <section className="border-t border-[#DDEAE2] bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087F5B]">
              Your Next Step
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight">
              Let's talk about your project.
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#657A73]">
              Tell us what you want to achieve.
              We'll explore the possibilities together.
            </p>
          </div>

          <Link
            to="/contact"
            state={{ service: service.title }}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#087F5B] px-7 py-3.5 text-sm font-bold text-[#087F5B] transition-all hover:bg-[#087F5B] hover:text-white"
          >
            Enquire About This Service
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
