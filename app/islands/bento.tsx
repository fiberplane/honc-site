import { css, keyframes } from "hono/css";
import { useRef } from "hono/jsx";

import { SvgGraphicsSymbol, svgAnimation } from "./SvgGraphicsSymbol";

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
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    const bentoElement = ref.current;
    if (!bentoElement) {
      return;
    }

    const rect = bentoElement.getBoundingClientRect();
    const xPercent = Math.round(((clientX - rect.left) / rect.width) * 100);
    const yPercent = Math.round(((clientY - rect.top) / rect.height) * 100);
    bentoElement.style.setProperty("--bento-radial-x", `${xPercent}%`);
    bentoElement.style.setProperty("--bento-radial-y", `${yPercent}%`);
  };

  const onMouseMove = (event: MouseEvent) =>
    requestAnimationFrame(() => handleMouseMove(event));

  const onMouseLeave = () => {
    const bentoElement = ref.current;
    if (!bentoElement) {
      return;
    }

    bentoElement.style.removeProperty("--bento-radial-x");
    bentoElement.style.removeProperty("--bento-radial-y");
  };

  return (
    <article
      class={bentoItemClass}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <header>
        <h3>Angry goose PR reviewer</h3>
      </header>

      <p>
        Have a goose judging your Github pull request. Warning: you might get
        bamgoosled!
      </p>

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

      {Array.from({ length: 4 }).map((_, i) => {
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        return <SvgGraphicsSymbol key={i} index={i} />;
      })}
    </article>
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
`;

const bentoItemClass = css`
  h3,
  p,
  ul {
    margin: 0;
    z-index: 1;
    position: relative;
    text-shadow: 1px 1px 2px black, 0 0 0.25em var(--color-bg-default),
      0px 0px 0.1em var(--color-bg-default);
  }

  h3 {
    margin-block-end: 0.25em;
  }

  p {
    color: var(--color-fg-muted);
  }

  ul {
    padding-inline-start: 1em;
  }

  grid-column: span 2;

  display: grid;
  gap: 0.75rem;

  border: 1px solid transparent;
  border-radius: var(--corner-radius);
  padding: 1.5rem 3rem;
  position: relative;

  /* DEMO */
  svg {
    position: absolute;
    pointer-events: none;
    z-index: 0;

    &:nth-of-type(1) {
      top: 1rem;
      left: 1rem;
    }

    &:nth-of-type(2) {
      bottom: 1rem;
      right: 1rem;
    }

    &:nth-of-type(3) {
      bottom: 1rem;
      left: 1rem;
    }

    &:nth-of-type(4) {
      top: 1rem;
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
      var(--bento-color-primary),
      transparent,
      var(--bento-color-primary),
      transparent
    );

  &::before {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    /*
      Needs to be the exact same radial-gradient as parent, doesn't work here
      when put in custom property ¯\_(ツ)_/¯
    */
    background-image: conic-gradient(
      from var(--bento-conic-angle),
      transparent,
      var(--bento-color-primary),
      transparent,
      var(--bento-color-primary),
      transparent
    );
    border-radius: var(--corner-radius);
    z-index: -1;
    filter: blur(16px);
    opacity: 0.5;
  }

  &:hover,
  &:focus-within {
    &,
    &::before {
      animation: ${bentoConic} 8s linear infinite,
        bento-color 0.3s ease-in forwards;
    }

    svg polyline[data-should-animate] {
      animation: ${svgAnimation} 1.5s ease-in-out forwards;
    }
  }
`;
