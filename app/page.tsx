import { HeroSection } from "@/components/sections/hero-section";
import { SearchSection } from "@/components/sections/search-section";
import { CategorySection } from "@/components/sections/category-section";
import { HotOffersSection } from "@/components/sections/hot-offers-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { CountriesSection } from "@/components/sections/countries-section";
import { CarBrandsSection } from "@/components/sections/car-brands-section";
import { NewsSection } from "@/components/sections/news-section";

export default function UsaCarsLanding() {
  return (
    <div className="w-full">
      {/* Full-Width Content */}
      <HeroSection />
      <SearchSection />
      <CategorySection />
      <HotOffersSection />
      <StatsSection />
      <ServicesSection />
      <ReviewsSection />
      {/* <CountriesSection /> */}
      <CarBrandsSection />
      <NewsSection />
    </div>
  );
}
