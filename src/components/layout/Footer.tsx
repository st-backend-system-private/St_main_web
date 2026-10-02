import React from "react";
import Image from "next/image";

export default function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Vision", href: "#vision" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-slate-900 items-start">
          {/* Logo & Company name */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 overflow-hidden rounded-full bg-white flex items-center justify-center p-0.5 border border-slate-800">
                <Image
                  src="/ST.png"
                  alt="ST logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-white text-base tracking-wider uppercase">
                  Shatripthi
                </span>
                <span className="text-[10px] tracking-widest text-slate-500 font-semibold uppercase leading-none">
                  Technologies
                </span>
              </div>
            </div>
            <p className="text-sm max-w-sm text-slate-500">
              Building next-generation software products for urban India, starting with mobility and expanding into hyperlocal platforms.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#products"
              className="text-primary hover:underline transition-colors"
            >
              RideX
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2024 Shatripthi Technologies Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Incorporated in India</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
            <span>CIN pending</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
