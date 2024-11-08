import { css } from "hono/css";

export function Bento() {
  return (
    <section class={sectionClass}>
      <div class={gridClass}>
        {Array.from({ length: 4 }).map((_, i) => (
          <BentoItem key={i} />
        ))}
      </div>
    </section>
  );
}

function BentoItem() {
  // TODO: Add hover mouse tracking for gradient & skew
  return <div />;
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
        circle at top left,
        hsl(from var(--color-bg-default) h 40% 6%) 0%,
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
    animation: bento 8s linear infinite;

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
      animation: bento 4s linear infinite;
    }

    transition: 0.2s;
    &:hover {
      /* --bento-conic-color: var(--color-fg-primary); */
      animation: bento-color 0.5s linear forwards;
    }
  }
`;
