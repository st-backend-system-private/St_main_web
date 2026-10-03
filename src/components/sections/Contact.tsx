"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-base-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
            Whether you&apos;re a potential partner, investor, or a talented individual who wants to join us — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:info@shatripthitechnologiespvtltd.in"
                    className="text-sm font-bold text-slate-900 hover:text-primary transition-colors break-all"
                  >
                    info@shatripthitechnologiespvtltd.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href="tel:+919083447938"
                    className="text-sm font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    +91 90834 47938
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold text-slate-700 text-xs">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="input input-bordered w-full rounded-xl bg-slate-50 focus:bg-white text-slate-900 text-sm font-medium"
                  />
                </div>

                {/* Email */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold text-slate-700 text-xs">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="input input-bordered w-full rounded-xl bg-slate-50 focus:bg-white text-slate-900 text-sm font-medium"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-slate-700 text-xs">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="input input-bordered w-full rounded-xl bg-slate-50 focus:bg-white text-slate-900 text-sm font-medium"
                />
              </div>

              {/* Message */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-slate-700 text-xs">Message</span>
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us more..."
                  className="textarea textarea-bordered w-full rounded-xl bg-slate-50 focus:bg-white text-slate-900 text-sm font-medium leading-relaxed"
                />
              </div>

              {/* Submit / Status */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-secondary w-full sm:w-auto px-8 flex items-center justify-center gap-2 rounded-full border-none shadow-[0_4px_14px_0_rgba(15,23,42,0.2)] hover:shadow-[0_4px_20px_0_rgba(15,23,42,0.35)] hover:scale-102 transition-all duration-300 text-white font-semibold"
                >
                  {isSubmitting ? (
                    <span className="loading loading-spinner loading-xs" />
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>

              {/* Success Alert */}
              {success && (
                <div className="alert alert-success mt-4 rounded-xl text-left bg-emerald-50 border-emerald-100 flex items-start gap-3 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-emerald-600 shrink-0 h-6 w-6 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-extrabold text-slate-950 text-sm">Message Sent!</h3>
                    <p className="text-xs text-slate-600 font-semibold mt-0.5">
                      Thank you. We will get back to you shortly.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
