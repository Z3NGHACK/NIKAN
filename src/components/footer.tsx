export function Footer() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      content: "KAMITOMITA, HOKOTA CITY, IBARAKI 311-1532",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "nikantrading-jp@gmail.com",
    },
    {
      icon: "📞",
      title: "Contact",
      content: "(+81) 90-8521-5588",
    },
    {
      icon: "💬",
      title: "Telegram",
      content: "+855 85 998 299\n+81 90 5492 6905",
    },
  ]

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-8 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000">
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 group animate-in fade-in-0 slide-in-from-bottom-6"
                style={{ animationDelay: `${300 + index * 150}ms`, animationDuration: "1000ms" }}
              >
                <div className="w-6 h-6 text-blue-400 flex items-center justify-center text-xl transform group-hover:scale-125 transition-transform duration-300">
                  {info.icon}
                </div>
                <div className="transform group-hover:scale-105 transition-transform duration-300">
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  <p className="text-gray-300 text-sm whitespace-pre-line">{info.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1000">
          <p className="text-gray-400">© 2024 Nikan Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
