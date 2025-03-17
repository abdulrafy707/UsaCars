import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function HotOffersSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">Hot Lots</h2>
          <Link href="#" className="text-yellow-500 hover:underline flex items-center">
            View more <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <CarCard key={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CarCard() {
  return (
    <Card className="overflow-hidden border-0 shadow-lg">
      <div className="relative">
        <Badge className="absolute top-2 left-2 bg-yellow-400 text-black">HOT OFFER</Badge>
        <Image
          src="https://i.insider.com/592f4169b74af41b008b5977?width=800&format=jpeg&auto=webp"
          alt="Honda CR-V"
          width={300}
          height={200}
          className="w-full object-cover h-48"
        />
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-bold">2023 HONDA CR-V SPORT</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50" />
            <span className="ml-1 text-sm">4.5</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-yellow-500">$15,360</p>
              <p className="text-sm text-gray-500 line-through">$16,500</p>
            </div>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Buy Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

