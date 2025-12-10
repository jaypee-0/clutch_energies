import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

type PolicySection = {
  title: string;
  points: string[];
};

const sections: PolicySection[] = [
  {
    title: "Information we collect",
    points: [
      "Account details you provide, like name, email, phone number, and address.",
      "Order and delivery details, including locations you enter for service.",
      "Device and app analytics to help us keep the app reliable and improve performance.",
    ],
  },
  {
    title: "How we use your data",
    points: [
      "To deliver fuel, gas, diesel, and roadside services you request.",
      "To communicate about orders, support, product updates, and safety notices.",
      "To improve reliability, prevent fraud, and comply with legal requirements.",
    ],
  },
  {
    title: "Sharing",
    points: [
      "Operational partners who help fulfill deliveries and payments, under strict confidentiality.",
      "Service providers for analytics, infrastructure, and communications, limited to necessary use.",
      "Law enforcement or regulators when required by law or to protect safety.",
    ],
  },
  {
    title: "Security",
    points: [
      "We use encryption in transit, access controls, and monitoring to protect data.",
      "Only authorized team members can access customer data for support or compliance.",
      "If an incident occurs, we will investigate and notify affected users where required.",
    ],
  },
  {
    title: "Your choices",
    points: [
      "Update your profile details anytime in the app.",
      "Request data deletion or a copy of your data by emailing privacy@clutchenergies.com.",
      "Manage marketing communications through preferences in the app or email opt-outs.",
    ],
  },
  {
    title: "Data retention",
    points: [
      "We keep data while your account remains active and as needed for legal or operational reasons.",
      "When data is no longer required, we delete or de-identify it following our retention schedule.",
    ],
  },
  {
    title: "Contact",
    points: [
      "Questions or requests: privacy@clutchenergies.com.",
      "For urgent safety concerns, use the app emergency flow or call our hotline.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | Clutch Energies",
  description:
    "How Clutch collects, uses, and protects your information. Learn about your choices and our security practices.",
};

export default function PrivacyPage() {
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
            <div className="text-primary text-sm font-medium">Privacy Policy</div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Your data, protected
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl">
              We keep your information safe so you can rely on Clutch for fuel, gas, diesel,
              and emergency services. This summary highlights how we collect, use, and protect
              your data.
            </p>
            <p className="text-xs text-white/50">
              Last updated: {new Date().getFullYear()}
            </p>
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
            <p className="text-base font-semibold text-white">Have a question?</p>
            <p className="text-sm text-white/70">
              Email{" "}
              <a
                href="mailto:privacy@clutchenergies.com"
                className="text-primary hover:text-white"
              >
                privacy@clutchenergies.com
              </a>{" "}
              or visit our contact page. We will respond as quickly as possible.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-sm text-white hover:opacity-90 transition-colors"
              >
                Contact us
              </a>
              <a
                href="mailto:privacy@clutchenergies.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-white/80 hover:text-white"
              >
                Email privacy
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

