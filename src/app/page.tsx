"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const services = [
    {
      image: "/assets/images/petrol.svg",
      title: "Petrol",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
    {
      image: "/assets/images/gas.svg",
      title: "Gas",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
    {
      image: "/assets/images/diesel.svg",
      title: "Diesel",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
    {
      image: "/assets/images/inspection.svg",
      title: "Inspection",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
    {
      image: "/assets/images/towing.svg",
      title: "Towing",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
    {
      image: "/assets/images/emergency.svg",
      title: "Emergency",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
  ];
  return (
    <main className="font-dm-sans m-0 p-0">
      {/* Hero Section */}
      <div
        className="relative h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/assets/bg.png')",
        }}
      >
        {/* Navbar */}
        <header className="absolute top-0 inset-x-0">
          <div className="mx-auto max-w-[1200px] px-6 py-4 grid grid-cols-3 items-center">
            <div className="flex items-center gap-1">
              <Image src="/logo.png" alt="Clutch" width={32} height={32} />
              <span className="text-base font-semibold">Clutch</span>
            </div>
            <nav className="hidden md:flex justify-center items-center gap-8 text-sm text-white/80 whitespace-nowrap">
              <a
                className="hover:text-white transition-colors flex items-center gap-1"
                href="#"
              >
                <span>Services</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-3 opacity-80"
                >
                  <path
                    d="M5.5 7.5l4.5 5 4.5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Price index
              </a>
              <a className="hover:text-white transition-colors" href="#">
                About Us
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Contact Us
              </a>
              <a className="hover:text-white transition-colors" href="#">
                FAQs
              </a>
            </nav>
            <div className="flex justify-end items-center gap-3">
              <button className="hidden md:inline-flex bg-primary hover:opacity-90 text-white rounded-full px-5 py-2 shadow-sm cursor-pointer">
                Download App
              </button>
              <button
                aria-label="Open menu"
                className="md:hidden inline-flex items-center justify-center size-10 rounded-md bg-white/10 border border-white/15 cursor-pointer"
                onClick={() => setMenuOpen(true)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 z-40 transition-opacity ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <aside
          className={`fixed top-0 right-0 z-50 h-full w-72 bg-black/90 border-l border-white/10 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <Image src="/file.svg" alt="Clutch" width={24} height={24} />
              <span className="text-sm font-semibold">Clutch</span>
            </div>
            <button
              aria-label="Close menu"
              className="inline-flex items-center justify-center size-9 rounded-md bg-white/10 border border-white/15"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-4 text-sm text-white/80">
            <a
              className="hover:text-white transition-colors"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              className="hover:text-white transition-colors"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Price index
            </a>
            <a
              className="hover:text-white transition-colors"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
            <a
              className="hover:text-white transition-colors"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
            <a
              className="hover:text-white transition-colors"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              FAQs
            </a>
            <div className="pt-2">
              <button className="w-full bg-primary hover:opacity-90 text-white rounded-full px-5 py-2 shadow-sm">
                Download App
              </button>
            </div>
          </nav>
        </aside>

        <div className="flex flex-col items-center justify-center max-w-[70%] text-center mx-auto gap-y-7">
          <h2 className="text-5xl font-semibold">
            Fuel, gas, diesel & more. Delivered fast, wherever you are.
          </h2>
          <p className="text-md max-w-[70%] text-secondary">
            On-demand delivery of cooking gas, fuel and emergency vehicle
            services—no queues, no delays; just fast, reliable access 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-x-3">
            <button className="bg-primary rounded-full border-0 text-white px-5 py-2 flex flex-row gap-x-2 items-center">
              <Image
                src={"/assets/images/apple.png"}
                className="w-auto h-4"
                alt="Apple"
                width={1100}
                height={1000}
              ></Image>
              Download on iOS
            </button>
            <button className="bg-primary rounded-full border-0 text-white px-5 py-2 flex flex-row gap-x-2 items-center ">
              <Image
                src={"/assets/images/googleplay.png"}
                alt="Google Play"
                width={21}
                height={21}
              ></Image>
              Download on Android
            </button>
          </div>
          <div className=" flex flex-row justify-center gap-x-6 mt-10 items-center">
            <Image
              src={"/assets/images/qr.png"}
              alt="QRCODE"
              width={100}
              height={100}
            ></Image>
            <p className="text-sm text-white">Scan QR to download</p>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <section className="container-page py-12">
        {/* Tabs */}
        <ServicesTabs services={services} />
      </section>
    </main>
  );
}

type Service = {
  image: string;
  title: string;
  header: string;
  description: string;
};

function ServicesTabs({ services }: { services: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <div className="mx-auto max-w-[1200px]">
      {/* Category chips */}
      <div className="flex flex-wrap items-center gap-6 justify-center md:justify-between px-2">
        {services.map((svc, idx) => (
          <button
            key={svc.title}
            onClick={() => setActiveIndex(idx)}
            className={`rounded-xl cursor-pointer px-4 py-3 flex flex-col h-32 md:w-[140px] items-center gap-2 border transition-colors ${
              activeIndex === idx
                ? "border-none bg-white/5"
                : "border-none bg-white/0 hover:bg-white/5"
            }`}
          >
            <Image src={svc.image} className="w-auto h-20 object-contain" alt={svc.title} width={500} height={500} />
            <span className="text-xs text-white/80">{svc.title}</span>
          </button>
        ))}
      </div>

      {/* Feature card */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-yellow-400 text-sm">{active.title}</div>
            <h3 className="text-2xl md:text-3xl font-semibold mt-2 leading-snug">
              {active.header}
            </h3>
            <p className="text-sm text-white/70 mt-4 max-w-prose">
              {active.description}
            </p>
            <button className="mt-6 text-xs text-white/80 underline underline-offset-4">Learn more →</button>
          </div>
          <div className="flex md:justify-end">
            <Image
              src={active.image}
              alt={active.title}
              width={1000}
              height={10000}
              className="object-contain w-[90%] h-[300px] md:h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
