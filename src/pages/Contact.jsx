
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Clock3,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";

import { services } from "../data/servicesData";

const CONTACT_EMAIL = "kirtan.gohel@vilartech.com.au";

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
  website: "",
};

const inputClass =
  "w-full rounded-2xl border border-[#DDEAE2] bg-[#FAFCFB] px-5 py-4 text-sm text-[#172B29] outline-none transition-all placeholder:text-[#9BAEA5] focus:border-[#087F5B] focus:ring-4 focus:ring-[#087F5B]/10";

export default function Contact() {
  const location = useLocation();

  const selectedService = location.state?.service || "";

  const [form, setForm] = useState(() => ({
    ...initialForm,
    service: selectedService,
  }));

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (submitted) setSubmitted(false);
    if (submitError) setSubmitError("");
  };

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
          "The enquiry service is unavailable. Please try again later."
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
    <div className="min-h-screen overflow-hidden bg-[#F5FAF7] text-[#172B29]">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#DDEAE2]">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[450px] w-[450px] rounded-full bg-[#9ED9B8]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:pb-20 sm:pt-24">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DDEAE2] bg-white px-4 py-2 text-xs font-bold tracking-[0.1em] text-[#087F5B]">
              <Sparkles size={15} />
              LET'S CONNECT
            </div>

            <h1 className="text-[clamp(3.2rem,6vw,5.8rem)] font-extrabold leading-[1.06] tracking-[-0.06em]">
              Something in mind?
              <span className="block text-[#087F5B]">
                Let's make it real.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#657A73]">
              A fresh brand, a better website, a smarter digital
              experience or an idea still taking shape. Tell us
              what you're imagining and we'll explore where
              it could go.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* LEFT INFORMATION */}
          <div className="space-y-6">

            {/* CONTACT CARD */}
            <div className="rounded-[30px] bg-[#172B29] p-8 text-white sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#9ED9B8]">
                <MessageCircle size={26} />
              </div>

              <h2 className="mt-10 text-3xl font-extrabold leading-tight tracking-[-0.04em]">
                Every great project starts with a conversation.
              </h2>

              <p className="mt-6 text-sm leading-8 text-white/70">
                You don't need a perfect brief or all the
                answers. Share your idea, your challenge
                or what you'd like to achieve.
              </p>

              <div className="mt-10 space-y-6 border-t border-white/15 pt-8">

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#9ED9B8]">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">
                      Email Us
                    </p>

                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="mt-2 inline-block break-all text-sm font-semibold text-white transition-colors hover:text-[#9ED9B8]"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#9ED9B8]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">
                      Based In
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                      Adelaide, South Australia
                    </p>

                    <p className="mt-1 text-xs text-white/55">
                      Collaborating with businesses digitally
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WHAT HAPPENS NEXT */}
            <div className="rounded-[30px] border border-[#DDEAE2] bg-white p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5ED] text-[#087F5B]">
                <Clock3 size={23} />
              </div>

              <h3 className="mt-7 text-xl font-extrabold">
                What happens next?
              </h3>

              <div className="mt-7 space-y-5">
                {[
                  "Share your idea or business challenge.",
                  "Your enquiry is delivered to our business inbox.",
                  "We'll review the details and discuss the next steps.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[#087F5B]"
                    />

                    <p className="text-sm leading-7 text-[#657A73]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div className="rounded-[32px] border border-[#DDEAE2] bg-white p-7 shadow-[0_18px_55px_rgba(23,43,41,0.04)] sm:p-10 lg:p-12">

            {/* FORM HEADER */}
            <div className="mb-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#087F5B]">
                Project Enquiry
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                Tell us about your idea.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#657A73]">
                Fill in a few details and send your enquiry
                directly to our team. Fields marked * are required.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* HONEYPOT FIELD */}
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

                {/* NAME */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-bold"
                  >
                    Full Name *
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

                {/* EMAIL */}
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
                    placeholder="you@company.com"
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

              {/* BUSINESS */}
              <div>
                <label
                  htmlFor="contact-company"
                  className="mb-2 block text-sm font-bold"
                >
                  Business / Organisation
                </label>

                <input
                  id="contact-company"
                  type="text"
                  autoComplete="organization"
                  maxLength={150}
                  placeholder="Your business name (optional)"
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
                  onChange={(event) =>
                    updateField(
                      "service",
                      event.target.value
                    )
                  }
                  className={inputClass}
                >
                  <option value="">
                    Select a service
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
              </div>

              {/* BUDGET */}
              <div>
                <label
                  htmlFor="contact-budget"
                  className="mb-2 block text-sm font-bold"
                >
                  Estimated Project Budget
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
                    Select a budget (optional)
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
                    Let's discuss
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-bold"
                >
                  Tell Us About Your Project *
                </label>

                <textarea
                  id="contact-message"
                  rows={6}
                  required
                  maxLength={5000}
                  placeholder="What are you looking to create, improve or explore?"
                  value={form.message}
                  onChange={(event) =>
                    updateField(
                      "message",
                      event.target.value
                    )
                  }
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* SUBMIT */}
              <div className="border-t border-[#DDEAE2] pt-6">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#087F5B] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#066B4D] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {sending ? (
                    <>
                      Sending Enquiry...
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="mt-4 text-xs leading-6 text-[#657A73]">
                  Your enquiry will be submitted securely
                  to our website's email service.
                  We'll use your details to respond to
                  your enquiry.
                </p>

                {/* SUCCESS */}
                {submitted && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-5 flex items-start gap-3 rounded-2xl border border-[#B9DFC9] bg-[#E8F5ED] p-5"
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
                        Thank you for contacting Vilartech.
                        Your enquiry has been accepted,
                        and we'll review it as soon as possible.
                      </p>
                    </div>
                  </div>
                )}

                {/* ERROR */}
                {submitError && (
                  <div
                    role="alert"
                    className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5"
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

                      <p className="mt-2 text-sm text-red-700">
                        Alternatively, email us at{" "}
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
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#E8F5ED] px-8 py-14 text-center sm:px-12 sm:py-16">
          <Sparkles
            size={26}
            className="mx-auto text-[#087F5B]"
          />

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
            Still exploring what's possible?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#657A73]">
            Discover how our creative and digital services
            can help shape your next idea.
          </p>

          <Link
            to="/services"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#087F5B] hover:text-[#066B4D]"
          >
            Explore Our Services
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </div>
  );
}
