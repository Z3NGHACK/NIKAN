import { Footer } from "@/components/footer"

export default function BusinessPage() {
  const markets = ["Japan", "Cambodia", "Vietnam", "Thailand", "Laos", "Indonesia", "Australia"]

  const commitments = [
    {
      title: "Ethical Practices",
      description: "We ensure responsible recycling and trade that respect both people and the planet.",
    },
    {
      title: "Quality Assurance",
      description: "We deliver only reliable products that exceed customer expectations.",
    },
    {
      title: "Global Connections",
      description:
        "We bridge diverse markets and cultures to unlock new business opportunities and foster long-term partnerships.",
    },
    {
      title: "Sustainability",
      description: "We promote circular economy principles by reducing waste and encouraging resourcefulness.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="py-20 bg-slate-900 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/scrap_i.jpg')" }}
        >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
            Business
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-300">
            Specialized Recycling, Ethical Upcycling & Sustainable Trade
          </p>
        </div>
      </section>

      {/* Business Description */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Nikan, we specialize in ethical upcycling and the international trade of quality goods, focusing on
              sustainability, innovation, and global connections. Our core business is to breathe new life into products
              by carefully restoring, repurposing, and responsibly sourcing recyclable materials — meeting the demands
              of emerging markets worldwide.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are actively involved in the collection and trade of aluminum scrap, used machinery, and other
              recyclable resources, primarily from the automotive and manufacturing sectors. By providing raw materials
              and upcycled products, we contribute to sustainable manufacturing and responsible resource circulation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-blue-700 mb-12 text-center animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
            Our Commitments
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6"
                style={{ animationDelay: `${300 + index * 200}ms`, animationDuration: "1000ms" }}
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{commitment.title}</h3>
                <p className="text-gray-700 leading-relaxed">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Markets */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-blue-700 mb-12 text-center animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
            Our Business Markets
          </h2>
          <p className="text-xl text-gray-700 text-center mb-8 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-300">
            Markets we specialize in:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
            {markets.map((market, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-6"
                style={{ animationDelay: `${500 + index * 100}ms`, animationDuration: "1000ms" }}
              >
                <span className="text-lg font-medium text-slate-800">{market}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
