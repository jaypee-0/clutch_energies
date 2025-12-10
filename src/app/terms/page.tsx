import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

type Section = {
  title: string;
  points: string[];
};

const sections: Section[] = [
  {
    title: "Using Clutch services",
    points: [
      "You must provide accurate delivery details (address, access notes, contact).",
      "You are responsible for ensuring safe access to your vehicle, generator, or premises.",
      "Roadside support may require ID verification or proof of ownership where applicable.",
    ],
  },
  {
    title: "Orders, pricing, and payments",
    points: [
      "Prices shown are indicative and may vary by location, time, and order size. Final amounts are confirmed at checkout.",
      "Payments are collected in-app via supported methods. Business customers may receive invoicing on agreed terms.",
      "Promotions or discounts may be time-bound and subject to specific eligibility criteria.",
    ],
  },
  {
    title: "Cancellations and changes",
    points: [
      "You can cancel or reschedule before dispatch in the app. After dispatch, fees may apply to cover costs incurred.",
      "For roadside and towing, cancellation after a driver is en route may incur a call-out fee.",
      "If we cannot reach you at the delivery location, we may cancel and charge a failed delivery fee.",
    ],
  },
  {
    title: "Safety and compliance",
    points: [
      "Fuel and gas handling follows safety standards. Please follow crew instructions on-site.",
      "We may refuse service if conditions are unsafe (blocked access, hazardous environment, or prohibited location).",
      "Tampering with meters, cylinders, or equipment is prohibited and may lead to suspension.",
    ],
  },
  {
    title: "Liability",
    points: [
      "We provide services with reasonable skill and care, but uptime and arrival times can be affected by traffic, weather, or third parties.",
      "To the maximum extent permitted by law, indirect or consequential damages are excluded.",
      "Nothing in these terms limits liability that cannot be excluded by law.",
    ],
  },
  {
    title: "Data and privacy",
    points: [
      "We collect and use data as described in our Privacy Policy.",
      "Location data may be used to route deliveries and provide roadside help.",
      "For data requests or questions, contact privacy@clutchenergies.com.",
    ],
  },
  {
    title: "Business customers",
    points: [
      "Custom SLAs, pricing, and invoicing may be documented in separate agreements.",
      "If a separate contract exists, its terms take precedence over this summary where they conflict.",
    ],
  },
  {
    title: "Updates to these terms",
    points: [
      "We may update these terms to reflect service, legal, or policy changes.",
      "Significant changes will be communicated in-app or via email where practicable.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Terms of Service | Clutch Energies",
  description:
    "Summary of terms for using Clutch Energies delivery and roadside services.",
};

export default function TermsPage() {
  return (
    <main className="bg-black text-white font-dm-sans min-h-screen">
      <NavBar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[rgba(61,164,81,0.12)] blur-3xl" />
          <div className="absolute right-[-160px] top-12 h-[420px] w-[420px] rounded-full bg-[rgba(18,110,52,0.2)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1100px] px-4 md:px-6 py-14 md:py-[4.5rem] space-y-10">
          <div className="space-y-3">
            <div className="text-primary text-sm font-medium">Terms of Service</div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              How we work together
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl">
              These terms summarize how Clutch provides fuel, gas, diesel, and roadside services.
              For business customers, additional agreements may apply.
            </p>
            <p className="text-xs text-white/50">Last updated: {new Date().getFullYear()}</p>
          </div>

          <div className="grid gap-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3"
              >
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <ul className="space-y-2 text-sm md:text-base text-white/70 leading-relaxed list-disc list-inside">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3">
            <p className="text-base font-semibold text-white">Questions?</p>
            <p className="text-sm text-white/70">
              Visit the contact page or email us. For data-related questions, see the privacy policy.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-sm text-white hover:opacity-90 transition-colors"
              >
                Contact us
              </a>
              <a
                href="/privacy"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-white/80 hover:text-white"
              >
                View privacy policy
              </a>
              <a
                href="mailto:hello@clutchenergies.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-white/80 hover:text-white"
              >
                Email hello@clutchenergies.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

