"use client";

import React from "react";
import Image from "next/image";
import {
  Bike,
  Truck,
  Zap,
  ShieldCheck,
  Server,
  Wallet,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  const futureProducts = [
    {
      icon: <Server size={20} className="text-primary" />,
      title: "Enterprise SaaS",
      desc: "B2B software solutions for logistics and fleet management.",
    },
    {
      icon: <Wallet size={20} className="text-primary" />,
      title: "FinTech Services",
      desc: "Digital payment rails and financial tools for gig workers.",
    },
    {
      icon: <ShoppingBag size={20} className="text-primary" />,
      title: "Hyperlocal Commerce",
      desc: "Quick commerce and last-mile delivery infrastructure.",
    },
  ];

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What We&apos;re Building
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
            Our product roadmap begins with urban mobility and expands into a full ecosystem of software services.
          </p>
        </div>

        {/* Featured RollORide Product Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-12 mb-10 bg-slate-900"
        >
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between text-left space-y-8 lg:space-y-0">
            {/* Logo and Badge */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-inner flex-shrink-0 bg-white p-1">
                  <Image
                    src="/RollORide.png"
                    alt="RollORide logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base leading-none">
                    RollORide
                  </h3>
                  <span className="text-[10px] text-slate-400 font-semibold mt-0.5 block">
                    by Shatripthi Technologies
                  </span>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold text-orange-400 bg-orange-950/40 border border-orange-500/30">
                Coming Soon
              </span>
            </div>

            {/* Product description */}
            <div className="space-y-4 my-6 lg:my-0">
              <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Kolkata&apos;s Smartest Ride & Delivery Platform
              </h4>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-semibold">
                RollORide is an on-demand bike taxi and goods transport service built specifically for Kolkata&apos;s streets. Book a ride in seconds or send packages across the city — fast, affordable, and safe.
              </p>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center">
                  <Bike size={12} className="text-primary" />
                </div>
                <span className="text-xs font-semibold">Bike Taxi</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center">
                  <Truck size={12} className="text-primary" />
                </div>
                <span className="text-xs font-semibold">Goods Transport</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center">
                  <Zap size={12} className="text-primary" />
                </div>
                <span className="text-xs font-semibold">Instant Booking</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center">
                  <ShieldCheck size={12} className="text-primary" />
                </div>
                <span className="text-xs font-semibold">Verified Riders</span>
              </div>
            </div>

            {/* Button */}
            <div className="pt-6">
              <button className="btn btn-primary px-8 text-white rounded-full border-none shadow-[0_6px_20px_rgba(249,115,22,0.45)] hover:shadow-[0_6px_25px_rgba(249,115,22,0.65)] hover:scale-105 transition-all duration-300">
                Explore RollORide
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column (Visual) */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
            <Image
              src="/rolloride_rider_showcase.jpg"
              alt="RollORide Bike Taxi Rider on Red Bajaj Pulsar N160 with Pillion in Kolkata"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-slate-950/30" />

            {/* Overlay Badges */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3">
              <div className="bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Fast</p>
                <p className="text-xs font-extrabold text-white">Pickups</p>
              </div>
              <div className="bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Safe</p>
                <p className="text-xs font-extrabold text-white">Verified Drivers</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futureProducts.map((prod, idx) => (
            <motion.div
              key={prod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-base-200 p-6 sm:p-8 rounded-2xl border border-slate-200/50 text-left flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  {prod.icon}
                </div>
                <h4 className="text-base font-bold text-slate-950">
                  {prod.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                  {prod.desc}
                </p>
              </div>
              
              {/* Coming tag */}
              <div className="mt-6 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                Under Development
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
