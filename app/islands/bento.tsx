import { css } from "hono/css";
import { useRef } from "hono/jsx";

export function Bento() {
  return (
    <section class={sectionClass}>
      <div class={gridClass}>
        {Array.from({ length: 4 }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <BentoItem key={i} />
        ))}
      </div>
    </section>
  );
}

function BentoItem() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (event: MouseEvent) => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const xPercent = Math.round((event.layerX / rect.width) * 100);
    const yPercent = Math.round((event.layerY / rect.height) * 100);

    el.style.setProperty("--bento-radial-x", `${xPercent}%`);
    el.style.setProperty("--bento-radial-y", `${yPercent}%`);
  };

  const onMouseOut = () => {
    const el = ref.current;
    if (!el) {
      return;
    }

    el.style.removeProperty("--bento-radial-x");
    el.style.removeProperty("--bento-radial-y");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onBlur={() => {}}
    />
  );
}

const sectionClass = css`
  margin-block: 5rem;
`;

const gridClass = css`
  --corner-radius: 20px;
  --color-accent-default: var(--color-fg-default);

  display: grid;
  gap: 0.5rem;
  grid-template: repeat(2, 1fr) / repeat(5, 1fr);
  height: 600px;

  div {
    border: 1px solid transparent;
    border-radius: var(--corner-radius);
    grid-column: span 2;

    &:nth-child(1),
    &:nth-child(4) {
      grid-column: span 3;
    }

    background-clip: padding-box, border-box;
    background-origin: border-box;
    background-image: radial-gradient(
        circle at var(--bento-radial-x) var(--bento-radial-y),
        hsl(from var(--color-bg-default) h 32% 10%) 0%,
        var(--color-bg-default)
      ),
      conic-gradient(
        from var(--bento-conic-angle),
        transparent,
        var(--bento-conic-color),
        transparent,
        var(--bento-conic-color),
        transparent
      );

    box-shadow: inset 0 0 16px 0 hsl(from var(--color-fg-default) h s 30% / 8%);
    animation: bento-conic 8s linear infinite;

    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      inset: -8px;
      background-image: conic-gradient(
        from var(--bento-conic-angle),
        transparent,
        var(--bento-conic-color),
        transparent,
        var(--bento-conic-color),
        transparent
      );
      border-radius: var(--corner-radius);
      z-index: -1;
      filter: blur(16px);
      opacity: 0.25;
      animation: bento-conic 8s linear infinite;
    }

    &:hover {
      animation: bento-color 0.5s linear forwards;
    }
  }
`;
