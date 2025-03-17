import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ReviewsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hidden md:block">
            <ChevronLeft className="h-5 w-5" />
          </button>
          {[1, 2, 3].map((item) => (
            <ReviewCard key={item} />
          ))}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hidden md:block">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

function ReviewCard() {
  return (
    <Card className="bg-white overflow-hidden border-0 shadow-sm">
      <CardContent className="p-8">
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Customer"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo volutpat tortor, a sed fusce ultrices massa
            malesuada elit.
          </p>
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div>
            <h4 className="font-bold">Regina Miles</h4>
            <p className="text-sm text-gray-500">Car user</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

