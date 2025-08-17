import Image from "next/image";
import { HeaderPage } from "@/components/header-page";
import { Footer } from "@/components/footer";

export default function ServicePage() {
  const fromJapanServices = [
    "Used construction and agricultural machinery",
    "Industrial tools and heavy-duty equipment",
    "Metal scrap materials",
    "Recycled aluminum products",
    "Recycled plastic materials",
    "Used home appliances and household goods (air conditioners, refrigerators, tableware, etc.)",
    "Automotive spare parts",
  ];

  const fromSeaServices = [
    "Refined aluminum ingots",
    "Recycled plastic for circular economy",
    "Agriculture Products",
    "Custom product sourcing tailored to client requirements",
  ];

  // Custom alt texts for each image
  const imageAltTexts = [
    "PET",
    "PET (2)",
    "PP",
    "PP + PET",
    "HDPE (4)",
    "HDPE (NA)",
    "HDPE (3)",
    "PET",
    "LLDPE (New)",
    "PP (NA)",
    "H50005 HDPE (NPW)",
    "ABS (New)",
    "",
    "",
    "",
    "",
    "",
    "PMMA",
    "",
    "PTE (t+)",
    "",
    "",
    "tube",
    "",
    "PET",
    "Machine",
    "",
  ];

  const serviceImages = Array.from({ length: 27 }, (_, i) => ({
    src: `/images/p${i + 1}.jpg`,
    alt: imageAltTexts[i] || `PP`
  }));


  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/b11.jpg" alt="Industrial background" fill className="object-cover opacity-60" priority />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="w-12 h-12 bg-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center animate-in zoom-in-50 duration-1000">
            <span className="text-white text-5xl">🌍</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-300">
            Global Trading Services
          </h1>
        </div>
      </section>

      {/* Service Images Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviceImages.map((image, index) => (
              <div
                key={index}
                className="relative h-48 rounded-lg overflow-hidden shadow-md group animate-in fade-in-0 slide-in-from-bottom-6"
                style={{ animationDelay: `${300 + index * 150}ms`, animationDuration: "1000ms" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay (hidden by default, visible on hover) */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                {/* Text (hidden by default, visible on hover) */}
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Japan to Southeast Asia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-blue-700 mb-8 text-center animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
              From Japan to Southeast Asia
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {fromJapanServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:shadow-md transform hover:scale-105 transition-all duration-300 animate-in fade-in-0 slide-in-from-left-6"
                  style={{ animationDelay: `${300 + index * 100}ms`, animationDuration: "1000ms" }}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* From Southeast Asia to Japan and Beyond */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-blue-700 mb-8 text-center animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
              From Southeast Asia to Japan and Beyond
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {fromSeaServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 animate-in fade-in-0 slide-in-from-right-6"
                  style={{ animationDelay: `${300 + index * 150}ms`, animationDuration: "1000ms" }}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
