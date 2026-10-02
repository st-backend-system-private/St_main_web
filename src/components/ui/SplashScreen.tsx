"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar over 2 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-base-200 select-none"
    >
      {/* Background grid pattern matching the site */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Content wrapper */}
      <div className="flex flex-col items-center max-w-xs text-center z-10 space-y-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center p-2 border border-slate-100 shadow-lg shadow-slate-200/50"
        >
          <Image
            src="/ST.png"
            alt="Shatripthi Logo"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Company Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-1.5"
        >
          <h1 className="text-xl font-black text-slate-900 tracking-wider uppercase leading-none">
            Shatripthi
          </h1>
          <p className="text-[10px] tracking-[0.25em] text-slate-500 font-extrabold uppercase leading-none">
            Technologies
          </p>
        </motion.div>

        {/* Progress Bar Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-40 h-[3px] bg-slate-200/80 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </motion.div>

        {/* Small subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.7 }}
          className="text-[10px] text-slate-500 font-bold tracking-wide"
        >
          Loading urban mobility platforms...
        </motion.p>
      </div>
    </motion.div>
  );
}
