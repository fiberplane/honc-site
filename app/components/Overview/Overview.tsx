import { css, keyframes } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

import { anchorIds } from "../../constants";
import { Wrapper } from "../Wrapper";

type OverviewProps = PropsWithChildren<{
  title: string;
}>;

export function Overview({ children, title }: OverviewProps) {
  return (
    <Wrapper>
      <section class={sectionClass}>
        <h1 id={anchorIds.overview}>{title}</h1>

        <ul>{children}</ul>
      </section>
    </Wrapper>
  );
}

const scaleAnimation = keyframes`
  to {
    scale: 1;
  }
`;

const sectionClass = css`
  h1 {
    text-align: center;
    font-size: clamp(2.5rem, 14lvw, 5rem);
  }

  ul {
    --gap: 1px;
    --radius: 2rem;

    border-radius: var(--radius);
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: var(--gap);
    list-style: none;
    padding: 0;
    padding: var(--gap);
    position: relative;
    box-shadow: 0 0 2rem 1.75rem rgb(from var(--color-bg-primary) r g b / 0.1);

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
      width: 120%;
      aspect-ratio: 1;
      scale: 0;
      outline: none;

      animation: ${scaleAnimation} 0.7s forwards;
    }

    & > li {
      padding: 3rem 2rem;
      width: 100%;
      background-color: var(--color-bg-elevated);

      &:nth-child(1) {
        border-top-left-radius: var(--radius);
      }

      &:nth-child(2) {
        border-top-right-radius: var(--radius);
      }

      &:nth-child(3) {
        border-bottom-left-radius: var(--radius);
      }

      &:nth-child(4) {
        border-bottom-right-radius: var(--radius);
      }
    }
  }
`;
