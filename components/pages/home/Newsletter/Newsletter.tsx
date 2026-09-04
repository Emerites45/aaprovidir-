import { Button } from "@/components/ui";
import styles from "./Newsletter.module.css";

export function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h3>Restez informé</h3>
        <p>
          Recevez les dernières actualités Aaprovidir : nouveautés de la plateforme, prix du marché et conseils
          pour vos cultures, directement dans votre boîte mail.
        </p>
      </div>
      <Button variant="accent" size="lg">
        S&apos;abonner <span className="ml-1">→</span>
      </Button>
    </section>
  );
}
