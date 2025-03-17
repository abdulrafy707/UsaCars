"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/car1.png?height=600&width=1200",
    title: "WELCOME TO <span class='text-yellow-400'>USA CARS</span>",
    description: "Discover the best deals on high-quality used cars. Fast shipping and easy buying process!",
  },
  {
    image: "/car2.png?height=600&width=1200",
    title: "BID RECOMMENDATION <span class='text-yellow-400'>TOOLS</span>",
    description:
      "Boost your odds of success with our bid recommendation tools. Optimize your car purchases at USA CAR auctions by consulting our suggested bids or using the built-in bid calculator.",
  },
  {
    image: "/car3.png?height=600&width=1200",
    title: "DIRECT <span class='text-yellow-400'>PURCHASES</span>",
    description:
      "Purchase used vehicles straight from Our Stock and even make offers on them! This unique feature allows you to buy a car at a reduced price, adding a layer of affordability to our online car marketplace.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`USA Cars Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: slide.title }} />
            <p className="max-w-2xl mx-auto mb-8 text-lg">{slide.description}</p>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Register Now</Button>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-8 flex gap-2 z-20 w-full justify-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 w-2 rounded-full transition-colors ${i === currentSlide ? "bg-yellow-400" : "bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

