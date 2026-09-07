"use client";

import { Children, useEffect, useRef, useState } from "react";

export function UncoverStack({ children }: { children: React.ReactNode }) {
  const items = Children.toArray(children);
  const ref = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      setVh(window.innerHeight);
      setScrolled(-el.getBoundingClientRect().top);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      style={{ height: `${items.length * 100}vh` }}
    >
      {items.map((child, i) => {
        const isLast = i === items.length - 1;
        const local = vh
          ? Math.min(Math.max(scrolled - i * vh, 0), vh)
          : 0;

        return (
          <div
            key={i}
            className="sticky top-0 h-screen overflow-hidden will-change-transform"
            style={{
              zIndex: items.length - i,
              transform: isLast ? undefined : `translate3d(0, ${-local}px, 0)`,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}