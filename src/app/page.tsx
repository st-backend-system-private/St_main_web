"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/ui/SplashScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during splash screen phase
    if (loading) {
      document.body.style.overflow = "hidden";
    }

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2000);

    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash" />}
      </AnimatePresence>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
