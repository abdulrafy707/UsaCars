import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/210143/pexels-photo-210143.jpeg?cs=srgb&dl=pexels-pixabay-210143.jpg&fm=jpg"
          alt="Sports Cars"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 z-10">
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 z-10">
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          WELCOME TO <span className="text-yellow-400">USA CARS</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Lorem ipsum dolor sit amet consectetur. Lacinia duis senectus praesent non urna justo parturient.
        </p>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Register</Button>
        <div className="absolute bottom-8 flex gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <button key={i} className={`h-2 w-2 rounded-full ${i === 2 ? "bg-yellow-400" : "bg-white/50"}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

