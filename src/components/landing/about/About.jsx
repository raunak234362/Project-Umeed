const About = () => {
  const services = [
    "Physiotherapy",
    "Speech Therapy",
    "Occupational Therapy",
    "Play Therapy",
    "Postural Therapy",
    "Art & Music Therapy",
  ];

  const additionalPrograms = [
    "Mahila Sashaktikaran Awareness Camps",
    "Cultural Festivities Integration",
    "Community Engagement Activities",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1e3a8a] mb-2">
          About Umeed Kiran
        </h2>
        <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="p-6 animate-slide-in-left bg-blue-100/50 rounded-lg h-fit">
          <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">
            Established in 2014
          </h3>
          <p className="text-gray-700 mb-6">
            Umeed Kiran special school and rehabilitation center, run by Umeed
            Kiran Jan Kalyaan Samiti, is a registered organization under PWD
            act, 12A and 80G.
          </p>
          <ul className="space-y-3">
            {[
              "Comprehensive Rehabilitation Services",
              "Professional Therapeutic Support",
              "Cultural Integration Programs",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6 animate-slide-in-right">
          <div className="p-6 bg-orange-100/50 rounded-lg">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">
              Our Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-yellow-100/50">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-4">
              Additional Programs
            </h3>
            <ul className="space-y-3">
              {additionalPrograms.map((program, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span className="text-gray-700">{program}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
