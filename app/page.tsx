import { HeroSupply } from "@/components/pages/home/HeroSupply/HeroSupply";
import { EcoPromise } from "@/components/pages/home/EcoPromise/EcoPromise";
import { HeroAnimated } from "@/components/pages/home/HeroAnimated/HeroAnimated";
import { AccordionShowcase } from "@/components/pages/home/AccordionShowcase/AccordionShowcase";
import { ProductsCarousel } from "@/components/pages/home/ProductsCarousel/ProductsCarousel";
import { MobileFeatures } from "@/components/pages/home/MobileFeatures/MobileFeatures";
import { StoryTimeline } from "@/components/pages/home/StoryTimeline/StoryTimeline";
import { Faq } from "@/components/pages/home/Faq/Faq";
import { Newsletter } from "@/components/pages/home/Newsletter/Newsletter";

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
