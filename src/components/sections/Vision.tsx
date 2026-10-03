"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Vision() {
  const milestones = [
    { year: "2025", desc: "RollORide Kolkata Launch" },
    { year: "2026", desc: "Multi-city Expansion" },
    { year: "2027", desc: "New Product Lines" },
    { year: "∞", desc: "Long-term Vision" },
  ];

  return (
    <section
      id="vision"
      className="py-24 bg-slate-950 text-white bg-grid-dark relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text & Stats Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="space-y-4">
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
                Our Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Building India&apos;s Next <br className="hidden sm:inline" /> Great Tech Company
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-semibold">
                We are starting small, but thinking big. RollORide is our first step toward building a comprehensive technology ecosystem that serves millions of Indians — beginning with Kolkata and expanding city by city.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-semibold">
                Our long-term vision is to become one of India&apos;s leading software product companies, known for products that are deeply useful, beautifully designed, and engineered for scale.
              </p>
            </div>

            {/* Milestones grid */}
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-left hover:border-slate-700 transition-colors"
                >
                  <p className="text-2xl font-black text-primary">{item.year}</p>
                  <p className="text-xs font-bold text-slate-400 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image & Mission Overlay Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group aspect-[4/3] min-h-[300px]">
              <Image
                src="/vision_tech_laptop.jpg"
                alt="Developer working on laptop representing next generation software tools"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Mission Card overlay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute -top-6 -right-4 sm:-right-8 bg-primary p-5 rounded-2xl shadow-xl max-w-xs text-left text-white border border-orange-400/20"
            >
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                <Star size={18} className="fill-white text-white" />
              </div>
              <h4 className="font-extrabold text-sm tracking-wide uppercase">
                Mission
              </h4>
              <p className="text-xs font-semibold text-orange-50 mt-1 leading-normal">
                Tech that improves everyday Indian lives.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
