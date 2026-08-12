import { HeroSupply } from "@/components/sections/HeroSupply/HeroSupply";
import { EcoPromise } from "@/components/sections/EcoPromise/EcoPromise";
import { HeroAnimated } from "@/components/sections/HeroAnimated/HeroAnimated";
import { AccordionShowcase } from "@/components/sections/AccordionShowcase/AccordionShowcase";
import { ProductsCarousel } from "@/components/sections/ProductsCarousel/ProductsCarousel";
import { MobileFeatures } from "@/components/sections/MobileFeatures/MobileFeatures";
import { StoryTimeline } from "@/components/sections/StoryTimeline/StoryTimeline";
import { Faq } from "@/components/sections/Faq/Faq";
import { Newsletter } from "@/components/sections/Newsletter/Newsletter";

export default function Home() {
  return (
    <main>
      <HeroSupply />
      <EcoPromise />
      <HeroAnimated />
      <AccordionShowcase />
      <ProductsCarousel />
      <MobileFeatures />
      <StoryTimeline />
      <Faq />
      <Newsletter />
    </main>
  );
}
