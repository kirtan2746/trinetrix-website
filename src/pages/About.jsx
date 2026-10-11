
import React from "react";
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
  Check,
  MapPin,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "We explore new perspectives, ask better questions and look beyond the obvious to uncover thoughtful ideas.",
  },
  {
    icon: Target,
    title: "Purpose",
    description:
      "Every creative decision and technical solution should serve a clear objective and deliver practical value.",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    description:
      "We believe good work begins with listening, honest conversations and a shared understanding of the goal.",
  },
  {
    icon: Rocket,
    title: "Progress",
    description:
      "We embrace continuous improvement and create solutions that can adapt as businesses and ideas evolve.",
  },
];

const capabilities = [
  "Brand identity and creative design",
  "Web design and digital experiences",
  "Digital marketing and brand growth",
  "Business digital launch and onboarding",
  "Smart business and workplace solutions",
  "Data intelligence and business insights",
  "Custom digital products and automation",
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5FAF7] text-[#172B29]">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#DDEAE2]">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-[#9ED9B8]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-28">

          {/* HERO CONTENT */}
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#DDEAE2] bg-white px-4 py-2 text-xs font-bold tracking-[0.1em] text-[#087F5B]">
              <Sparkles size={15} />
              GET TO KNOW VILARTECH
            </div>

            <h1 className="text-[clamp(3.2rem,6vw,5.8rem)] font-extrabold leading-[1.06] tracking-[-0.06em]">
              A different
              <span className="block">
                way to think
              </span>
              <span className="block text-[#087F5B]">
                digitally.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#657A73]">
              Vilartech is a creative and digital solutions
              studio built around a simple idea: thoughtful
              design and smart technology belong together.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#657A73]">
              We bring creative thinking and technical
              capability into one connected experience,
              helping businesses express their identity,
              build meaningful digital experiences and
              discover better ways of working.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[#087F5B] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#066B4D] hover:shadow-lg"
              >
                Explore Our Expertise
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#D0E3D7] bg-white px-7 py-4 text-sm font-bold text-[#172B29] transition-colors hover:border-[#087F5B] hover:text-[#087F5B]"
              >
                Let's Connect
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="rounded-[34px] border border-[#DDEAE2] bg-white p-6 shadow-[0_28px_75px_rgba(23,43,41,0.08)] sm:p-8">

              <div className="mb-7 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#657A73]">
                  Our Creative DNA
                </span>
                <Sparkles
                  size={20}
                  className="text-[#087F5B]"
                />
              </div>

              <div className="rounded-[26px] bg-[#172B29] p-8 text-white">
                <div className="flex items-center justify-between">
                  <Palette
                    size={29}
                    className="text-[#9ED9B8]"
                  />
                  <Code2
                    size={29}
                    className="text-[#9ED9B8]"
                  />
                </div>

                <div className="mt-16">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9ED9B8]">
                    Two disciplines. One mindset.
                  </p>

                  <h2 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-[-0.05em] sm:text-5xl">
                    Create with
                    <span className="block text-[#9ED9B8]">
                      intention.
                    </span>
                    Build with
                    <span className="block text-[#9ED9B8]">
                      purpose.
                    </span>
                  </h2>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-[22px] bg-[#E8F5ED] p-5">
                  <Palette
                    size={24}
                    className="text-[#087F5B]"
                  />
                  <p className="mt-9 text-sm font-bold">
                    Creative thinking
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#657A73]">
                    Imagination and identity
                  </p>
                </div>

                <div className="rounded-[22px] border border-[#DDEAE2] bg-[#F5FAF7] p-5">
                  <Code2
                    size={24}
                    className="text-[#087F5B]"
                  />
                  <p className="mt-9 text-sm font-bold">
                    Digital capability
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#657A73]">
                    Function and innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Who We Are
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
              Creativity with
              <span className="block text-[#087F5B]">
                capability.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-xl font-semibold leading-9 tracking-tight sm:text-2xl">
              Technology becomes more valuable when
              it connects with creativity, clarity and
              human experience.
            </p>

            <p className="mt-7 text-base leading-8 text-[#657A73]">
              Vilartech brings together the disciplines
              that shape how modern businesses look,
              communicate and operate. Rather than
              approaching branding, websites and business
              technology as isolated projects, we consider
              how each element supports the bigger picture.
            </p>

            <p className="mt-5 text-base leading-8 text-[#657A73]">
              Our approach starts with understanding
              the purpose behind the work. From there,
              we explore solutions that are visually
              considered, intuitive to use and practical
              to maintain.
            </p>

            <div className="mt-9 flex items-center gap-3 border-t border-[#DDEAE2] pt-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#087F5B]">
                <Layers3 size={22} />
              </div>

              <div>
                <p className="text-sm font-extrabold">
                  Vilartech
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#657A73]">
                  Powered by Trinetrix
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Our Perspective
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
              Different strengths.
              <span className="block text-[#087F5B]">
                Better together.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#657A73]">
              Design and technology shouldn't be
              separate conversations. We believe
              the strongest solutions consider both
              the experience and the systems behind it.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">

            {/* FEATURED CARD */}
            <article className="flex flex-col justify-between rounded-[30px] bg-[#172B29] p-8 text-white sm:p-12 lg:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#9ED9B8]">
                <Sparkles size={27} />
              </div>

              <div className="mt-14">
                <h3 className="max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                  We connect what looks beautiful
                  with what works beautifully.
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                  Every interaction, visual element and
                  technical decision contributes to the
                  overall experience. We consider how
                  these pieces work together rather
                  than in isolation.
                </p>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-[30px] border border-[#DDEAE2] bg-white p-8 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                <Compass size={27} />
              </div>

              <div className="mt-14">
                <h3 className="text-2xl font-extrabold">
                  Clarity over complexity.
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#657A73]">
                  We make complex ideas more approachable
                  through clear communication, intuitive
                  design and purposeful solutions.
                </p>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-[30px] border border-[#DDEAE2] bg-white p-8 sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5ED] text-[#087F5B]">
                <HeartHandshake size={27} />
              </div>

              <div className="mt-14">
                <h3 className="text-2xl font-extrabold">
                  Built through collaboration.
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#657A73]">
                  We value open conversations,
                  shared thinking and a collaborative
                  process where ideas can be explored
                  and refined together.
                </p>
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-[30px] bg-[#E8F5ED] p-8 sm:p-12 lg:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#087F5B]">
                <Rocket size={27} />
              </div>

              <div className="mt-14">
                <h3 className="max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Always looking forward.
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-[#657A73]">
                  Digital possibilities never stand
                  still. We embrace evolving tools
                  and fresh ideas while remaining
                  focused on what creates meaningful
                  business value.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-[#DDEAE2] bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              What Matters to Us
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
              The thinking behind
              <span className="text-[#087F5B]">
                {" "}our work.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#657A73]">
              The principles that guide how we
              approach challenges, collaborate
              and create digital solutions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-[26px] border border-[#DDEAE2] bg-[#FAFCFB] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#9ED9B8] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#087F5B]">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-9 text-xl font-extrabold">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#657A73]">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR CAPABILITIES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              What We Bring Together
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl">
              One connected
              <span className="block text-[#087F5B]">
                creative mindset.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#657A73]">
              From the first impression of your
              brand to the technology supporting
              everyday operations, we consider
              how each part contributes to a
              consistent business experience.
            </p>

            <Link
              to="/services"
              className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#087F5B] transition-colors hover:text-[#066B4D]"
            >
              Discover Our Services
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="rounded-[30px] border border-[#DDEAE2] bg-white p-8 shadow-[0_12px_35px_rgba(23,43,41,0.035)] sm:p-10">
            <div className="space-y-5">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-[#EDF2EE] pb-5 last:border-0 last:pb-0"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F5ED]">
                    <Check
                      size={16}
                      className="text-[#087F5B]"
                    />
                  </div>

                  <p className="text-sm font-semibold leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRINETRIX CONNECTION */}
      <section className="border-t border-[#DDEAE2] bg-white py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
              Our Brand Connection
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
              Vilartech.
              <span className="text-[#087F5B]">
                {" "}Powered by Trinetrix.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#657A73]">
              Vilartech brings a creative and
              design-led perspective to digital
              solutions, supported by the
              technology-focused capabilities
              associated with Trinetrix.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#657A73]">
              <MapPin
                size={17}
                className="text-[#087F5B]"
              />
              Based in Adelaide, South Australia
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#087F5B] px-7 py-3.5 text-sm font-bold text-[#087F5B] transition-colors hover:bg-[#087F5B] hover:text-white"
          >
            Let's Connect
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
