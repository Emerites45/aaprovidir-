# Architecture Next.js — Aaprovidir

Ce document décrit comment on découpe le site (actuellement en HTML/CSS/JS statique) en projet Next.js, avec un système de composants réutilisable (`components/ui`) et une organisation qui permet à plusieurs développeurs de travailler sans se marcher dessus.

## 1. Arborescence cible

```
src/
├── app/
│   ├── layout.tsx              # <html>, <body>, Header + Footer globaux, import globals.css
│   ├── globals.css             # reset + @font-face + import de styles/tokens.css
│   ├── page.tsx                # Accueil                      → route "/"
│   ├── qui-sommes-nous/
│   │   └── page.tsx            # Nos politiques (qui sommes-nous) → route "/qui-sommes-nous"
│   └── nos-solutions/
│       └── page.tsx            # Nos solutions                → route "/nos-solutions"
│
├── components/
│   ├── ui/                     # DESIGN SYSTEM — un seul dossier, fichiers plats (convention shadcn)
│   │   ├── button.tsx           # shadcn Button + variantes Aaprovidir (primary, accent, pill, outline-light)
│   │   ├── icon-button.tsx      # composant "maison", même convention (cva + cn)
│   │   ├── card.tsx             # shadcn Card + image/shine/overlay (hero-card, accordion-item)
│   │   ├── badge.tsx            # shadcn Badge + variante "glass"
│   │   └── index.ts             # point d'entrée unique : `import { Button, Card } from "@/components/ui"`
│   │
│   ├── layout/                  # Header, Footer, Navbar — partagés par toutes les pages
│   │   ├── Header/
│   │   └── Footer/
│   │
│   └── sections/                # Un dossier par bloc de page (Hero, Faq, Newsletter, Timeline…)
│       ├── HeroSupply/
│       ├── EcoPromise/
│       ├── HeroAnimated/
│       ├── AccordionShowcase/
│       ├── ProductsCarousel/
│       ├── MobileFeatures/
│       ├── StoryTimeline/
│       ├── Faq/
│       └── Newsletter/
│
├── lib/
│   └── cn.ts                    # utilitaire de composition de classNames
│
├── styles/
│   └── tokens.css               # variables CSS (couleurs, fonts) — SOURCE UNIQUE
│
└── public/
    ├── images/
    └── fonts/
```

Chaque **section** (`components/sections/*`) correspond à un bloc visuel de la page d'accueil que tu as envoyée (hero, carrousel produits, FAQ, etc.). Une section :
- a son propre dossier avec son `.tsx` + son `.module.css` ;
- ne redéfinit **jamais** un style de bouton ou de carte : elle importe ces primitives depuis `components/ui` ;
- reste "bête" niveau data : le contenu (textes, images) lui est passé en props ou vit dans un fichier `content.ts` à côté, pour rester facile à modifier sans toucher au JSX.

## 2. Pourquoi shadcn/ui + Tailwind (et un seul dossier `components/ui`)

Le projet part directement des composants shadcn/ui (Button, Card, Badge) et les étend avec les variantes Aaprovidir (`primary`, `pill`, `outline-light`, `glass`…) au lieu de maintenir un design system "maison" séparé d'une bibliothèque tierce. Avantages :

- **Un seul dossier `components/ui`**, un seul système à connaître pour toute l'équipe — pas de question "où est-ce que je code ce bouton ?".
- Les classes Tailwind sont générées par utilitaire, jamais par nom global (`bg-primary`, `rounded-full`…) : deux devs ne peuvent pas faire collision comme avec deux classes CSS globales `.card`.
- Chaque composant `ui/*.tsx` combine **les variantes shadcn standard** (`default`, `outline`, `ghost`…, utiles pour de futurs écrans neutres type back-office) **et les variantes Aaprovidir** (dérivées de la maquette d'origine), dans le même fichier, via `class-variance-authority` (`cva`).

Les couleurs de marque restent centralisées dans `styles/tokens.css` (copie de ton `:root` d'origine) puis mappées sur les variables attendues par shadcn dans `app/globals.css` (bloc `@theme inline`). On ne code jamais une couleur en dur dans un composant : soit on référence une classe Tailwind mappée (`bg-primary`), soit `var(--color-blue-corporate)` pour les cas très spécifiques (ex: le dégradé du hero-card).

## 3. Le design system (`components/ui`)

C'est le socle sur lequel tout le reste s'appuie. Il a été extrait des éléments qui reviennent dans plusieurs sections de ta page d'accueil :

| Fichier | Dérivé de (code original) | Variantes ajoutées |
|---|---|---|
| `button.tsx` | `.primary-btn`, `.newsletter-btn`, `.navbar-cta`, `.outline-btn` | `primary`, `accent`, `pill`, `outline-light` (+ variantes shadcn standard) |
| `icon-button.tsx` | `.hero-card-arrow`, `.nav-arrow` | `light`, `bordered` |
| `card.tsx` | `.hero-card`, `.product-card`, `.feat-card` (surface générique) | `tone`: `light` / `dark` / `muted` / `glass` ; props `image`, `shine`, `overlay`, `elevated` |
| `badge.tsx` | `.hero-card-tag`, `.faq-tag` | `glass` (+ variantes shadcn standard) |

**Règle d'or : `Button` gère aussi bien l'action (bouton `<button>`) que la navigation, via la prop `asChild`** (pattern Radix `Slot`) — plus besoin d'un composant séparé pour les liens :

```tsx
import Link from "next/link";
import { Button, Card, Badge, IconButton } from "@/components/ui";

// Action
<Button variant="primary" size="lg">Démarrer l'analyse gratuite</Button>

// Navigation — même composant, même style, juste asChild
<Button asChild variant="pill">
  <Link href="/nos-solutions">Prospérons ensemble</Link>
</Button>

// Card avec image de fond, reflet animé et dégradé de lisibilité
<Card image="/images/cacao.jpg" shine overlay imagePriority className="h-[260px] p-6">
  <h3>Cacao durable</h3>
  <div className="flex items-center justify-between">
    <Badge variant="glass">Fair Fermented</Badge>
    <IconButton variant="light" aria-label="Cacao durable" icon={<i className="bi bi-arrow-up-right" />} />
  </div>
</Card>
```

Un exemple complet de section composée avec ces primitives est fourni dans `components/sections/HeroSupply/`.

### Ce qui reste volontairement HORS du design system

Les cartes très spécifiques à une seule section (ex : `.data-card` avec sa jauge, les `.timeline-node` de la frise chronologique, le `.founder-card`) ne sont **pas** transformées en composants `ui/` génériques : elles se construisent en composant `Card` + éléments spécifiques directement dans le dossier de la section concernée (ex: `components/sections/StoryTimeline/TimelineNode.tsx`). Un composant ne monte dans `components/ui` que lorsqu'il est réellement réutilisé par **au moins deux sections/pages différentes** — sinon on complexifie le design system pour rien.

## 4. Comment se répartir le travail sans collision

Avec 3 pages (Accueil, Nos politiques / Qui sommes-nous, Nos solutions), la règle simple :

1. **`components/ui` se construit et se stabilise en premier**, avant que les devs n'attaquent les pages — un seul owner (ou un petit binôme) le fait valider en review, exactement comme un "template de référence". Une fois posé, ce dossier change rarement.
2. **Chaque page = un owner.** Un dev est responsable de `app/page.tsx` + des sections qui n'apparaissent que sur cette page (dans `components/sections/`).
3. **Une section = un dossier = un fichier `.tsx` + un `.module.css`.** Deux devs ne travaillent jamais dans le même dossier de section en même temps.
4. **Personne ne modifie `components/ui` "en passant"** pendant qu'il développe une page. Si un besoin de variante apparaît (ex: un nouveau `Button variant="danger"`), on ouvre une PR dédiée sur `components/ui`, revue séparément, puis les pages la consomment une fois mergée.
5. **Le Header/Footer (`components/layout`) sont partagés par toutes les pages** : un seul owner les développe, les autres les consomment tels quels dans leur `page.tsx`.

Concrètement, un découpage à 3 devs pourrait être :

| Dev | Responsabilité |
|---|---|
| Dev A | `components/ui` (design system) + `components/layout` (Header/Footer) |
| Dev B | Page **Accueil** (`app/page.tsx` + ses sections) |
| Dev C | Pages **Nos politiques** et **Nos solutions** |

## 5. Installation (dans l'ordre)

```bash
# 1. Projet Next.js
npx create-next-app@latest aaprovidir --typescript --app --src-dir --import-alias "@/*"
cd aaprovidir

# 2. Tailwind CSS (requis par shadcn)
npm install tailwindcss @tailwindcss/postcss postcss

# 3. Dépendances des composants ui/ fournis dans ce scaffold
npm install class-variance-authority clsx tailwind-merge @radix-ui/react-slot

# 4. Initialiser shadcn (génère components.json, complète globals.css)
npx shadcn@latest init
```

Puis copier depuis ce scaffold vers le projet :

```bash
cp -r src/styles                aaprovidir/src/styles
cp -r src/lib/utils.ts          aaprovidir/src/lib/
cp -r src/lib/hooks             aaprovidir/src/lib/
cp -r src/components/ui         aaprovidir/src/components/
cp    src/app/globals.css       aaprovidir/src/app/globals.css   # écrase celui généré par shadcn
cp    postcss.config.mjs        aaprovidir/postcss.config.mjs
```

Vérifier ensuite que `components.json` (généré à l'étape 4) pointe bien vers `@/components/ui` — c'est déjà le défaut, donc normalement rien à changer.

## 6. Migration du CSS/JS existant

- Les variables `:root` de `style.css` → copiées telles quelles dans `styles/tokens.css` (fait dans ce scaffold).
- Les `@font-face` → à déplacer dans `app/globals.css`, avec les fichiers de police copiés dans `public/fonts/`.
- Le JS vanilla (`script.js` : carrousel produits, accordéon, FAQ, scroll horizontal) → à réécrire en hooks React (`useEffect` + `useState`/`useRef`) directement dans le composant de section concerné (ex: la logique de `AccordionShowcase` vit dans `AccordionShowcase.tsx`, pas dans un fichier JS global). Chaque section devient autonome : elle n'a pas besoin qu'un script externe aille chercher ses éléments par `document.getElementById`.
- Les images (`images/*.jpg`, `.png`, `.avif`) → à déplacer dans `public/images/`, et à utiliser via `next/image` plutôt que des balises `<img>` ou des `background-image` inline, pour bénéficier de l'optimisation automatique (sauf pour les cas de `background-image` dynamique comme `Card image={...}`, où next/image ne s'applique pas directement).

## 7. Prochaines étapes

1. Valider ce découpage avec l'équipe.
2. Finaliser et faire relire `components/ui` (ce scaffold contient un premier jet : `Button`, `IconButton`, `Card`, `Badge`).
3. Construire `components/layout/Header` et `Footer`.
4. Répartir les sections de l'Accueil et démarrer les pages "Nos politiques" et "Nos solutions" en parallèle.
