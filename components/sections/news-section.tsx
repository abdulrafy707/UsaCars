import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

export function NewsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Latest News</h2>
          <Link
            href="/news"
            className="hidden md:flex items-center text-amber-500 hover:text-amber-600 font-medium transition-colors"
          >
            View all articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <NewsCard
            title="SLR McLaren Stirling Moss: $4M Supercar Auction"
            image="https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop"
            date="March 15, 2023"
            category="Auctions"
          />
          <NewsCard
            title="Happy Friday! Weekend Car Show Roundup"
            image="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop"
            date="March 10, 2023"
            category="Events"
          />
          <NewsCard
            title="From Battlefield to Driveway: New Military Auctions"
            image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop"
            date="March 5, 2023"
            category="Special Sales"
          />
        </div>

        <div className="flex justify-center md:hidden mt-8">
          <Link
            href="/news"
            className="flex items-center text-amber-500 hover:text-amber-600 font-medium transition-colors"
          >
            View all articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

interface NewsCardProps {
  title: string
  image: string
  date: string
  category: string
}

function NewsCard({ title, image, date, category }: NewsCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </div>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="font-bold text-xl mb-3 group-hover:text-amber-500 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis semper lectus, vel ultricies elit.
        </p>
        <Link
          href="#"
          className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium transition-colors mt-auto"
        >
          Read more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

