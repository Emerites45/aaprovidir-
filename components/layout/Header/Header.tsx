import Link from "next/link";
import { Button } from "@/components/ui";
import styles from "./Header.module.css";

const LINKS = [
  { href: "#", label: "Notre Identité" },
  { href: "#", label: "Nos Produits" },
  { href: "#", label: "Aagriflow" },
  { href: "#", label: "Blog" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.pill}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo-bleu.png" alt="Aaprovidir" />
        </Link>

        <div className={styles.links}>
          {LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.langBtn} aria-label="Changer de langue">
            <i className="bi bi-translate" />
          </button>
          <Button asChild variant="pill" size="default">
            <Link href="#">Prospérons ensemble</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
