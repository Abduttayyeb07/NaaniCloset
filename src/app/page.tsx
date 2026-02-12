import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import ProductGrid from "@/components/sections/ProductGrid";
import StorySection from "@/components/sections/StorySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
        <ProductGrid />
        <StorySection />
      </main>
      <Footer />
    </>
  );
}
