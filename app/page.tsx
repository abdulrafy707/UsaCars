import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { SearchSection } from "@/components/sections/search-section"
import { CategorySection } from "@/components/sections/category-section"
import { HotOffersSection } from "@/components/sections/hot-offers-section"
import { StatsSection } from "@/components/sections/stats-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { CountriesSection } from "@/components/sections/countries-section"
import { CarBrandsSection } from "@/components/sections/car-brands-section"
import { NewsSection } from "@/components/sections/news-section"

export default function UsaCarsLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <Header />

      <main className="flex-1 -mt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Search Section */}
        <SearchSection />

        {/* Category Icons */}
        <CategorySection />

        {/* Hot Offers Section */}
        <HotOffersSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Customer Reviews */}
        <ReviewsSection />

        {/* Countries Section */}
        <CountriesSection />

        {/* Car Brands Section */}
        <CarBrandsSection />

        {/* Latest News Section */}
        <NewsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

