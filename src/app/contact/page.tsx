import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="py-20 bg-slate-900 bg-cover bg-center h-60"
        style={{ backgroundImage: "url('/images/scrap_i.jpg')" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-300">
            Ready to start your sustainable trading journey? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="animate-in fade-in-0 slide-in-from-left-6 duration-1000 delay-300">
              <h2 className="text-3xl font-light text-blue-700 mb-8">Let's Connect</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transform hover:scale-105 transition-all duration-300">
                  <div className="w-6 h-6 text-blue-600 mt-1 flex items-center justify-center">📍</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Location</h3>
                    <p className="text-gray-700">KAMITOMITA, HOKOTA CITY, IBARAKI 311-1532</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transform hover:scale-105 transition-all duration-300">
                  <div className="w-6 h-6 text-blue-600 mt-1 flex items-center justify-center">✉️</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <p className="text-gray-700">nikantrading-jp@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transform hover:scale-105 transition-all duration-300">
                  <div className="w-6 h-6 text-blue-600 mt-1 flex items-center justify-center">📞</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Contact</h3>
                    <p className="text-gray-700">(+81) 90-8521-5588</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transform hover:scale-105 transition-all duration-300">
                  <div className="w-6 h-6 text-blue-600 mt-1 flex items-center justify-center">💬</div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Telegram</h3>
                    <p className="text-gray-700">+855 85 998 299</p>
                    <p className="text-gray-700">+81 90 5492 6905</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm animate-in fade-in-0 slide-in-from-right-6 duration-1000 delay-500">
              <h3 className="text-2xl font-light text-blue-700 mb-6">Send us a message</h3>

              <form className="space-y-6">
                <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-800">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full transition-all duration-300 focus:scale-105"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
