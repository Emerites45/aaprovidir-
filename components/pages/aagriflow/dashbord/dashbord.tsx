import styles from "./dashbord.module.css";

const NAV = [
  {
    label: "Favoris",
    items: [{ id: "stock", label: "Inventaire & Stock", icon: "box" }],
  },
  {
    label: "Accueil",
    items: [
      { id: "home", label: "Tableau de bord", icon: "home" },
      { id: "stats", label: "Statistiques", icon: "chart", active: true },
      { id: "pos", label: "Point de vente", icon: "store" },
    ],
  },
  {
    label: "Communication",
    items: [
      { id: "inbox", label: "Boîte de réception", icon: "inbox", badge: "99+" },
      { id: "marketing", label: "Marketing", icon: "megaphone" },
    ],
  },
  {
    label: "Ventes",
    items: [
      { id: "orders", label: "Commandes", icon: "cart" },
      { id: "clients", label: "Clients", icon: "users" },
      { id: "shipping", label: "Livraisons", icon: "truck" },
    ],
  },
] as const;

const FOLDED = ["Catalogue", "Comptabilité", "Paramètres"];

const CURRENT = [0.15, 0.7, 2.7, 0.35, 0.55, 0.25, 1.15, 0.2, 0.12, 0.18, 0.22, 0.35, 0.4, 0.2];
const PREVIOUS = [0.2, 0.35, 0.45, 0.9, 2.35, 0.4, 0.28, 0.22, 0.16, 0.14, 0.18, 0.3, 7.55, 0.35];
const SHIPPED = [90, 130, 175, 160, 110, 70, 95, 140, 155, 148, 130, 120, 100, 88];
const LATE = [8, 14, 12, 20, 36, 48, 40, 28, 24, 32, 60, 95, 150, 36];
const DATES = ["31 mai", "02 juin", "04 juin", "06 juin", "08 juin", "10 juin", "12 juin", "14 juin", "16 juin", "18 juin", "20 juin", "22 juin", "26 juin", "30 juin"];

function smoothPath(values: number[], width: number, height: number, max: number) {
  const step = width / (values.length - 1);
  const points = values.map((value, index) => [index * step, height - (value / max) * height] as const);
  let path = `M${points[0][0]},${points[0][1]}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[index - 1] ?? points[index];
    const current = points[index];
    const next = points[index + 1];
    const after = points[index + 2] ?? next;
    const low = Math.min(current[1], next[1]);
    const high = Math.max(current[1], next[1]);
    const c1x = current[0] + (next[0] - previous[0]) / 6;
    const c1y = Math.min(high, Math.max(low, current[1] + (next[1] - previous[1]) / 6));
    const c2x = next[0] - (after[0] - current[0]) / 6;
    const c2y = Math.min(high, Math.max(low, next[1] - (after[1] - current[1]) / 6));
    path += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${next[0].toFixed(1)},${next[1].toFixed(1)}`;
  }
  return path;
}

const CARD_ICON = {
  trend: "M4 16l5-5 3 3 8-8M14 6h6v6",
  box: "M4 7h16v12H4V7zM8 7V5h8v2M9 12h6",
  star: "M12 3l2.4 5.2L20 9.2l-4 3.8.9 5.5L12 16.8 7.1 18.5 8 13 4 9.2l5.6-1z",
};

function Icon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.glyph}>
      {name === "box" && <path {...common} d="M4 8l8-4 8 4v8l-8 4-8-4V8zM12 12V20M4 8l8 4 8-4" />}
      {name === "home" && <path {...common} d="M4 11l8-7 8 7v9H4v-9z" />}
      {name === "chart" && <path {...common} d="M4 19V5M4 19h16M8 15l3-4 3 2 4-6" />}
      {name === "store" && <path {...common} d="M4 10l2-5h12l2 5M5 10v9h14v-9M9 19v-5h6v5" />}
      {name === "inbox" && <path {...common} d="M4 13l2-7h12l2 7v6H4v-6zM4 13h5l1 2h4l1-2h5" />}
      {name === "megaphone" && <path {...common} d="M5 10v4l10 3V7L5 10zM15 9.5c1.2.6 2 1.8 2 2.5s-.8 1.9-2 2.5" />}
      {name === "cart" && <path {...common} d="M4 6h2l2 10h10l2-7H8M9 20a1 1 0 100-2 1 1 0 000 2zM17 20a1 1 0 100-2 1 1 0 000 2z" />}
      {name === "users" && <path {...common} d="M9 11a3 3 0 100-6 3 3 0 000 6zM3 19a6 6 0 0112 0M17 11a2.5 2.5 0 100-5M17 14a5 5 0 014 5" />}
      {name === "truck" && <path {...common} d="M3 7h11v8H3V7zM14 10h4l3 3v2h-7v-5zM7 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />}
      {name === "search" && <path {...common} d="M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-3.5-3.5" />}
      {name === "help" && <path {...common} d="M12 21a9 9 0 100-18 9 9 0 000 18zM9.5 9a2.5 2.5 0 115 0c0 1.5-2.5 2-2.5 3.5M12 17h.01" />}
      {name === "gift" && <path {...common} d="M4 12h16v8H4v-8zM12 12v8M4 12V8h16v4M12 8c0-2-1.5-3-3-3S6 6 8 8M12 8c0-2 1.5-3 3-3s3 1 1 3" />}
      {name === "cog" && <path {...common} d="M12 15a3 3 0 100-6 3 3 0 000 6zM12 4v2M12 18v2M4 12H2M22 12h-2M6 6l1.5 1.5M16.5 16.5L18 18M18 6l-1.5 1.5M7.5 16.5L6 18" />}
    </svg>
  );
}

export function Dashbord() {
  const width = 760;
  const height = 210;
  const current = smoothPath(CURRENT, width, height, 8);
  const previous = smoothPath(PREVIOUS, width, height, 8);
  const peakIndex = 12;
  const peakX = (peakIndex * width) / (PREVIOUS.length - 1);
  const peakY = height - (PREVIOUS[peakIndex] / 8) * height;
  const shipMax = 200;
  const shipped = smoothPath(SHIPPED, width, height, shipMax);
  const late = smoothPath(LATE, width, height, shipMax);
  const latePeakX = (peakIndex * width) / (LATE.length - 1);
  const latePeakY = height - (LATE[peakIndex] / shipMax) * height;

  return (
    <section className={styles.section} aria-labelledby="dashbord-title">
      <div className={styles.app}>
        <aside className={styles.sidebar} aria-label="Navigation Aagriflow">
          <div className={styles.brand}>
            <span className={styles.mark} aria-hidden="true">A</span>
            <span>
              <strong>Aagriflow</strong>
            </span>
          </div>

          <nav className={styles.nav}>
            {NAV.map((group) => (
              <div key={group.label} className={styles.group}>
                <p>{group.label}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href="#statistiques"
                        id={item.id === "shipping" ? "nav-livraisons" : undefined}
                        className={[item.id === "stats" ? styles.navCurrent : "", item.id === "shipping" ? styles.shipLink : ""].filter(Boolean).join(" ") || undefined}
                        aria-current={item.id === "stats" ? "page" : undefined}
                      >
                        <Icon name={item.icon} />
                        <span>{item.label}</span>
                        {"badge" in item && item.badge ? <em>{item.badge}</em> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <ul className={styles.folded}>
              {FOLDED.map((label) => (
                <li key={label}>
                  <a href="#statistiques">
                    <span>{label}</span>
                    <i aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.sidebarFoot}>
            <a href="#statistiques" className={styles.logout}>
              <span aria-hidden="true">↪</span> Déconnexion
            </a>
            <div className={styles.company}>
              <span className={styles.avatar} aria-hidden="true">A</span>
              <span>
                <strong>Aaprov!dir</strong>
                <small>Espace Aagriflow</small>
              </span>
            </div>
          </div>
        </aside>

        <div className={styles.workspace}>
          <header className={styles.topbar}>
            <label className={styles.search}>
              <Icon name="search" />
              <input type="search" placeholder="Entrez quelque chose ici…" aria-label="Rechercher dans Aagriflow" readOnly />
            </label>
            <div className={styles.topActions}>
              <button type="button" className={styles.guide}>
                Guide de démarrage <b>6/7</b>
              </button>
              <button type="button" className={styles.iconBtn} aria-label="Aide"><Icon name="help" /></button>
              <button type="button" className={styles.iconBtn} aria-label="Cadeau"><Icon name="gift" /></button>
              <button type="button" className={styles.iconBtn} aria-label="Paramètres"><Icon name="cog" /></button>
              <span className={styles.user} aria-label="Compte DK">DK</span>
            </div>
          </header>

          <div className={styles.content} id="statistiques">
            <div className={styles.pageHead}>
              <div>
                <h2 id="dashbord-title">Statistiques</h2>
                <p className={styles.crumb}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11l8-7 8 7v9H4v-9z" /></svg>
                  Accueil
                </p>
              </div>
              <p className={styles.lead}>Explorez vos chiffres et trouvez quoi faire ensuite</p>
            </div>

            <div className={styles.board}>
            <div className={styles.sceneCa}>
            <section className={styles.advice} aria-labelledby="conseils-title">
              <h3 id="conseils-title">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3 11c.6.5 1 1.2 1 2h4c0-.8.4-1.5 1-2a6 6 0 00-3-11z" /></svg>
                Conseils & recommandations
              </h3>
              <div className={styles.cards}>
                <article className={styles.cardPink}>
                  <p>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16l5-5 3 3 8-8M14 6h6v6" /></svg>
                    Le chiffre d’affaires a chuté de 60 % examinez vos meilleures ventes
                  </p>
                  <a href="#statistiques" className={styles.cue}>Vérifier les produits <span aria-hidden="true">›</span></a>
                </article>
                <article className={styles.cardYellow}>
                  <p>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v12H4V7zM8 7V5h8v2M9 12h6" /></svg>
                    Le panier moyen a baissé de 59% proposez des lots ou des ventes croisées
                  </p>
                  <a href="#statistiques">Gérer les réductions <span aria-hidden="true">›</span></a>
                </article>
                <article className={styles.cardWhite}>
                  <p>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.4 5.2L20 9.2l-4 3.8.9 5.5L12 16.8 7.1 18.5 8 13 4 9.2l5.6-1z" /></svg>
                    Meilleure vente de la période : Campagnes de communication de juin
                  </p>
                  <a href="#statistiques">Voir le produit <span aria-hidden="true">›</span></a>
                </article>
              </div>
            </section>

            <section className={styles.chartCard} aria-labelledby="ca-title">
              <div className={styles.chartHead}>
                <div>
                  <h3 id="ca-title">Chiffre d’affaires</h3>
                  <p className={styles.figure}>
                    <strong>6,14 M</strong>
                    <span>FCFA</span>
                  </p>
                </div>
                <ul className={styles.legend}>
                  <li className={styles.legendNow}><i className={styles.dotNow} /> Période actuelle</li>
                  <li className={styles.legendPrev}><i className={styles.dotPrev} /> Période précédente</li>
                </ul>
              </div>

              <div className={styles.plot}>
                <div className={styles.yAxis} aria-hidden="true">
                  <span>8.00M</span>
                  <span>6.00M</span>
                  <span>4.00M</span>
                  <span>2.00M</span>
                  <span>0</span>
                </div>
                <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Chiffre d’affaires de 6,14 millions de FCFA, en baisse de 60,3 % sur la période.">
                  <defs>
                    <linearGradient id="aagriflow-ca-now" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0b8f6a" stopOpacity="0.34" />
                      <stop offset="100%" stopColor="#0b8f6a" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="aagriflow-ca-prev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5c6b82" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#5c6b82" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
                    <line key={ratio} x1="0" x2={width} y1={height * ratio} y2={height * ratio} className={styles.grid} />
                  ))}
                  <path d={`${previous} L${width},${height} L0,${height} Z`} className={styles.areaPrev} />
                  <path d={previous} pathLength={1} className={styles.linePrev} />
                  <path d={`${current} L${width},${height} L0,${height} Z`} className={styles.areaNow} />
                  <path d={current} pathLength={1} className={styles.lineNow} />
                  <circle cx={peakX} cy={peakY} r="4.5" className={styles.peak} />
                </svg>
              </div>
              <div className={styles.xAxis} aria-hidden="true">
                {DATES.map((date) => <span key={date}>{date}</span>)}
              </div>

              <div className={styles.analyze}>
                <span>Analyser par</span>
                <div role="tablist" aria-label="Analyser par">
                  <button type="button" role="tab" aria-selected="true" className={styles.tabOn}>Par produit</button>
                  <button type="button" role="tab" aria-selected="false">Par client</button>
                  <button type="button" role="tab" aria-selected="false">Par commande</button>
                </div>
              </div>
            </section>
            </div>
            <div className={styles.sceneShip} aria-hidden="true">
              <section className={styles.advice} aria-labelledby="conseils-livraisons">
                <h3 id="conseils-livraisons">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3 11c.6.5 1 1.2 1 2h4c0-.8.4-1.5 1-2a6 6 0 00-3-11z" /></svg>
                  Conseils & recommandations
                </h3>
                <div className={styles.cards}>
                  <article className={styles.cardPink}>
                    <p>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={CARD_ICON.trend} /></svg>
                      Les livraisons tenues ont baissé de 18% relancez les tournées en attente
                    </p>
                    <a href="#statistiques">Voir les tournées <span aria-hidden="true">›</span></a>
                  </article>
                  <article className={styles.cardYellow}>
                    <p>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={CARD_ICON.box} /></svg>
                      Les retards culminent le 26 juin regroupez les départs du matin
                    </p>
                    <a href="#statistiques">Ajuster les créneaux <span aria-hidden="true">›</span></a>
                  </article>
                  <article className={styles.cardWhite}>
                    <p>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={CARD_ICON.star} /></svg>
                      Meilleure tournée de la période : Axe Nord
                    </p>
                    <a href="#statistiques">Voir la tournée <span aria-hidden="true">›</span></a>
                  </article>
                </div>
              </section>
              <section className={styles.chartCard} aria-labelledby="livraisons-title">
                <div className={styles.chartHead}>
                  <div>
                    <h3 id="livraisons-title">Livraisons</h3>
                    <p className={styles.figure}>
                      <strong>1 842</strong>
                      <span>tenues</span>
                    </p>
                  </div>
                  <ul className={styles.legend}>
                    <li className={styles.legendNow}><i className={styles.dotNow} /> Livraisons tenues</li>
                    <li className={styles.legendPrev}><i className={styles.dotPrev} /> Livraisons en retard</li>
                  </ul>
                </div>
                <div className={styles.plot}>
                  <div className={styles.yAxis} aria-hidden="true">
                    <span>200</span>
                    <span>150</span>
                    <span>100</span>
                    <span>50</span>
                    <span>0</span>
                  </div>
                  <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="1 842 livraisons tenues, en baisse de 18 %. Les retards culminent le 26 juin.">
                    <defs>
                      <linearGradient id="aagriflow-ship-ok" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0b8f6a" stopOpacity="0.34" />
                        <stop offset="100%" stopColor="#0b8f6a" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="aagriflow-ship-late" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#d97706" stopOpacity="0.32" />
                        <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
                      <line key={ratio} x1="0" x2={width} y1={height * ratio} y2={height * ratio} className={styles.grid} />
                    ))}
                    <path d={`${late} L${width},${height} L0,${height} Z`} className={styles.areaPrev} />
                    <path d={late} pathLength={1} className={styles.linePrev} />
                    <path d={`${shipped} L${width},${height} L0,${height} Z`} className={styles.areaNow} />
                    <path d={shipped} pathLength={1} className={styles.lineNow} />
                    <circle cx={latePeakX} cy={latePeakY} r="4.5" className={styles.peak} />
                  </svg>
                </div>
                <div className={styles.xAxis} aria-hidden="true">
                  {DATES.map((date) => <span key={date}>{date}</span>)}
                </div>
                <div className={styles.analyze}>
                  <span>Analyser par</span>
                  <div role="tablist" aria-label="Analyser les livraisons par">
                    <button type="button" role="tab" aria-selected="true" className={styles.tabOn}>Par tournée</button>
                    <button type="button" role="tab" aria-selected="false">Par zone</button>
                    <button type="button" role="tab" aria-selected="false">Par délai</button>
                  </div>
                </div>
              </section>
            </div>
            </div>
          </div>
        </div>
        <span className={styles.cursor} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M5 3l.4 15.2 4.2-4.1 3.3 7.3 2.6-1.2-3.3-7.2H19L5 3z" />
          </svg>
        </span>
      </div>
    </section>
  );
}
