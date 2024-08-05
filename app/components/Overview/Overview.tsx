import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

import { anchorIds } from "../../constants";
import { Wrapper } from "../Wrapper";

type OverviewProps = PropsWithChildren<{
  title: string;
}>;

export function Overview({ children, title }: OverviewProps) {
  return (
    <Wrapper narrow>
      <section class={sectionClass}>
        <h1 id={anchorIds.overview}>{title}</h1>

        <ul>{children}</ul>
      </section>
    </Wrapper>
  );
}

const sectionClass = css`
  h1 {
    text-align: center;
    font-size: clamp(2.5rem, 14lvw, 5rem);
  }
  
  ul {
    border-radius: 2rem;
    overflow: hidden;
    display: grid;
    gap: 2rem;
    list-style: none;
    padding: 0;
    
    & > li {
      padding: 3rem 2rem;
      width: 100%;
      background-color: var(--color-bg-elevated);
    }
  }
`;
