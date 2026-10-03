"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-b from-base-200 via-base-100 to-base-100 bg-grid overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-orange-200/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-primary bg-orange-50 border border-primary/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              NOW BUILDING THE FUTURE
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Technology That{" "}
              <span className="relative inline-block text-primary pb-1">
                Moves
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-primary rounded-full" />
                <span className="absolute bottom-[-5px] left-0 w-3/4 h-[2px] bg-orange-400 rounded-full" />
              </span>{" "}
              Kolkata Forward
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
              Shatripthi Technologies is building next-generation software products for urban India — starting with mobility and expanding into a full suite of digital services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#products"
                className="btn btn-secondary px-8 rounded-full border-none shadow-[0_4px_14px_0_rgba(15,23,42,0.2)] hover:shadow-[0_4px_20px_0_rgba(15,23,42,0.35)] hover:scale-105 transition-all duration-300"
              >
                Our Products
                <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                className="btn btn-ghost px-8 rounded-full border-none bg-white/80 backdrop-blur-sm shadow-[0_4px_14px_0_rgba(15,23,42,0.05)] hover:shadow-[0_4px_20px_0_rgba(15,23,42,0.1)] hover:bg-slate-50 hover:scale-105 transition-all duration-300 text-slate-800"
              >
                About Us
              </a>
            </div>

            {/* Stats list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-100 max-w-lg">
              <div>
                <p className="text-3xl font-black text-slate-950">2024</p>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mt-1">
                  Founded
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-950">Kolkata</p>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mt-1">
                  Headquartered
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-950">1+</p>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mt-1">
                  Products in Dev
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Showcase Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Showcase Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/60 bg-slate-900 group">
              <div className="aspect-[4/3] relative w-full h-full min-h-[350px]">
                <Image
                  src="/hero_kolkata_skyline.jpg"
                  alt="Kolkata Howrah Bridge at sunset representing our home base"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Location Tag */}
              <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-lg">
                <MapPin size={12} className="text-primary" />
                Kolkata, West Bengal
              </div>
            </div>

            {/* RollORide launchpad overlay card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -bottom-8 -left-6 sm:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-xs transition-transform duration-300 hover:scale-102"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md shadow-orange-500/10 border border-slate-100 flex-shrink-0 bg-white p-1">
                <Image
                  src="/RollORide.png"
                  alt="RollORide logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-slate-950">RollORide</h4>
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-md border border-orange-100">
                    Kolkata
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Launching Soon in Kolkata
                </p>
              </div>
            </motion.div>

            {/* Glowing Accent Ring behind the overlay card */}
            <div className="absolute -bottom-10 -left-12 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
