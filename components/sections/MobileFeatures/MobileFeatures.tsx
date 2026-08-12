import { Button } from "@/components/ui";
import styles from "./MobileFeatures.module.css";

export function MobileFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.verticalLabel}>
          <h1>
            Bons plans <span>du moment</span>
          </h1>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.content}>
              <h3>Découvrez votre base</h3>
              <p>Obtenez une image claire de la santé de vos sols avec un simple test directement sur votre téléphone.</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop"
              alt="App mobile"
              className={styles.phoneMockup}
            />
          </div>

          <div className={styles.card}>
            <div className={styles.content}>
              <h3>Planifiez vos percées</h3>
              <p>Optimisez vos rendements avec un plan développé par nos experts.</p>
              <Button variant="outline-light" className="mt-6 border-[color:var(--color-cyan-innovation)] text-[color:var(--color-pale-cyan)] hover:bg-[color:var(--color-cyan-innovation)] hover:text-[color:var(--color-blue-corporate)]">
                Explorer le plan
              </Button>
            </div>
          </div>

          <div className={styles.cardCentered}>
            <div className={styles.content}>
              <h3>Débloquez votre potentiel</h3>
              <div className={styles.bigNumber}>
                38<span>%</span>
              </div>
              <p>D&apos;augmentation moyenne du rendement dès la 1ère année.</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.content}>
              <h3>Testez jusqu&apos;à 120 biomarqueurs</h3>
            </div>
            <p className={styles.markers}>
              Azote Phosphore Potassium Magnésium Calcium Soufre Zinc Fer Cuivre Manganèse Bore pH
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
