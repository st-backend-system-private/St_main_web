"use client";

import React from "react";
import { Cpu, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: <Cpu className="text-primary" size={24} />,
      title: "Tech-First Thinking",
      desc: "Every product we build starts with deep engineering principles and user-centered design.",
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Local Impact",
      desc: "We are rooted in Kolkata and committed to solving real problems for Indian urban centers.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-base-200 relative overflow-hidden"
    >
      {/* Background shape */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-orange-100/30 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Text and Team Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              A Startup Built <br className="hidden sm:inline" /> on Bold Ideas
            </h2>

            <div className="space-y-6 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              <p>
                Shatripthi Technologies Private Limited is a technology company incorporated in Kolkata, India. We are in our early phase — laser-focused on building our first product, RollORide, while laying the groundwork for a broad portfolio of software services.
              </p>
              <p>
                Our founding team combines product thinking with technical depth. We believe that great technology companies are built on discipline, speed, and genuine care for the people who use their products.
              </p>
            </div>

            {/* Team Avatars Footer */}
            <div className="pt-8 border-t border-slate-300/40 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex -space-x-3">
                <div className="avatar placeholder">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-xs ring-2 ring-base-200 flex items-center justify-center">
                    ST
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-xs ring-2 ring-base-200 flex items-center justify-center">
                    JD
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-10 h-10 rounded-full bg-slate-400 text-white font-bold text-xs ring-2 ring-base-200 flex items-center justify-center">
                    PM
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-sm font-extrabold text-slate-900">
                  Small but mighty team
                </h4>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Engineers, designers & product thinkers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            {features.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 text-left hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shadow-inner mb-6">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-semibold">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
