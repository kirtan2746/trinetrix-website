import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">

      <h1 className="text-6xl font-black mb-10">
        About TRINETRIX
      </h1>

      <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-10">

        <p className="text-slate-300 leading-9 text-lg">
          TRINETRIX is a premium Australian-based IT consulting and
          technology solutions provider focused on digital transformation,
          cloud systems, enterprise platforms and intelligent business solutions.
        </p>

        <p className="text-slate-300 leading-9 text-lg mt-6">
          We specialise in SharePoint, Power BI, websites,
          cloud transformation, Microsoft 365 ecosystems,
          infrastructure management and business automation.
        </p>
      </div>
    </div>
  );
}