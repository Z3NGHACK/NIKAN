import Image from "next/image"

interface ProductCardProps {
  title: string
  image: string
  knownAs: string
  deliveredAs: string
  className?: string
}

export function ProductCard({ title, image, knownAs, deliveredAs, className = "" }: ProductCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/3 h-48 md:h-auto relative">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>

        {/* Product Information */}
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">{title}</h3>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium text-slate-700">Known as:</span>
                <p className="text-slate-600">{knownAs}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-medium text-slate-700">Delivered as:</span>
                <p className="text-slate-600">{deliveredAs}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
