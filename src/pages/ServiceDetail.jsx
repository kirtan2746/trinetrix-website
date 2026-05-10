import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { services } from "../data/servicesData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-black">Service not found</h1>
        <Link to="/services" className="text-cyan-300 mt-6 inline-block">
          Back to services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-cyan-300 mb-10 hover:text-white transition"
      >
        <ArrowLeft size={18} />
        Back to Services
      </Link>

      <section className="rounded-[2rem] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/10 to-blue-700/10 p-10 md:p-14 mb-12">
        <div className="h-16 w-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-8">
          <Icon size={36} />
        </div>

        <p className="text-cyan-300 tracking-[0.3em] text-sm mb-4">
          TRINETRIX SERVICE
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-8">
          {service.title}
        </h1>

        <p className="text-slate-300 text-lg leading-9 max-w-4xl">
          {service.details}
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8">
          <h2 className="text-3xl font-black mb-6">
            What we do
          </h2>

          <div className="space-y-4">
            {service.whatWeDo.map((item) => (
              <div key={item} className="flex gap-3 text-slate-300">
                <CheckCircle className="text-cyan-300 mt-1" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8">
          <h2 className="text-3xl font-black mb-6">
            How this helps your business
          </h2>

          <div className="space-y-4">
            {service.businessValue.map((item) => (
              <div key={item} className="flex gap-3 text-slate-300">
                <CheckCircle className="text-cyan-300 mt-1" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-12 rounded-[2rem] border border-cyan-400/10 bg-white/5 p-10 text-center">
        <h2 className="text-4xl font-black">
          Need help with {service.title}?
        </h2>

        <p className="mt-5 text-slate-300">
          TRINETRIX can review your current environment and recommend a
          practical solution tailored to your business needs.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:bg-white transition"
        >
          Request Consultation
        </Link>
      </section>
    </div>
  );
}