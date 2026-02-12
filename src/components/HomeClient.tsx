"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import ProductGrid from "@/components/sections/ProductGrid";
import StorySection from "@/components/sections/StorySection";
import LogoIntro from "@/components/ui/LogoIntro";

export default function HomeClient() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* Grand Logo Entrance */}
      {!introComplete && <LogoIntro onComplete={() => setIntroComplete(true)} />}

      {/* Main Site */}
      <div style={{ opacity: introComplete ? 1 : 0, transition: "opacity 0.5s ease" }}>
        <Header />
        <main>
          <Hero />
          <FeaturedCollection />
          <ProductGrid />
          <StorySection />
        </main>
        <Footer />
      </div>
    </>
  );
}
