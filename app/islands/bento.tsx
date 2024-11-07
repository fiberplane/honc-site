import { css } from "hono/css";

export function Bento() {
  return (
    <section class={sectionClass}>
      <div class={gridClass}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>
  );
}

const sectionClass = css`
  margin-block: 5rem;
`;

const gridClass = css`
  --corner-radius: 20px;
  --color-accent-default: var(--color-fg-default);

  --background-conic: conic-gradient(
    from var(--bento-conic-angle),
    transparent,
    var(--color-fg-primary),
    transparent,
    var(--color-fg-primary),
    transparent
  );

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
        var(--color-fg-primary),
        transparent,
        var(--color-fg-primary),
        transparent
      );

    box-shadow: inset 0 0 16px 0 rgb(from var(--color-fg-default) r g b / 4%);
    animation: bento 8s linear infinite;

    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      inset: -16px;
      background-image: conic-gradient(
        from var(--bento-conic-angle),
        transparent,
        var(--color-fg-primary),
        transparent,
        var(--color-fg-primary),
        transparent
      );
      border-radius: var(--corner-radius);
      z-index: -1;
      filter: blur(16px);
      opacity: 0.25;
      animation: bento 4s linear infinite;
    }
  }
`;
