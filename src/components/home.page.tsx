import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bg.jpeg"
            alt="Aluminium scrap pieces"
            fill
            className="object-cover opacity-60 animate-in zoom-in-105 duration-1000"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl animate-in slide-in-from-left-10 duration-1000 delay-300">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
              hello
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
              Nikan specializes in the international trade of aluminum scrap, used machinery, and recyclable materials.
              With a focus on sustainability, we offer reliable sourcing and efficient logistics solutions to support
              manufacturers, recyclers, and industrial partners around the world. Every item we handle is carefully
              selected and processed to meet export standards, ensuring quality and consistency across all transactions.
            </p>
            <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
            <h2 className="text-4xl md:text-5xl font-light text-blue-700 mb-8">What We Offer?</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              We connect global markets through ethical recycling and trade of aluminum scrap, used machinery, and
              recyclable materials.
            </p>
            <Link href="/service">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Our Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Nikan Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
            <h2 className="text-4xl md:text-5xl font-light text-blue-700 mb-8">Why Nikan?</h2>
          </div>
          <div className="max-w-5xl mx-auto animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-300">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8">
              Our decades-long experience in Japanese and Southeast Asian markets enables us to blend deep knowledge
              with a broad and growing global network. This unique combination allows us to navigate diverse business
              landscapes and deliver solutions that truly meet our clients' needs. We ensure all products meet
              high-quality standards and are delivered on time through reliable logistics. Most importantly, we put our
              clients first by offering flexible services tailored to their needs. This is why Nikan is the trusted
              partner that connects quality, sustainability, and growth.
            </p>
            <div className="text-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  Choose Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
