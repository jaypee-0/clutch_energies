import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";

type ContactChannel = {
  title: string;
  description: string;
  href: string;
  action: string;
  variant: "mail" | "phone" | "handshake";
};

const contactChannels: ContactChannel[] = [
  {
    title: "Customer support",
    description:
      "24/7 help for deliveries, emergencies, and anything in the app.",
    href: "mailto:hello@clutchenergies.com",
    action: "Email hello@clutchenergies.com",
    variant: "mail",
  },
  {
    title: "Call or WhatsApp",
    description: "Speak with the team when you need fast assistance.",
    href: "tel:+2347012345678",
    action: "+234 701 234 5678",
    variant: "phone",
  },
  {
    title: "Partnerships & fleet",
    description: "Custom plans for businesses, estates, and fleets.",
    href: "mailto:partnerships@clutchenergies.com",
    action: "partnerships@clutchenergies.com",
    variant: "handshake",
  },
];

const infoBlocks = [
  {
    title: "Support hours",
    lines: [
      "Customer support: 24/7",
      "Emergency roadside: always on",
      "Sales & partnerships: Mon–Fri, 8am–6pm (WAT)",
    ],
  },
  {
    title: "Where we operate",
    lines: [
      "Primary cities: Lagos, Abuja, Port Harcourt",
      "More locations rolling out soon",
      "Need us somewhere else? Let us know.",
    ],
  },
  {
    title: "Visit our office",
    lines: [
      "Clutch Energies HQ",
      "Lekki Phase 1, Lagos, Nigeria",
      "Book a visit ahead so we can host you properly.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Contact Clutch Energies",
  description:
    "Talk with Clutch for support, emergencies, or partnerships. We respond quickly and keep you powered up.",
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white font-dm-sans min-h-screen">
      <NavBar />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -left-28 -top-24 h-80 w-80 rounded-full bg-[rgba(61,164,81,0.16)] blur-3xl" />
          <div className="absolute right-[-120px] top-24 h-96 w-96 rounded-full bg-[rgba(18,110,52,0.22)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1100px] px-4 md:px-6 py-16 md:py-20 space-y-10">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white">Contact</span>
          </div>

          <div className="grid gap-10 md:grid-cols-5 items-start">
            <div className="md:col-span-3 space-y-6">
              <div className="text-primary text-sm font-medium">Contact</div>
              <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                Talk to the Clutch team
              </h1>
              <p className="text-white/70 text-sm md:text-base max-w-2xl">
                Need fuel, gas, or emergency help? Want to partner with us for
                your fleet or estate? Reach out using the channels below and a
                real person will respond quickly.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactChannels.map((channel) => (
                  <ContactCard key={channel.title} {...channel} />
                ))}
              </div>

              <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3 max-w-2xl">
                <div className="text-sm text-yellow-300 font-medium uppercase tracking-wide">
                  Pro tip
                </div>
                <p className="text-white/85 text-base font-semibold">
                  The fastest way to get help is in the app
                </p>
                <p className="text-white/70 text-sm">
                  Open the Clutch app and tap Help to chat with us instantly,
                  track your request, and share your live location for roadside
                  support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    Live location sharing
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    Delivery updates
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                    Escalations
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="card rounded-2xl p-6 md:p-7 border border-white/10 shadow-xl space-y-5">
                <div className="space-y-1">
                  <div className="text-sm text-white/60">Send a note</div>
                  <h2 className="text-xl font-semibold">We will reply fast</h2>
                  <p className="text-white/60 text-sm">
                    Share a few details and we will reach out by email. For
                    urgent roadside help, please call or use the Clutch app.
                  </p>
                </div>

                <form
                  action="mailto:hello@clutchenergies.com"
                  method="post"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Adaeze Obasi"
                        className="w-full h-11 rounded-md bg-white/5 border border-white/10 px-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full h-11 rounded-md bg-white/5 border border-white/10 px-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone (optional)" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234 700 000 0000"
                        className="w-full h-11 rounded-md bg-white/5 border border-white/10 px-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                      />
                    </Field>
                    <Field label="Topic" htmlFor="topic">
                      <select
                        id="topic"
                        name="topic"
                        className="w-full h-11 rounded-md bg-white/5 border border-white/10 px-3 text-sm text-white/80 focus:outline-none focus:ring-2 focus:ring-white/20"
                        defaultValue="support"
                      >
                        <option value="support">Support</option>
                        <option value="partnerships">Partnerships</option>
                        <option value="enterprise">Enterprise & fleets</option>
                        <option value="billing">Billing</option>
                        <option value="other">Something else</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="How can we help?" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Share context so we can help quickly."
                      className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                    />
                  </Field>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-primary text-sm font-medium text-white hover:opacity-90 transition-colors shadow-sm"
                    >
                      Send message
                    </button>
                    <div className="text-xs text-white/60">
                      Or email us directly at{" "}
                      <a
                        className="text-primary hover:text-white"
                        href="mailto:hello@clutchenergies.com"
                      >
                        hello@clutchenergies.com
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 py-12 md:py-14 grid gap-6 md:grid-cols-3">
          {infoBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-3"
            >
              <div className="text-sm text-white/60">{block.title}</div>
              <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
                {block.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
};

function Field({ label, htmlFor, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-white/75" htmlFor={htmlFor}>
      <span className="text-white/80">{label}</span>
      {children}
    </label>
  );
}

function ContactCard({
  title,
  description,
  href,
  action,
  variant,
}: ContactChannel) {
  return (
    <div className="glass rounded-2xl border border-white/10 p-4 sm:p-5 flex gap-3 sm:gap-4">
      <div className="flex size-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/80">
        {getIcon(variant)}
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-base text-white">{title}</p>
          <span className="px-2 py-1 rounded-full text-[11px] uppercase tracking-wide bg-white/5 border border-white/10 text-white/60">
            {variant === "mail"
              ? "Email"
              : variant === "phone"
                ? "Call"
                : "Business"}
          </span>
        </div>
        <p className="text-sm text-white/70 leading-relaxed">{description}</p>
        <a
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-white transition-colors"
        >
          {action}
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}

function getIcon(variant: ContactChannel["variant"]) {
  if (variant === "mail") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="size-5"
        strokeWidth="1.6"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }

  if (variant === "phone") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="size-5"
        strokeWidth="1.6"
      >
        <path d="M5.5 4h3l1.5 4-2 1a9.5 9.5 0 004 4l1-2 4 1.5v3A2.5 2.5 0 0014.5 19 12.5 12.5 0 015 9.5 2.5 2.5 0 005.5 4z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="size-5"
      strokeWidth="1.6"
    >
      <path d="M16 3h5v5" />
      <path d="M8 21H3v-5" />
      <path d="M3 16l7-7a4 4 0 015.7.04L21 13" />
      <path d="M8.5 8.5l-4-4" />
      <path d="M15.5 15.5l4 4" />
    </svg>
  );
}

