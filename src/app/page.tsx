//

export default function Home() {
  const categories = [
    {
      image: "/assets/images/petrol.png",
      title: "Petrol",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
    {
      image: "/assets/images/gas.png",
      title: "Gas",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
    {
      image: "/assets/images/diesel.png",
      title: "Diesel",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
    {
      image: "/assets/images/inspection.png",
      title: "Inspection",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
    {
      image: "/assets/images/towing.png",
      title: "Towing",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
    {
      image: "/assets/images/emergency.png",
      title: "Emergency",
      header: "Fuel delivered to your doorstep in less than 30 mins.",
      description:
        "Get high-quality petrol delivered straight to your vehicle — whether you're at home, at the office, or anywhere else. Say goodbye to long queues and last-minute detours.",
    },
  ];
  return (
    <main className="font-sans m-0 p-0">
      {/* Hero Section */}
      <div
        className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/assets/bg.png')",
        }}
      >
        <div className="flex flex-col items-center justify-center max-w-[70%] text-center mx-auto gap-y-6">
          <h2 className="text-5xl font-bold">
            Fuel, gas, diesel & more. Delivered fast, wherever you are.
          </h2>
           <p className="text-md max-w-[70%] text-secondary">
            On-demand delivery of cooking gas, fuel and emergency vehicle
            services—no queues, no delays; just fast, reliable access 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-x-3">
             <button className="bg-primary rounded-full border-0 text-white px-5 py-2">
              Download on iOS
            </button>
             <button className="bg-primary rounded-full border-0 text-white px-5 py-2 ">
              Download on Android
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
