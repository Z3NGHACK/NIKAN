import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="py-20 bg-slate-900 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/scrap_i.jpg')" }}
        >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
            About Us
          </h1>
        </div>
      </section>

      {/* What Nikan Means */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-300">
            <h2 className="text-4xl font-light text-blue-700 mb-8 text-center">What "Nikan" Means</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              The name "Nikan" was created by combining "Ni" (ニホン: Japan) and "Kan" (カンボジア: Cambodia),
              symbolizing our strong ties to both countries. It reflects our vision to become a bridge for business,
              culture, and trust — starting with Japan and Cambodia, and expanding beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
              <h2 className="text-4xl font-light text-blue-700 mb-8 text-center">Our Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-16">
                At Nikan, we believe in building a future where global trade is rooted in trust, responsibility, and
                sustainability. By bridging Japan, Cambodia, and the world, we aim to create value beyond products —
                supporting people, protecting the environment, and growing together with every partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center animate-in fade-in-0 slide-in-from-left-6 duration-1000 delay-500 group">
                <div className="transform group-hover:scale-105 transition-all duration-300">
                  <h3 className="text-3xl font-light text-blue-700 mb-6">Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To give quality goods a second life and create new value through ethical upcycling and trade —
                    connecting recycled products with emerging markets to meet global needs.
                  </p>
                </div>
              </div>
              <div className="text-center animate-in fade-in-0 slide-in-from-right-6 duration-1000 delay-700 group">
                <div className="transform group-hover:scale-105 transition-all duration-300">
                  <h3 className="text-3xl font-light text-blue-700 mb-6">Vision</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To become a globally recognized trading company that bridges cultures and markets, empowering
                    communities and driving sustainable growth through innovative and ethical business practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
