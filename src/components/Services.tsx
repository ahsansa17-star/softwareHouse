const services = [
  {
    title: "Web Development",
    points: [
      "Business Websites",
      "E-Commerce Websites",
      "Portfolio Websites",
      "Custom Web Applications",
    ],
  },
  {
    title: "Branding & Design",
    points: [
      "Logo Design",
      "Brand Identity",
      "UI/UX Design",
      "Website Design",
    ],
  },
  {
    title: "Software & AI Solutions",
    points: [
      "Custom Software Development",
      "AI Automation Systems",
      "AI Agents for Businesses",
      "SaaS Product Development",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 glow-amber">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30"
            >
              <h3 className="text-xl font-semibold mb-6 text-amber-400">
                {service.title}
              </h3>

              <ul className="space-y-2 text-gray-300">
                {service.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;