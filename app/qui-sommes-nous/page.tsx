import { HeroPolitiques } from "@/components/sections/HeroPolitiques/HeroPolitiques";
import { ZacheeIntro } from "@/components/sections/ZacheeIntro/ZacheeIntro";
import { ZacheeQuote } from "@/components/sections/ZacheeQuote/ZacheeQuote";
import { RaisonDetre } from "@/components/sections/RaisonDetre/RaisonDetre";
import { MondeIdeal } from "@/components/sections/MondeIdeal/MondeIdeal";
import { RacinesAiles } from "@/components/sections/RacinesAiles/RacinesAiles";
import { CercleOr } from "@/components/sections/CercleOr/CercleOr";

//CercleOr.tsx

export default function QuiSommesNousPage() {
  return (
    <main className="relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <HeroPolitiques />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        <ZacheeIntro />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        <ZacheeQuote />
      </div>

      <RaisonDetre />

      <div className="sticky top-0 h-screen overflow-hidden">
        <CercleOr />
      </div>

      <MondeIdeal />

      <div className="sticky top-0 h-screen overflow-hidden">
        <RacinesAiles />
      </div>
    </main>
  );
}