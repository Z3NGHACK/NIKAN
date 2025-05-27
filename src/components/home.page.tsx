import Image from "next/image"
import { ProductCard } from "./product.card"
// import { Button } from "@/components/ui/button"
// import { ChevronDown } from "lucide-react"

export default function HomePage() {
    const products = [
        {
            id: 1,
            title: "98% Copper Granules",
            image: "/images/Copper-Granules.jpg",
            knownAs: "98% Granules",
            deliveredAs: "Bulk bags strapped on pallets.",
        },
        {
            id: 2,
            title: "Aluminium Scrap",
            image: "/images/alu.jpg",
            knownAs: "Mixed Aluminium Scrap",
            deliveredAs: "Various forms including sheets, extrusions, and castings.",
        },
        {
            id: 3,
            title: "Secondary Aluminium Ingots",
            image: "/images/alu_ingot.jpg",
            knownAs: "Recycled Aluminium Ingots",
            deliveredAs: "Standard ingot sizes on wooden pallets.",
        },
        {
            id: 4,
            title: "Cast",
            image: "/images/machine.jpg",   
            knownAs: "Tense, Die-Cast, Sand Cast",
            deliveredAs: "Loose, bagged on pallets.",
        },
        {
            id: 1,
            title: "98% Copper Granules",
            image: "/images/Copper-Granules.jpg",
            knownAs: "98% Granules",
            deliveredAs: "Bulk bags strapped on pallets.",
        },
        {
            id: 2,
            title: "Aluminium Scrap",
            image: "/images/alu.jpg",
            knownAs: "Mixed Aluminium Scrap",
            deliveredAs: "Various forms including sheets, extrusions, and castings.",
        },
        {
            id: 3,
            title: "Secondary Aluminium Ingots",
            image: "/images/alu_ingot.jpg",
            knownAs: "Recycled Aluminium Ingots",
            deliveredAs: "Standard ingot sizes on wooden pallets.",
        },
        {
            id: 4,
            title: "Cast",
            image: "/images/machine.jpg",   
            knownAs: "Tense, Die-Cast, Sand Cast",
            deliveredAs: "Loose, bagged on pallets.",
        },
        {
            id: 1,
            title: "98% Copper Granules",
            image: "/images/Copper-Granules.jpg",
            knownAs: "98% Granules",
            deliveredAs: "Bulk bags strapped on pallets.",
        },
        {
            id: 2,
            title: "Aluminium Scrap",
            image: "/images/alu.jpg",
            knownAs: "Mixed Aluminium Scrap",
            deliveredAs: "Various forms including sheets, extrusions, and castings.",
        },
        {
            id: 3,
            title: "Secondary Aluminium Ingots",
            image: "/images/alu_ingot.jpg",
            knownAs: "Recycled Aluminium Ingots",
            deliveredAs: "Standard ingot sizes on wooden pallets.",
        },
        {
            id: 4,
            title: "Cast",
            image: "/images/machine.jpg",   
            knownAs: "Tense, Die-Cast, Sand Cast",
            deliveredAs: "Loose, bagged on pallets.",
        },  
        
    ];

  return (
    <div className="min-h-screen bg-slate-900">

      {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
                <Image
                    src="/images/scrap_i.jpg"
                    alt="Aluminium scrap pieces"
                    fill
                    className="object-cover"
                    priority
                />
                <div
                    className="absolute inset-y-0 left-0 w-1/2"
                    style={{
                    background: 'linear-gradient(to right, rgba(15, 23, 42, 0.7) 60%, rgba(15, 23, 42, 0) 100%)',
                    }}
                ></div>
            </div>



            <div className="relative z-10 container mx-auto ">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
                    Nikan Trading
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                        Nikan specializes in the global trade of aluminum scrap, used machinery, and recyclable materials, emphasizing sustainability and quality.
                    </p>
                </div>
            </div>
        </section>

        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-blue-700 mb-8 leading-tight">About Us</h2>
                    <div className="max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Nikan specializes in the international trade of aluminum scrap, used machinery, and recyclable materials. With a focus on sustainability, we offer reliable sourcing and efficient logistics solutions to support manufacturers, recyclers, and industrial partners around the world. Every item we handle is carefully selected and processed to meet export standards, ensuring quality and consistency across all transactions.
                    </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <ProductCard
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        knownAs={product.knownAs}
                        deliveredAs={product.deliveredAs}
                        />
                    ))}
                </div>

            </div>
        </section>
    </div>
  )
}
