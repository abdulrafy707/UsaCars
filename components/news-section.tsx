import Image from "next/image"

export function NewsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <NewsCard title="SLR McLaren Stirling Moss: $4M, ..." image="/placeholder.svg?height=200&width=350" />
          <NewsCard title="Happy Friday!" image="/placeholder.svg?height=200&width=350" />
          <NewsCard title="From Battlefield to Driveway: Ne..." image="/placeholder.svg?height=200&width=350" />
        </div>
      </div>
    </section>
  )
}

interface NewsCardProps {
  title: string
  image: string
}

function NewsCard({ title, image }: NewsCardProps) {
  return (
    <div>
      <div className="mb-4 overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={350}
          height={200}
          className="w-full h-48 object-cover transition-transform hover:scale-105"
        />
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

