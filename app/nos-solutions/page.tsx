import type { Metadata } from "next";
import {SolutionsAudiences} from "@/components/pages/nos-solutions/SolutionsAudiences/SolutionsAudiences"; 
import { SolutionsHeroAnimated } from "@/components/pages/nos-solutions/SolutionsHeroAnimated/SolutionsHeroAnimated";
import { SolutionsBackgroundRacine } from "@/components/pages/nos-solutions/SolutionBackground/page";
import { SolutionsFemmeAuChamp } from "@/components/pages/nos-solutions/SolutionsFemmeAuChamp/SolutionsFemmeAuChamp";
import { SolutionsMiseEnMarche } from "@/components/pages/nos-solutions/SolutionsMiseEnMarche/SolutionsMiseEnMarche";
import { SolutionsPourcentage } from "@/components/pages/nos-solutions/SolutionsPourcentage/SolutionsPourcentage";
import { SolutionsStructuration } from "@/components/pages/nos-solutions/SolutionsStructuration/SolutionsStructuration";
import { SolutionsEducation } from "@/components/pages/nos-solutions/SolutionsEducation/SolutionsEducation";
import { SolutionCiel } from "@/components/pages/nos-solutions/SolutionsCiel/SolutionsCiel";
import { SolutionsNosValeurs } from "@/components/pages/nos-solutions/SolutionsNosValeurs/SolutionsNosValeurs";
import {SolutionsCarrouselFin} from "@/components/pages/nos-solutions/SolutionsCarrouselFin/SolutionsCarrouselFin";

export const metadata: Metadata = {
  title: "Nos solutions | Aaprovidir",
  description:
    "Découvrez les solutions Aaprovidir pour les producteurs, coopératives, centrales d'achat, industriels et exportateurs.",
};

export default function NosSolutionsPage() {
  return (
  <main className="">
        <div className="">
          <SolutionsAudiences />
        </div>
        <div className="">
          <SolutionsHeroAnimated />
        </div>
        <div className="">
          <SolutionsBackgroundRacine />
        </div>
        <div className="">
          <SolutionsFemmeAuChamp />
        </div>
        <div className="">
          <SolutionsMiseEnMarche />
        </div>
        <div className="">
          <SolutionsPourcentage />
        </div>
        <div className="">
          <SolutionsStructuration />
        </div>
        <div className="">
          <SolutionsEducation /> 
        </div>
        <div className="">
          <SolutionCiel /> 
        </div>
        <div className="">
          <SolutionsNosValeurs />
        </div>
         <div className="">
          <SolutionsCarrouselFin />
        </div>
      </main>
  );
}