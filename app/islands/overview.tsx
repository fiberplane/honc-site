import { css, keyframes } from "hono/css";
import { useState, type PropsWithChildren } from "hono/jsx";

import { Wrapper } from "../components";
import { anchorIds } from "../constants";

type OverviewProps = PropsWithChildren<{
  title: string;
}>;

export function Overview({ children, title }: OverviewProps) {
  const [isInView, setIsInView] = useState(false);

  return (
    <Wrapper className={wrapperClass}>
      <section class={sectionClass}>
        <h1 id={anchorIds.overview}>{title}</h1>

        <div class={stackContainer} data-stack-container>
          <div class={overflowContainer} data-overflow-container />
          <ul>{children}</ul>
        </div>
      </section>
    </Wrapper>
  );
}

const cardAnimation = keyframes`
  to {
    translate: 0 0;
  }
`;

const sectionClass = css`
  --overview-gap: 1px;
  --overview-radius: 2rem;
  --overview-card-animation-duration: 0.7s;
  --overview-card-animation-delay: 0.2s;

  h1 {
    text-align: center;
    font-size: clamp(2.5rem, 14lvw, 5rem);
  }

  ul {
    overflow: hidden;
    background: var(--color-bg-primary);
    outline: 1px solid var(--color-bg-primary);
    box-shadow: 0 0 2rem 2rem rgb(from var(--color-bg-primary) r g b / 0.2);

    border-radius: var(--overview-radius);
    display: grid;
    gap: var(--overview-gap);
    list-style: none;
    padding: 0;

    & > li {
      background-color: var(--color-bg-elevated);
    }
  }
`;

const stackContainer = css`
  position: relative;
  isolation: isolate;
  padding: var(--overview-gap);
`;

const scaleAnimation = keyframes`
  to {
    scale: 1;
  }
`;

const shadowAnimation = keyframes`
  to {
    box-shadow: 0 0 2rem 2rem rgb(from var(--color-bg-primary) r g b / 0.2);
  }
`;

const overflowContainer = css`
  --overview-scale-animation-duration: 1.7s;

  --overview-scale-animation-delay: calc(
    calc(var(--overview-card-animation-delay) * 2) +
      calc(var(--overview-card-animation-delay) * 3)
  );

  --overview-shadow-animation-delay: calc(
    var(--overview-scale-animation-delay)
  );

  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 2rem;
`;

const wrapperClass = css`
  container-type: inline-size;

  @container (width >= 640px) {
    ${overflowContainer} {
      animation: ${shadowAnimation} 0.7s forwards ease-out
        var(--overview-shadow-animation-delay);

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        padding-top: 100%;
        background: var(--color-bg-primary);
        border-radius: 99999px;
        translate: -50% -50%;
        transform-origin: center;
        width: 200%;
        aspect-ratio: 1;
        scale: 0;
        animation: ${scaleAnimation} var(--overview-scale-animation-duration)
          forwards ease-out var(--overview-scale-animation-delay);
      }
    }

    ${sectionClass} {
      ul {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 1fr;
        overflow: unset;
        outline: unset;
        background: unset;
        box-shadow: unset;

        & > li {
          animation-name: ${cardAnimation};
          animation-duration: var(--overview-card-animation-duration);
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.83, 0.1, 0.12, 1);

          &:nth-child(1) {
            translate: -1rem -1rem;
            border-top-left-radius: var(--overview-radius);
          }

          &:nth-child(2) {
            translate: 1rem -1rem;
            border-top-right-radius: var(--overview-radius);
            animation-delay: var(--overview-card-animation-delay);
          }

          &:nth-child(3) {
            translate: -1rem 1rem;
            border-bottom-left-radius: var(--overview-radius);
            animation-delay: calc(var(--overview-card-animation-delay) * 2);
          }

          &:nth-child(4) {
            translate: 1rem 1rem;
            border-bottom-right-radius: var(--overview-radius);
            animation-delay: calc(var(--overview-card-animation-delay) * 3);
          }
        }
      }
    }
  }
`;
