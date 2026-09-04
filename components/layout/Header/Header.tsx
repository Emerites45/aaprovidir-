"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.bar}>
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