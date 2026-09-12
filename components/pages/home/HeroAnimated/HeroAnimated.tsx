import { Button } from "@/components/ui";
import styles from "./HeroAnimated.module.css";

const CARDS = [
  { label: "Humidité du sol", value: "85%", bar: 85 },
  { label: "Azote (N)", value: "Optimal", note: "Dernier test: il y a 2j" },
  { label: "Température", value: "24°C", note: "Prévision: Stable" },
  { label: "Ph du sol", value: "6.5", note: "Légèrement acide" },
  { label: "Santé Globale", value: "Excellente" },
];

export function HeroAnimated() {
  return (
    <section className={styles.section} style={{ backgroundImage: "url('/images/fond-bleu.png')" }}>
      <div className={styles.text}>
        <span className={styles.tag}>Chers agriculteurs,</span>
        <h2>Révélez tout le potentiel de votre terre !</h2>
        <p>
          Vous nourrissez le monde. <br />
          Nous vous donnons les moyens de le faire dans les meilleures conditions.
        </p>
        <Button variant="primary" size="lg">
          Démarrer l&apos;analyse gratuite
        </Button>
      </div>

      <div className={styles.scene}>
        <div className={styles.orbit}>
          {CARDS.map((card, i) => (
            <div key={card.label} className={styles.card} data-index={i}>
              <h4>{card.label}</h4>
              <div className={styles.metric}>{card.value}</div>
              {card.bar ? (
                <div className={styles.bar}>
                  <div className={styles.fill} style={{ width: `${card.bar}%` }} />
                </div>
              ) : null}
              {card.note ? <p>{card.note}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
