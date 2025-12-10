"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";

type Testimonial = { quote: string; name: string; location: string };

const testimonials: Testimonial[] = [
  {
    quote:
      "I was stranded late at night with no fuel. Clutch showed up in 15 minutes — absolute lifesavers!",
    name: "Femi A.",
    location: "Lagos, Nigeria",
  },
  {
    quote:
      "One app for fuel, towing, and diagnostics? Genius. It’s like roadside assistance made smarter. The best part is I don’t have to keep multiple contacts anymore — everything is in the app.",
    name: "Daniel E.",
    location: "Port Harcourt",
  },
  {
    quote:
      "Their cooking gas delivery is so convenient. No more carrying heavy cylinders or waiting for the gas man.",
    name: "Zainab M.",
    location: "Abuja, Nigeria",
  },
  {
    quote:
      "As a fleet manager, I can’t imagine going back to managing fuel logistics manually. Clutch just works — invoices are clear, deliveries are on time, and my team saves hours every week.",
    name: "Samuel I",
    location: "Abuja, Nigeria",
  },
  {
    quote:
      "Our business relies on diesel to run generators. Clutch is fast, dependable, and always on time. Pricing is transparent and service is consistent even during peak hours.",
    name: "Tolu I.",
    location: "Lagos, Nigeria",
  },
  {
    quote:
      "Used to rely on two or three different apps, now I just use Clutch. It’s fast, simple, and made for people like me who want things to just work.",
    name: "Tricia B.",
    location: "Enugu, Nigeria",
  },
  {
    quote:
      "From booking to delivery, the experience is smooth. Notifications, real-time tracking, and friendly support — honestly a breath of fresh air.",
    name: "Nonso K.",
    location: "Abuja, Nigeria",
  },
  {
    quote:
      "Had an early morning emergency before work. Clutch got to me quickly, fueled me up, and I still made it in time for my meeting.",
    name: "Bose O.",
    location: "Ibadan, Nigeria",
  },
  {
    quote:
      "I recommend Clutch to anyone running a small business with vehicles. Scheduling deliveries for off-hours has been a game changer for us.",
    name: "Ahmed S.",
    location: "Kano, Nigeria",
  },
];

export default function Home() {
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
    <main className="font-dm-sans m-0 p-0 bg-black">
      {/* Hero Section */}
      <div
        className="relative min-h-[90vh] lg:min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/assets/bg.png')",
        }}
      >
        <NavBar variant="overlay" />

        <div className="flex flex-col items-center justify-center w-full px-6 text-center mx-auto gap-y-5 sm:gap-y-7 max-w-[95%] md:max-w-[70%]">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Fuel, gas, diesel & more. Delivered fast, wherever you are.
          </h2>
          <p className="text-sm md:text-md max-w-full md:max-w-[70%] text-secondary">
            On-demand delivery of cooking gas, fuel and emergency vehicle
            services—no queues, no delays; just fast, reliable access 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-3">
            <button className="bg-primary rounded-full border-0 text-white px-5 py-2 flex flex-row gap-x-2 items-center text-xs md:text-sm">
              <Image
                src={"/assets/images/apple.png"}
                className="w-auto h-4"
                alt="Apple"
                width={1100}
                height={1000}
              ></Image>
              Download on iOS
            </button>
            <button className="bg-primary rounded-full border-0 text-white px-5 py-2 flex flex-row gap-x-2 items-center text-xs md:text-sm">
              <Image
                src={"/assets/images/googleplay.png"}
                alt="Google Play"
                width={21}
                height={21}
              ></Image>
              Download on Android
            </button>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-x-6 mt-8 sm:mt-10 items-center">
            <Image
              src={"/assets/images/qr.png"}
              alt="QRCODE"
              width={80}
              height={80}
            ></Image>
            <p className="text-xs sm:text-sm text-white text-center">Scan QR to download</p>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <section className=" py-10 sm:py-12">
        {/* Tabs */}
        <ServicesTabs services={services} />
      </section>

      {/* All-in-one App Section */}
      <section className="px-4 md:px-0 container-page py-14 sm:py-16 mx-auto max-w-[1200px]">
        <div className="stack-sm items-center">
          <div className="card h-[280px] sm:h-[360px] md:h-[420px] flex items-center justify-center order-2 md:order-1">
            <Image
              src="/assets/images/sec1.png"
              alt="App preview"
              width={420}
              height={360}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="relative space-y-4 order-1 md:order-2 px-2 sm:px-0">
            <div className="text-yellow-400 text-sm">All in one app</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold max-w-full md:max-w-[70%]">
              Ready when you need it
            </h2>
            <p className="text-sm text-white/70 max-w-full md:max-w-[70%]">
              From emergency roadside help to daily refueling, Clutch is built
              for convenience, speed, and peace of mind. Whether it’s your car
              or your kitchen, we’ll keep you powered up.
            </p>
            <div className="flex flex-row gap-x-3">
              <button className="bg-primary rounded-full border-0 text-white px-5 py-2 flex flex-row gap-x-2 items-center cursor-pointer text-xs sm:text-sm">
                <Image
                  src={"/assets/images/apple.png"}
                  className="w-auto h-4"
                  alt="Apple"
                  width={1100}
                  height={1000}
                ></Image>
                Download on iOS
              </button>
              <button className="bg-primary rounded-full border-0 text-white px-5 py-2 flex flex-row gap-x-2 items-center cursor-pointer text-xs sm:text-sm">
                <Image
                  src={"/assets/images/googleplay.png"}
                  alt="Google Play"
                  width={21}
                  height={21}
                ></Image>
                Download on Android
              </button>
            </div>
            <div className="pointer-events-none absolute -z-10 right-0 top-0 h-40 w-60 rounded-full blur-2xl bg-[radial-gradient(200px_120px_at_80%_20%,rgba(34,197,94,.25),transparent)]" />
          </div>
        </div>
      </section>

      {/* For Business Section */}
      <section className="px-4 md:px-0 container-page py-14 sm:py-16 mx-auto max-w-[1200px]">
        <div className="stack-sm items-center">
          <div className="space-y-4">
            <div className="text-yellow-400 text-sm">For business</div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold max-w-full md:max-w-[70%]">
              Reduce downtime and fuel delays with Clutch for business
            </h2>
            <p className="text-sm text-white/70 max-w-full md:max-w-[70%]">
              Ready to simplify your fueling process? Contact us today to create
              a custom fleet service plan that fits your operations.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="cursor-pointer h-9 px-4 rounded-full text-xs bg-white text-black hover:bg-white/90 ">
                Fleet services
              </button>
              <button className="cursor-pointer h-9 px-4 rounded-full text-xs bg-white/10 border border-white/15 hover:bg-white/15">
                Become a partner
              </button>
            </div>
          </div>
          <div className="card h-[260px] sm:h-[320px] md:h-[400px] flex items-center justify-center rounded-xl">
            <Image
              src="/assets/images/sec2.png"
              alt="Fleet vehicles"
              width={520}
              height={360}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="hidden md:block py-16 sm:py-20 h-[90vh] sm:h-screen overflow-y-hidden max-w-[1200px] mx-auto">
        <TestimonialsSection testimonials={testimonials} />
      </section>
      <section className="md:hidden px-4 py-14">
        <TestimonialsSectionMobile testimonials={testimonials} />
      </section>

       {/* CTA Banner */}
      <section className="px-4 md:px-0 container-page py-10">
         <div className="cta-banner px-6 md:px-12 py-16 md:py-20 max-w-[1100px] mx-auto">
           <div className="text-center">
             <h4 className="text-2xl md:text-[32px] font-semibold leading-tight font-dm-sans">
               Join thousands of users
               <br className="hidden md:block" /> who use Clutch everyday
             </h4>
             <div className="flex flex-wrap justify-center gap-3 mt-6">
               <button className="cursor-pointer h-10 px-4 rounded-full text-sm bg-white text-black hover:bg-white/90 inline-flex items-center gap-2">
                 <Image src="/assets/images/apple_green.png" alt="iOS" width={16} height={16} />
                 Download on iOS
               </button>
               <button className="cursor-pointer h-10 px-4 rounded-full text-sm bg-white text-black hover:bg-white/90 inline-flex items-center gap-2">
                 <Image src="/assets/images/android_green.png" alt="Android" width={18} height={18} />
                 Download on Android
               </button>
             </div>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
              <Image src="/assets/images/qr.png" alt="QR" width={84} height={84} />
              <span className="text-white/80 text-sm sm:text-lg">Scan QR to Download</span>
             </div>
           </div>
         </div>
       </section>

       {/* Footer */}
       <Footer />
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
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center md:justify-between px-2 md:max-w-[90%] mx-auto mb-6">
        {services.map((svc, idx) => (
          <button
            key={svc.title}
            onClick={() => setActiveIndex(idx)}
            className={`rounded-xl cursor-pointer px-4 py-3 flex flex-col h-28 sm:h-32 min-w-[120px] sm:min-w-[140px] w-full sm:w-auto items-center gap-2 border transition-colors ${
              activeIndex === idx
                ? "border-none bg-white/5"
                : "border-none bg-white/0 hover:bg-white/5"
            }`}
          >
            <Image
              src={svc.image}
              className="w-auto h-16 sm:h-20 object-contain"
              alt={svc.title}
              width={500}
              height={500}
            />
            <span className="text-xs text-white/80 text-center">{svc.title}</span>
          </button>
        ))}
      </div>

      {/* Feature card */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 sm:p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-yellow-400 text-sm">{active.title}</div>
            <h3 className="text-2xl md:text-3xl font-semibold mt-2 leading-snug">
              {active.header}
            </h3>
            <p className="text-sm text-white/70 mt-4 max-w-prose">
              {active.description}
            </p>
            <button className="mt-6 text-xs text-white/80 underline underline-offset-4">
              Learn more →
            </button>
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

function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="mt-8 px-4 md:px-0">
      <div className="footer-divider" />
      <div className="container-page max-w-[1100px] mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Clutch" width={28} height={28} />
              <span className="text-base font-semibold">Clutch</span>
            </div>
            <p className="text-white/70 text-sm max-w-[46ch]">
              On-demand delivery of cooking gas, fuel and emergency vehicle services—no queues, no delays; just fast, reliable access 24/7.
            </p>
            <div className="flex gap-3 pt-1"><div className="flex flex-col sm:flex-row gap-x-3">
            <button className="bg-primary rounded-full border-0 text-white text-xs sm:text-sm px-5 py-2 flex flex-row gap-x-2 items-center">
              <Image
                src={"/assets/images/apple.png"}
                className="w-auto h-4"
                alt="Apple"
                width={1100}
                height={1000}
              ></Image>
              Download on iOS
            </button>
            <button className="bg-primary rounded-full border-0 text-white text-xs sm:text-sm px-5 py-2 flex flex-row gap-x-2 items-center ">
              <Image
                src={"/assets/images/googleplay.png"}
                alt="Google Play"
                width={21}
                height={21}
              ></Image>
              Download on Android
            </button>
          </div>
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <div className="text-white/70 text-sm mb-2">Subscribe to updates</div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 h-10 rounded-md bg-white/5 border border-white/10 px-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  aria-label="Email address"
                />
                <button type="submit" className="h-10 px-4 rounded-md bg-primary text-white text-sm">Subscribe</button>
              </form>
              {/* Socials */}
              <div className="flex items-center gap-3 mt-4">
                <a aria-label="Twitter" href="#" className="size-9 grid place-items-center rounded-md bg-white/5 border border-white/10 hover:bg-white/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-white/80"><path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.9-2.6 1.1-.7-.8-1.7-1.3-2.8-1.3-2.1 0-3.8 1.7-3.8 3.8 0 .3 0 .6.1.9-3.2-.2-6.1-1.7-8-4.1-.3.6-.5 1.2-.5 1.9 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.8 3.7 2.8-1.4 1.1-3.1 1.8-5 1.8h-1c1.8 1.1 3.9 1.8 6.2 1.8 7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.4-1.2 1.9-2z"/></svg>
                </a>
                <a aria-label="Instagram" href="#" className="size-9 grid place-items-center rounded-md bg-white/5 border border-white/10 hover:bg-white/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-white/80"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/></svg>
                </a>
                <a aria-label="LinkedIn" href="#" className="size-9 grid place-items-center rounded-md bg-white/5 border border-white/10 hover:bg-white/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-white/80"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.63-1.2 2.17-2.46 4.46-2.46 4.77 0 5.65 3.14 5.65 7.22V24h-5v-7.1c0-1.7 0-3.88-2.37-3.88-2.37 0-2.73 1.86-2.73 3.76V24h-5V8z"/></svg>
                </a>
                <a aria-label="Facebook" href="#" className="size-9 grid place-items-center rounded-md bg-white/5 border border-white/10 hover:bg-white/10">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-white/80"><path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.4v-2.9h2.4V9.4c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4v1.7h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <div className="text-white/60 text-sm">Company</div>
            <a className="text-sm text-white/80 hover:text-white" href="#">About Us</a>
            <Link className="text-sm text-white/80 hover:text-white" href="/contact">Contact</Link>
            <a className="text-sm text-white/80 hover:text-white" href="#">Careers</a>
            <a className="text-sm text-white/80 hover:text-white" href="#">Blog</a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-white/60 text-sm">Services</div>
            <Link className="text-sm text-white/80 hover:text-white" href="/services/petrol">Petrol delivery</Link>
            <Link className="text-sm text-white/80 hover:text-white" href="/services/gas">Gas delivery</Link>
            <Link className="text-sm text-white/80 hover:text-white" href="/services/diesel">Diesel delivery</Link>
            <Link className="text-sm text-white/80 hover:text-white" href="/services/roadside">Roadside & towing</Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Clutch Energies. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="/privacy">Privacy</a>
            <a className="hover:text-white" href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3, 6);
  const column3 = testimonials.slice(6, 8);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <section className="py-20 overflow-hidden max-w-[80%] mx-auto max-h-[95%]">
      <div className="mx-auto max-w-[1100px] px-6 text-center space-y-3 mb-7">
        <div className="text-yellow-400 text-sm">Testimonials</div>
        <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
          Don’t take our word for it — hear theirs
        </h3>
      </div>
      <div
        className="lg:flex gap-3 h-full hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex-1 overflow-hidden">
          <motion.div
            animate={isHovered ? {} : { y: [-500, 500] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex flex-col gap-3"
          >
            {[...column1, ...column1, ...column1].map((t, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-5 text-white/85 text-sm min-h-[150px]"
              >
                <p className="leading-relaxed">{t.quote}</p>
                <div className="mt-4 text-white/70 text-xs">
                  <div className="font-medium">{t.name}</div>
                  <div>{t.location}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex-1 overflow-hidden">
          <motion.div
            animate={isHovered ? {} : { y: [100, -500] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex flex-col gap-3"
          >
            {[...column2, ...column2, ...column2].map((t, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-5 text-white/85 text-sm min-h-[150px]"
              >
                <p className="leading-relaxed">{t.quote}</p>
                <div className="mt-4 text-white/70 text-xs">
                  <div className="font-medium">{t.name}</div>
                  <div>{t.location}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex-1 overflow-hidden">
          <motion.div
            animate={isHovered ? {} : { y: [-500, 200] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
              delay: 2,
            }}
            className="flex flex-col gap-3"
          >
            {[...column3, ...column3, ...column3, ...column3].map((t, idx) => (
              <div
                key={idx}
                className="glass rounded-xl p-5 text-white/85 text-sm min-h-[150px]"
              >
                <p className="leading-relaxed">{t.quote}</p>
                <div className="mt-4 text-white/70 text-xs">
                  <div className="font-medium">{t.name}</div>
                  <div>{t.location}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSectionMobile({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <div className="text-yellow-400 text-sm">Testimonials</div>
        <h3 className="text-2xl font-semibold leading-tight">Trusted on the go</h3>
        <p className="text-sm text-white/70">
          Real stories from drivers, homes, and businesses who rely on Clutch.
        </p>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar snap-x snap-mandatory">
        {testimonials.map((t) => (
          <div
            key={t.quote}
            className="min-w-[240px] max-w-[260px] snap-start glass rounded-xl p-5 text-white/85 text-sm space-y-3"
          >
            <p className="leading-relaxed">{t.quote}</p>
            <div className="text-white/70 text-xs">
              <div className="font-medium">{t.name}</div>
              <div>{t.location}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
