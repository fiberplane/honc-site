import { css, keyframes } from "hono/css";
import { useRef, useState } from "hono/jsx";

import { SvgGraphicsSymbol } from "./SvgGraphicsSymbol";

export function Bento() {
  return (
    <section class={sectionClass}>
      <h1>Examples</h1>

      <div class={bentoGridClass}>
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
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
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

  const onMouseMove = (event: MouseEvent) =>
    requestAnimationFrame(() => handleMouseMove(event));

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) {
      return;
    }

    setShouldAnimate(false);
    el.style.removeProperty("--bento-radial-x");
    el.style.removeProperty("--bento-radial-y");
  };

  return (
    <div
      class={bentoItemClass}
      ref={ref}
      onMouseEnter={() => setShouldAnimate(true)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <article class={cardContent}>
        <header>
          <h3>Angry goose PR reviewer</h3>
          <p>
            Have a goose judging your Github pull request. Warning: they're not
            holding back!
          </p>
        </header>

        <ul>
          <li>
            <a
              href="http://github.com/fiberplane/create-honc-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repo
            </a>
          </li>
          <li>
            <a
              href="http://fiberplane.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the article
            </a>
          </li>
        </ul>
      </article>

      {Array.from({ length: 2 }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <SvgGraphicsSymbol key={i} variant={i} shouldAnimate={shouldAnimate} />
      ))}
    </div>
  );
}

const sectionClass = css`
  margin-block: 8rem 5rem;

  h1 {
    text-align: center;
  }
`;

const bentoConic = keyframes`
  to {
    --bento-conic-angle: 360deg;
  }
`;

const bentoGridClass = css`
  --corner-radius: 20px;
  --color-accent-default: var(--color-fg-default);

  display: grid;
  gap: 0.5rem;
  grid-template: repeat(2, 1fr) / repeat(5, 1fr);
  height: 600px;
`;

const bentoItemClass = css`
  padding: 2rem;

  position: relative;
  border: 1px solid transparent;
  border-radius: var(--corner-radius);
  grid-column: span 2;

  /* DEMO */
  svg {
    position: absolute;
    pointer-events: none;

    &:first-of-type {
      top: 1rem;
      left: 1rem;
    }

    &:last-of-type {
      bottom: 1rem;
      right: 1rem;
    }
  }

  &:nth-child(1),
  &:nth-child(4) {
    grid-column: span 3;
  }

  box-shadow: inset 0 0 32px 0 hsl(from var(--color-bg-default) h s 8% / 25%);
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

  &::before {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    /*
      Needs to be the exact same radial-gradient as parent, doesn't work here
      when put in custom property
    */
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
    opacity: 0.5;
  }

  &:hover {
    --bento-conic-color: hsl(16, 88%, 55%);

    &,
    &::before {
      animation: ${bentoConic} 8s linear infinite;
    }
  }
`;

const cardContent = css`
  * {
    margin: 0;
  }
`;
