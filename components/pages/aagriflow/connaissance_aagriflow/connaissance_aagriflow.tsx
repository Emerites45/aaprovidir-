import styles from "./connaissance_aagriflow.module.css";

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=240&q=80`;

/** Même repère que le SVG : 1 unité = 1 pixel logique, les cercles restent ronds. */
const VIEW = { w: 1200, h: 830 };
/** Centre sous le plateau : les arcs s’arrêtent avant le titre. */
const ORIGIN = { x: 600, y: 690 };

/** Huit arcs au pas régulier. Le plus haut reste dans le ciel du plateau. */
const ARCS = [150, 210, 270, 330, 390, 450, 510, 560];

type Feature = {
  id: string;
  label: string;
  image: string;
  /** Angle en degrés (90 = haut) et rayon, dans le repère du plateau. */
  angle: number;
  radius: number;
  variant?: "center";
};

const FEATURES: Feature[] = [
  { id: "mais", label: "Maïs", image: photo("photo-1551754655-cd27e38d2076"), angle: 108, radius: 510 },
  { id: "ananas", label: "Ananas", image: photo("photo-1550258987-190a2d41a8ba"), angle: 72, radius: 510 },
  { id: "cacao", label: "Cacao durable", image: photo("photo-1705542116578-b6e7972479f1"), angle: 148, radius: 510 },
  {
    id: "vivres",
    label: "Vivres sans formol",
    image: photo("photo-1540420773420-3366772f4999"),
    angle: 90,
    radius: 330,
    variant: "center",
  },
  { id: "fruits", label: "Fruits durables", image: photo("photo-1619566636858-adf3ef46400b"), angle: 32, radius: 510 },
  { id: "tubercules", label: "Tubercules", image: photo("photo-1574226516831-e1dff420e562"), angle: 126, radius: 390 },
  {
    id: "cereales",
    label: "Céréales durables",
    image: photo("photo-1500382017468-9049fed747ef"),
    angle: 54,
    radius: 390,
  },
  { id: "verger", label: "Pommes de verger", image: photo("photo-1560806887-1e4cd0b6cbd6"), angle: 166, radius: 270 },
  { id: "ble", label: "Blé d'hiver", image: photo("photo-1437252611977-07f74518abd7"), angle: 90, radius: 150 },
  {
    id: "forestiers",
    label: "Produits forestiers",
    image: photo("photo-1441974231531-c6227db76b6e"),
    angle: 14,
    radius: 270,
  },
];

function onArc(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  const x = ORIGIN.x + radius * Math.cos(rad);
  const y = ORIGIN.y - radius * Math.sin(rad);
  return {
    left: `${(x / VIEW.w) * 100}%`,
    top: `${(y / VIEW.h) * 100}%`,
  };
}

export function ConnaissanceAagriflow() {
  return (
    <section className={styles.section} aria-labelledby="connaissance-aagriflow-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="connaissance-aagriflow-title" className={styles.title}>
            Faites connaissance avec <span className={styles.brand}>Aagriflow</span>
          </h2>
          <p className={styles.subtitle}>
            La plateforme qui relie producteurs et acheteurs : une récolte tracée, un prix clair, une livraison tenue.
          </p>
        </header>

        <div className={styles.stageWrap}>
        <div className={styles.stage}>
          <svg
            className={styles.arcs}
            viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {ARCS.map((radius) => (
              <circle key={radius} cx={ORIGIN.x} cy={ORIGIN.y} r={radius} />
            ))}
          </svg>

          <ul className={styles.nodes}>
            {FEATURES.map((feature, index) => (
              <li
                key={feature.id}
                className={styles.node}
                data-variant={feature.variant}
                style={{
                  ...onArc(feature.angle, feature.radius),
                  ["--delay" as string]: `${80 + index * 45}ms`,
                }}
              >
                <span className={styles.icon}>
                  <img src={feature.image} alt="" />
                </span>
                <span className={styles.label}>{feature.label}</span>
              </li>
            ))}
          </ul>

          <p className={styles.prompt}>Que recherchez-vous précisément ?</p>
        </div>
        </div>
      </div>
    </section>
  );
}
