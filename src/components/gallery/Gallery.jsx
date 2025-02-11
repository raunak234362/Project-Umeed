const Gallery=()=> {
    const services = [
      {
        title: "Physiotherapy",
        description: "Professional physiotherapy services for rehabilitation and development",
        imageUrl: "https://project-umeed-hz5y.vercel.app/images/physiotherapy.jpg",
      },
      {
        title: "Speech Therapy",
        description: "Specialized speech and language development programs",
        imageUrl: "https://project-umeed-hz5y.vercel.app/images/speech-therapy.jpg",
      },
      {
        title: "Occupational Therapy",
        description: "Helping develop daily living and motor skills",
        imageUrl: "https://project-umeed-hz5y.vercel.app/images/occupational-therapy.jpg",
      },
      {
        title: "Special Education",
        description: "Customized learning programs for special needs",
        imageUrl: "https://project-umeed-hz5y.vercel.app/images/special-education.jpg",
      },
      {
        title: "Behavioral Therapy",
        description: "Supporting positive behavioral development",
        imageUrl: "https://project-umeed-hz5y.vercel.app/images/behavioral-therapy.jpg",
      },
      {
        title: "Early Intervention",
        description: "Early developmental support programs",
        imageUrl: "https://project-umeed-hz5y.vercel.app/images/early-intervention.jpg",
      },
    ]
  
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1e3a8a]">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.imageUrl || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target
                    if (target instanceof HTMLImageElement) {
                        target.src = "/placeholder.svg"
                    }
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e3a8a]/90 to-transparent p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>
              <div className="absolute inset-0 bg-[#1e3a8a]/10 group-hover:bg-[#1e3a8a]/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Gallery