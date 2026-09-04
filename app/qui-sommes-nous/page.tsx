import { HeroPolitiques } from "@/components/pages/qui-sommes-nous/HeroPolitiques/HeroPolitiques";
import { ZacheeIntro } from "@/components/pages/qui-sommes-nous/ZacheeIntro/ZacheeIntro";
import { ZacheeQuote } from "@/components/pages/qui-sommes-nous/ZacheeQuote/ZacheeQuote";
import { RaisonDetre } from "@/components/pages/qui-sommes-nous/RaisonDetre/RaisonDetre";
import { MondeIdeal } from "@/components/pages/qui-sommes-nous/MondeIdeal/MondeIdeal";
import { RacinesAiles } from "@/components/pages/qui-sommes-nous/RacinesAiles/RacinesAiles";
import { CercleOr } from "@/components/pages/qui-sommes-nous/CercleOr/CercleOr";
import { UncoverStack } from "@/components/layout/UncoverStack";
import { DrawerIndentBackground } from "@base-ui/react";

export default function QuiSommesNousPage() {
  return (
    <main className="relative bg-[#ffffff]">
      <HeroPolitiques />
      <ZacheeIntro />
      <ZacheeQuote />
      <RaisonDetre />
      <CercleOr />
      <MondeIdeal />
      <RacinesAiles />
    </main>
  );
}