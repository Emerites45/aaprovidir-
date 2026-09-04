import { HeroSupply } from "@/components/pages/HeroSupply/HeroSupply";
import { EcoPromise } from "@/components/pages/EcoPromise/EcoPromise";
import { HeroAnimated } from "@/components/pages/HeroAnimated/HeroAnimated";
import { AccordionShowcase } from "@/components/pages/AccordionShowcase/AccordionShowcase";
import { ProductsCarousel } from "@/components/pages/ProductsCarousel/ProductsCarousel";
import { MobileFeatures } from "@/components/pages/MobileFeatures/MobileFeatures";
import { StoryTimeline } from "@/components/pages/StoryTimeline/StoryTimeline";
import { Faq } from "@/components/pages/Faq/Faq";
import { Newsletter } from "@/components/pages/Newsletter/Newsletter";

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
