import type { Metadata } from "next";
import { Hero } from "@/components/pages/aagriflow/Hero/Hero";

export const metadata: Metadata = {
  title: "Aagriflow | Aaprovidir",
  description:
    "Aagriflow aide les acheteurs et démarcheurs à suivre et gérer leurs opérations agricoles, de l'identification à la livraison.",
};

export default function AagriflowPage() {
  return (
    <main>
      <Hero />
    </main>
  );
}