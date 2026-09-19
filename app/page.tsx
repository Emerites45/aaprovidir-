import {HeroAnimate} from '@/components/pages/home/HeroAnimate/HeroAnimate';
import { ProsperProduction } from '@/components/pages/home/ProsperProduction/ProsperProduction';
import { ParlonsVolumes
 } from '@/components/pages/home/ParlonsVolumes/ParlonsVolumes';
 import { WhyChoose } from '@/components/pages/home/WhyChoose/WhyChoose';
import { HeroSupply } from "@/components/pages/home/HeroSupply/HeroSupply";
import { EcoPromise } from "@/components/pages/home/EcoPromise/EcoPromise";
import { HeroAnimated } from "@/components/pages/home/HeroAnimated/HeroAnimated";
import { AccordionShowcase } from "@/components/pages/home/AccordionShowcase/AccordionShowcase";
import { ProductsCarousel } from "@/components/pages/home/ProductsCarousel/ProductsCarousel";
import { MobileFeatures } from "@/components/pages/home/MobileFeatures/MobileFeatures";
import { StoryTimeline } from "@/components/pages/home/StoryTimeline/StoryTimeline";
import { Faq } from "@/components/pages/home/Faq/Faq";
import { Newsletter } from "@/components/pages/home/Newsletter/Newsletter";
import { QualityDeliverySection2 } from "@/components/pages/home/QualityDeliverySection/QualityDeliverySection2";


 import { AgricultureCarousel } from '@/components/pages/home/AgricultureCarousel/AgricultureCarousel';

 
export default function Home() {
  return (
    <main>
      <HeroSupply />
      <EcoPromise />
      <HeroAnimated />
      <AccordionShowcase />
      <ProductsCarousel />
       <QualityDeliverySection2 />
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
