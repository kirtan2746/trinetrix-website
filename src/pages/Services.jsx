
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Compass,
  PenTool,
  Rocket,
  CheckCircle2,
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";
import { services } from "../data/servicesData";

const process = [
  {
    number: "01",
    icon: Compass,
    title: "Understand",
    description:
      "We get to know your business, your audience and the opportunity behind your idea.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Shape",
    description:
      "We explore the possibilities and design an approach aligned with your goals.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Bring It to Life",
    description:
      "We turn the direction into a practical digital experience, with room to evolve as you grow.",
  },
];

const principles = [
  {
    title: "Clarity first",
    text: "Clear thinking and communication at every stage.",
  },
  {
    title: "People at the centre",
    text: "Experiences that make sense to the people using them.",
  },
  {
    title: "Creativity with purpose",
    text: "Ideas that balance originality with practical value.",
  },
  {
    title: "Built to evolve",
    text: "Digital foundations with room for tomorrow.",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5FAF7] text-[#172B29]">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#DDEAE2]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[440px] w-[440px] rounded-full bg-[#9ED9B8]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[350px] w-[350px] rounded-full bg-[#DDEFE2]/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-24">

          {/* HERO COPY */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DDEAE2] bg-white px-4 py-2 text-xs font-bold tracking-[0.08em] text-[#087F5B]">
              <Sparkles size={15} />
              WHAT WE CREATE
            </div>

            <h1 className="max-w-3xl text-[clamp(3rem,5.5vw,5.5rem)] font-extrabold leading-[1.06] tracking-[-0.06em]">
              One vision.
              <span className="block text-[#087F5B]">
                Endless ways
              </span>
              <span className="block">
                to bring it to life.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#657A73]">
              Every business has a story worth telling
              and ideas worth building. We bring creative
              thinking, thoughtful design and modern
              technology together to help those ideas
              take shape.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#explore-services"
                className="inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#066B4D] hover:shadow-lg"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#D0E3D7] bg-white px-7 py-4 text-sm font-bold text-[#172B29] transition-colors hover:border-[#087F5B] hover:text-[#087F5B]"
              >
                Let's Collaborate
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="rounded-[32px] border border-[#DDEAE2] bg-white p-6 shadow-[0_25px_65px_rgba(23,43,41,0.07)] sm:p-8">

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#657A73]">
                  Creative Possibilities
                </span>

                <ArrowUpRight
                  size={20}
                  className="text-[#087F5B]"
                />
              </div>

              <div className="mt-8 rounded-[24px] bg-[#172B29] p-7 text-white">
                <Sparkles
                  size={27}
                  className="text-[#9ED9B8]"
                />

                <h2 className="mt-10 text-4xl font-extrabold leading-tight tracking-[-0.05em]">
                  Think.
                  <span className="block text-[#9ED9B8]">
                    Create.
                  </span>
                  Evolve.
                </h2>

                <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
                  Different perspectives. Connected
                  ideas. Experiences built with purpose.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-[20px] bg-[#E8F5ED] p-5">
                  <PenTool
                    size={23}
                    className="text-[#087F5B]"
                  />

                  <p className="mt-8 text-sm font-bold">
                    Creative thinking
                  </p>
                </div>

                <div className="rounded-[20px] border border-[#DDEAE2] bg-[#F5FAF7] p-5">
                  <Rocket
                    size={23}
                    className="text-[#087F5B]"
                  />

                  <p className="mt-8 text-sm font-bold">
                    Digital innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        id="explore-services"
        className="scroll-mt-28 bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Explore Our Expertise
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
              The right ideas.
              <span className="block text-[#087F5B]">
                The right expertise.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#657A73]">
              Whether you're creating something new,
              refreshing what already exists or finding
              a smarter way forward, our services connect
              design and technology around what matters
              to your business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
              />
            ))}
          </div>

          {/* HELP STRIP */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-[24px] border border-[#DDEAE2] bg-[#F5FAF7] px-7 py-6">
            <div>
              <h3 className="text-lg font-extrabold">
                Not sure where your idea fits?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#657A73]">
                Tell us what you're imagining.
                We'll help you explore the possibilities.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#087F5B] transition-colors hover:text-[#066B4D]"
            >
              Talk to Us
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR PERSPECTIVE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

            {/* FEATURED STATEMENT */}
            <div className="flex flex-col justify-between rounded-[32px] bg-[#172B29] p-8 text-white sm:p-12">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#9ED9B8]">
                  Our Perspective
                </p>

                <h2 className="mt-7 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
                  It's not just about what we build.
                  <span className="block text-[#9ED9B8]">
                    It's about why it matters.
                  </span>
                </h2>
              </div>

              <p className="mt-12 max-w-xl text-base leading-8 text-white/70">
                A brand should feel authentic.
                A website should feel effortless.
                Technology should make life simpler.
                We bring those principles together
                to create experiences with a clear purpose.
              </p>
            </div>

            {/* PRINCIPLES */}
            <div className="rounded-[32px] border border-[#DDEAE2] bg-white p-8 sm:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
                What Guides Our Work
              </p>

              <h3 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Designed with intention.
              </h3>

              <div className="mt-9 space-y-6">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F5ED]">
                      <CheckCircle2
                        size={18}
                        className="text-[#087F5B]"
                      />
                    </div>

                    <div>
                      <h4 className="text-base font-extrabold">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-7 text-[#657A73]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE PROCESS */}
      <section className="border-y border-[#DDEAE2] bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Our Creative Process
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
              From possibility
              <span className="text-[#087F5B]">
                {" "}to reality.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#657A73]">
              Every project is different, but a
              thoughtful approach makes the journey clearer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="rounded-[28px] border border-[#DDEAE2] bg-[#FAFCFB] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DFC9]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#087F5B]">
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                      />
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

      {/* LIGHT CONTACT STRIP */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087F5B]">
              Your Next Step
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Let's find the right solution together.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#657A73]">
              Have a challenge, a concept or an
              ambition? Start with a conversation.
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
