"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
    fallbackImage: "/placeholder.svg",

    title: "WELCOME TO <span class='text-amber-400'>USA CARS</span>",
    description: "Discover the best deals on high-quality used cars. Fast shipping and easy buying process!",
  },
  {
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    fallbackImage: "/placeholder.svg",

    title: "BID RECOMMENDATION <span class='text-amber-400'>TOOLS</span>",
    description:
      "Boost your odds of success with our bid recommendation tools. Optimize your car purchases at USA CAR auctions by consulting our suggested bids or using the built-in bid calculator.",
  },
  {
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    fallbackImage: "/placeholder.svg",

    title: "DIRECT <span class='text-amber-400'>PURCHASES</span>",
    description:
      "Purchase used vehicles straight from Our Stock and even make offers on them! This unique feature allows you to buy a car at a reduced price, adding a layer of affordability to our online car marketplace.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000)
  }, [isTransitioning])

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return

      setIsTransitioning(true)
      setCurrentSlide(index)

      setTimeout(() => {
        setIsTransitioning(false)
      }, 1000)
    },
    [currentSlide, isTransitioning],
  )

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [nextSlide])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide()
      if (e.key === "ArrowRight") nextSlide()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <section className="relative h-[550px] md:h-[650px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

            <Image
            onError={(e) => {
              e.currentTarget.src = slide.fallbackImage;
            }}

            src={slide.image || "/placeholder.svg"}
            alt={`USA Cars Slide ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
          />

          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-6xl mx-auto">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md"
              dangerouslySetInnerHTML={{ __html: slide.title }}
            />
            <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-white/90 drop-shadow-md">
              {slide.description}
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-6 text-base rounded-md shadow-lg hover:shadow-xl transition-all"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-base rounded-md backdrop-blur-sm"
              >
                Browse Cars
              </Button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full z-30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full z-30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-8 flex gap-3 z-30 w-full justify-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2.5 transition-all duration-300 rounded-full ${
              i === currentSlide ? "w-8 bg-amber-500" : "w-2.5 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </section>
  )
}
