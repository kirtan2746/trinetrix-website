import React from "react";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">

      <h1 className="text-6xl font-black mb-10">
        Contact Us
      </h1>

      <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-10">

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
          placeholder="Tell us about your project"
          className="w-full mt-5 bg-black/30 border border-cyan-400/20 rounded-2xl px-5 py-4 outline-none"
        ></textarea>

        <button className="mt-6 px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:bg-white transition">
          Send Message
        </button>
      </div>
    </div>
  );
}