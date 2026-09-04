"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./Faq.module.css";

const QUESTIONS = [
  { q: "Comment fonctionne l'analyse de sol ?", a: "Prélevez un échantillon avec le kit Aaprovidir, scannez-le via l'application mobile et recevez vos résultats détaillés (azote, pH, humidité, biomarqueurs) en quelques minutes." },
  { q: "Aaprovidir fonctionne-t-il hors connexion ?", a: "Oui. La plateforme prévoit un mode déconnecté : vos actions sont mises en file d'attente et synchronisées automatiquement dès le retour de la connexion." },
  { q: "Comment êtes-vous mis en relation avec les acheteurs ?", a: "Aaprovidir connecte directement producteurs et acheteurs B2B vérifiés, sans intermédiaire prédateur. Chaque transaction est sécurisée et tracée de bout en bout." },
  { q: "Quels biomarqueurs sont mesurés ?", a: "Jusqu'à 120 biomarqueurs sont analysés : azote, phosphore, potassium, magnésium, calcium, soufre, zinc, fer, cuivre, manganèse, bore et pH." },
  { q: "Où Aaprovidir est-il disponible ?", a: "La plateforme déploie ses premiers services en Afrique Centrale, avec une couverture qui s'étend progressivement à mesure que de nouveaux partenariats logistiques et laboratoires se mettent en place." },
  { q: "Combien de temps avant de voir une augmentation de rendement ?", a: "Les producteurs accompagnés constatent en moyenne une augmentation de rendement de 38% dès la première année, grâce aux recommandations issues de l'analyse de sol." },
  { q: "Comment puis-je vendre ma récolte sur la plateforme ?", a: "Créez votre profil producteur en moins de 3 minutes et commencez à recevoir des offres d'acheteurs vérifiés, avec des prix transparents et actualisés selon le marché." },
  { q: "Mes données sont-elles protégées ?", a: "Toutes vos données de sol, de récolte et de transaction restent confidentielles et ne sont jamais partagées sans votre accord avec des tiers non vérifiés." },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>FAQ</span>
        <h2 className={styles.title}>
          Vous avez des <span>questions</span> ?
        </h2>

        <div className={styles.list}>
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className={cn(styles.item, isOpen && styles.itemActive)}>
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={styles.icon}>+</span>
                </button>
                <div className={styles.answer} style={{ maxHeight: isOpen ? "240px" : "0px" }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
