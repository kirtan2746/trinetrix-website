import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/servicesData";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <p className="text-cyan-300 tracking-[0.3em] text-sm mb-4">
        SERVICES
      </p>

      <h1 className="text-6xl font-black mb-10">
        Enterprise IT Services
      </h1>

      <p className="text-slate-300 max-w-4xl leading-9 text-lg mb-16">
        TRINETRIX provides structured technology services for organisations
        that need secure systems, modern digital platforms, better reporting,
        professional websites and scalable cloud foundations.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}