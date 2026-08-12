import styles from "./Footer.module.css";

const LINK_GROUPS = [
  { title: "Aaprovidir", links: ["Notre Mission", "Notre Histoire", "Carrières", "Contact"] },
  { title: "Solutions", links: ["Analyses de sol", "Marketplace", "Acheteurs B2B", "Application mobile"] },
  { title: "Ressources", links: ["FAQ", "Accessibilité", "Centre d'aide", "Confidentialité"] },
];

const SOCIALS = ["facebook", "linkedin", "instagram", "twitter"];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.tower}>
        <svg viewBox="0 0 1200 220" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,220 L0,140 L520,140 L545,70 L565,100 L600,10 L635,100 L655,70 L680,140 L1200,140 L1200,220 Z"
            fill="#00b3d6"
          />
          <circle cx="600" cy="105" r="22" fill="#0b3b6f" />
          <circle cx="600" cy="105" r="10" fill="#ffcc00" />
        </svg>
      </div>

      <div className={styles.main}>
        <div className={styles.brand}>
          <img src="/images/logo-slogan.png" alt="Logo Aaprovidir" className={styles.logo} />
          <div className={styles.social}>
            {SOCIALS.map((name) => (
              <a key={name} href="#" aria-label={name}>
                <img src={`/images/${name}.png`} alt={name} />
              </a>
            ))}
          </div>
        </div>

        <nav className={styles.links}>
          {LINK_GROUPS.map((group) => (
            <div key={group.title} className={styles.col}>
              <h4>{group.title}</h4>
              {group.links.map((label) => (
                <a key={label} href="#">
                  {label}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Aaprovidir SAS. Tous droits réservés.</p>
        <div className={styles.legal}>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}
