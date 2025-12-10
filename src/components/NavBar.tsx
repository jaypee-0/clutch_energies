"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type NavBarProps = {
  variant?: "overlay" | "solid";
};

export default function NavBar({ variant = "solid" }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const isOverlay = variant === "overlay";
  const router = useRouter();

  const services = [
    { label: "Petrol delivery", href: "/services/petrol" },
    { label: "Gas delivery", href: "/services/gas" },
    { label: "Diesel delivery", href: "/services/diesel" },
    { label: "Roadside & towing", href: "/services/roadside" },
  ];
  return (
    <header
      className={`inset-x-0 z-40 ${
        isOverlay ? "absolute top-0" : "sticky top-0 bg-black/80 backdrop-blur border-b border-white/10"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-3 items-center">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/logo.png" alt="Clutch" width={32} height={32} />
          <span className="text-base font-semibold">Clutch</span>
        </div>

        <nav className="hidden md:flex justify-center items-center gap-6 lg:gap-8 text-sm text-white/80 whitespace-nowrap">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="hover:text-white transition-colors flex items-center gap-1"
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="size-3 opacity-80">
                <path
                  d="M5.5 7.5l4.5 5 4.5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-3 w-56 rounded-xl border border-white/10 bg-black/90 shadow-lg transition-opacity ${
                servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="flex flex-col divide-y divide-white/10">
                {services.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="px-4 py-3 hover:bg-white/5 text-white/85 text-sm"
                  >
                    {svc.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link className="hover:text-white transition-colors" href="/price-index">
            Price index
          </Link>
          {/* <Link className="hover:text-white transition-colors" href="#">
            About Us
          </Link> */}
          <Link className="hover:text-white transition-colors" href="/contact">
            Contact Us
          </Link>
          <Link className="hover:text-white transition-colors" href="/faq">
            FAQs
          </Link>
        </nav>

        <div className="flex justify-end items-center gap-2 sm:gap-3">
          <button className="hidden md:inline-flex bg-primary hover:opacity-90 text-white rounded-full px-5 py-2 shadow-sm cursor-pointer">
            Download App
          </button>
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center size-10 rounded-md bg-white/10 border border-white/15 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-black/90 border-l border-white/10 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Clutch" width={24} height={24} />
            <span className="text-sm font-semibold">Clutch</span>
          </div>
          <button
            aria-label="Close menu"
            className="inline-flex items-center justify-center size-9 rounded-md bg-white/10 border border-white/15"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-5">
              <path d="M6 6l12 12M18 6L6 18" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4 text-sm text-white/80">
          <button
            className="hover:text-white transition-colors text-left"
            onClick={() => setMobileServicesOpen((v) => !v)}
          >
            Services
            <span className="ml-1 text-white/50">{mobileServicesOpen ? "−" : "+"}</span>
          </button>
          {mobileServicesOpen ? (
            <div className="ml-2 flex flex-col gap-2">
              {services.map((svc) => (
                <Link
                  key={svc.href}
                  className="hover:text-white transition-colors"
                  href={svc.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {svc.label}
                </Link>
              ))}
            </div>
          ) : null}
          <Link className="hover:text-white transition-colors" href="/price-index" onClick={() => setMenuOpen(false)}>
            Price index
          </Link>
          {/* <Link className="hover:text-white transition-colors" href="#" onClick={() => setMenuOpen(false)}>
            About Us
          </Link> */}
          <Link className="hover:text-white transition-colors" href="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <Link className="hover:text-white transition-colors" href="/faq" onClick={() => setMenuOpen(false)}>
            FAQs
          </Link>

          <div className="pt-2">
            <button className="w-full bg-primary hover:opacity-90 text-white rounded-full px-5 py-2 shadow-sm">
              Download App
            </button>
          </div>
        </nav>
      </aside>
    </header>
  );
}

