import Link from "next/link";

const GROUPS = [
  {
    title: "Aaprovidir",
    links: [
      { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
      { label: "Notre mission", href: "#" },
      { label: "Notre histoire", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Analyses de sol", href: "#" },
      { label: "Marketplace", href: "#" },
      { label: "Acheteurs B2B", href: "#" },
      { label: "Coopératives", href: "#" },
      { label: "Aagriflow", href: "#" },
    ],
  },
  {
    title: "Produits",
    links: [
      { label: "Cacao durable", href: "#" },
      { label: "Vivres sans formol", href: "#" },
      { label: "Céréales", href: "#" },
      { label: "Produits forestiers", href: "#" },
      { label: "Catalogue complet", href: "#" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Centre d'aide", href: "#" },
      { label: "Accessibilité", href: "#" },
    ],
  },
];

const SOCIALS = [
  { name: "facebook", label: "Facebook", href: "#" },
  { name: "linkedin", label: "LinkedIn", href: "#" },
  { name: "instagram", label: "Instagram", href: "#" },
  { name: "twitter", label: "X", href: "#" },
];

const LEGAL = [
  { label: "Conditions générales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "Mentions légales", href: "#" },
  { label: "Plan du site", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative mt-[14px] overflow-hidden rounded-t-[22px] bg-[#0b438c] text-white">
      <div className="grid grid-cols-1 gap-12 px-[5%] pb-8 pt-16 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-16 lg:pt-20">
        {/* Bloc présentation */}
        <div className="rounded-[20px] bg-white/[0.06] p-8 text-center lg:p-10">
          <p className="mb-3 font-body text-sm text-[#8fd4ff]">
            Rejoignez la filière
          </p>

          <h3 className="mb-8 font-title text-[clamp(1.8rem,2.6vw,2.6rem)] font-bold leading-tight">
            Prospérons
            <br />
            ensemble.
          </h3>

          <Link
            href="#"
            className="mb-4 inline-block rounded-full bg-[#ffca3c] px-9 py-3.5 font-body font-bold text-[#0b2545] transition hover:bg-[#f0b92c]"
          >
            Nous contacter
          </Link>

          {/* Mockup téléphone */}
          <div className="relative -mx-8 -mb-8 mt-2 w-[calc(100%_+_4rem)] lg:-mx-10 lg:-mb-10 lg:w-[calc(100%_+_5rem)]">
            <img
              src="/images/telephone.png"
              alt=""
              aria-hidden="true"
              className="relative z-10 w-full select-none"
            />

            <div className="absolute left-[30%] top-[24%] z-20 w-[36%] rounded-[14px] border-[5px] border-[#111] bg-[#111] shadow-lg">
              <div className="relative overflow-hidden rounded-[10px]">
                <img
                  src="/images/images7.avif"
                  alt="Application Aaprovidir"
                  className="aspect-[9/19.5] w-full object-cover"
                />
                <span
                  className="absolute left-1/2 top-0 h-[14px] w-[38%] -translate-x-1/2 rounded-b-[7px] bg-[#111]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col justify-between">
          <nav className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-10">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h4 className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.12em] text-[#7fb2d9]">
                  {group.title}
                </h4>

                <ul className="flex flex-col gap-3.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-body text-[17px] text-white/90 transition hover:text-[#ffca3c]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Réseaux sociaux */}
          <div className="mt-14 flex gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Aaprovidir sur ${social.label}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#ffca3c]"
              >
                <img
                  src={`/images/${social.name}.png`}
                  alt=""
                  aria-hidden="true"
                  className="h-[18px] w-[18px] object-contain"
                  draggable={false}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mentions légales */}
      <div className="mx-[5%] flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 py-7">
        {LEGAL.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-body text-sm text-white/70 transition hover:text-white"
          >
            {item.label}
          </Link>
        ))}

        <p className="font-body text-sm text-white/50 lg:ml-auto">
          © 2026 Aaprovidir SAS. Tous droits réservés.
        </p>
      </div>

      {/* Logo en arrière-plan */}
      <div className="px-[4%] pb-4 pt-6">
        <img
          src="/images/logo-blanc.png"
          alt=""
          aria-hidden="true"
          className="w-full select-none opacity-[0.07]"
          draggable={false}
        />
      </div>
    </footer>
  );
}