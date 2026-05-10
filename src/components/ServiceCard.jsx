import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group rounded-[1.5rem] border border-cyan-400/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-cyan-400/10 hover:-translate-y-2 transition block"
    >
      <div className="h-14 w-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-6">
        <Icon size={30} />
      </div>

      <h3 className="text-2xl font-black mb-4">{service.title}</h3>

      <p className="text-slate-300 leading-8 mb-6">{service.short}</p>

      <div className="flex items-center gap-2 text-cyan-300 font-semibold">
        Learn more <ArrowRight size={18} />
      </div>
    </Link>
  );
}