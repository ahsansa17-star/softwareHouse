const detailedServices = [
  {
    title: "E-Commerce Account Setup",
    description:
      "Complete setup of Shopify, WooCommerce, and marketplace accounts with product uploads and payment integration.",
  },
  {
    title: "Custom Business Software",
    description:
      "Internal management systems, dashboards, automation tools, and tailored digital infrastructure.",
  },
  {
    title: "AI Automation & Agents",
    description:
      "AI-powered workflow automation, smart assistants, chatbots, and productivity enhancement systems.",
  },
  {
    title: "SaaS Product Development",
    description:
      "Design and development of scalable software-as-a-service platforms for local and international markets.",
  },
];

const DetailedServices = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 glow-purple">
          Detailed Solutions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;