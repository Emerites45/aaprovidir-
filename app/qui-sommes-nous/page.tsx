import { HeroPolitiques } from "@/components/sections/HeroPolitiques/HeroPolitiques";
import { ZacheeIntro } from "@/components/sections/ZacheeIntro/ZacheeIntro";
import { ZacheeQuote } from "@/components/sections/ZacheeQuote/ZacheeQuote";
import { RaisonDetre } from "@/components/sections/RaisonDetre/RaisonDetre";

export default function QuiSommesNousPage() {
  return (
    <main>
      <HeroPolitiques />
      <ZacheeIntro />
      <ZacheeQuote />
      <RaisonDetre />
    </main>
  );
}