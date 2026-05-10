import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/servicesData";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#073B66_0%,#050B14_45%,#02060B_100%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-32">
          <div className="max-w-4xl">
            <div className="inline-flex px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
              Australian-based Premium Technology Solutions
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              Engineering the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                {" "}Digital Innovation
              </span>
            </h1>

            <p className="mt-10 text-xl text-slate-300 leading-9 max-w-3xl">
              TRINETRIX delivers enterprise-grade cloud solutions,
              SharePoint systems, Power BI dashboards, websites, domains,
              infrastructure management, cybersecurity and digital
              transformation services.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                to="/services"
                className="px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:bg-white transition"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border border-cyan-400/20 hover:bg-cyan-400/10 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-cyan-300 tracking-[0.3em] text-sm">
            WHAT WE PROVIDE
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black">
            Everything your business needs in one place
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto leading-8">
            From websites and domains to Microsoft 365, SharePoint,
            Power BI, databases and cybersecurity, TRINETRIX provides
            practical technology services for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block px-8 py-4 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition"
          >
            View All Services
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[2rem] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/10 to-blue-700/10 p-10 md:p-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 tracking-[0.3em] text-sm mb-4">
                WHY TRINETRIX
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Premium technology consulting built for growth
              </h2>
            </div>

            <p className="text-slate-300 leading-9 text-lg">
              We focus on practical, secure and scalable technology solutions.
              Our services are designed to help businesses improve systems,
              reduce manual work, strengthen security and build a professional
              digital presence.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24" id="contact">
        <div className="rounded-[2rem] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-10">
          <div className="text-center mb-10">
            <p className="text-cyan-300 tracking-[0.3em] text-sm">
              CONTACT US
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Start your digital journey
            </h2>

            <p className="mt-4 text-slate-300">
              Send us a quick enquiry and we will help you understand the best
              technology solution for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-black/30 border border-cyan-400/20 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-black/30 border border-cyan-400/20 rounded-2xl px-5 py-4 outline-none"
            />
          </div>

          <textarea
            rows="6"
            placeholder="Tell us about your business or project"
            className="w-full mt-5 bg-black/30 border border-cyan-400/20 rounded-2xl px-5 py-4 outline-none"
          ></textarea>

          <Link
            to="/contact"
            className="inline-block mt-6 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:bg-white transition"
          >
            Open Full Contact Page
          </Link>
        </div>
      </section>
    </div>
  );
}