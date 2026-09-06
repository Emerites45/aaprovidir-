import { HeroSupply } from "@/components/sections/HeroSupply/HeroSupply";
import { EcoPromise } from "@/components/sections/EcoPromise/EcoPromise";
import { HeroAnimated } from "@/components/sections/HeroAnimated/HeroAnimated";
import { AccordionShowcase } from "@/components/sections/AccordionShowcase/AccordionShowcase";
import { ProductsCarousel } from "@/components/sections/ProductsCarousel/ProductsCarousel";
import { MobileFeatures } from "@/components/sections/MobileFeatures/MobileFeatures";
import { StoryTimeline } from "@/components/sections/StoryTimeline/StoryTimeline";
import { Faq } from "@/components/sections/Faq/Faq";
import { Newsletter } from "@/components/sections/Newsletter/Newsletter";
import {HeroAnimate} from '@/components/sections/HeroAnimate/HeroAnimate';
import { ProsperProduction } from '@/components/sections/ProsperProduction/ProsperProduction';
import { ParlonsVolumes
 } from '@/components/sections/ParlonsVolumes/ParlonsVolumes';
 import { WhyChoose } from '@/components/sections/WhyChoose/WhyChoose';

 import { AgricultureCarousel } from '@/components/sections/AgricultureCarousel/AgricultureCarousel';

 
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
      <HeroAnimate 
         pixelGridSrc="/images/pixel-grid.jpg"
         handsSrc="/images/harvest-hands.jpg"
         glowSrc="/images/neon-glow.jpg"
       />

       <AgricultureCarousel/>
  <WhyChoose/>
       <ParlonsVolumes videoSrc="/videos/cacao-volumes.mp4" />

       <ProsperProduction/>
      <Faq />
      <Newsletter />
    </main>
  );
}
