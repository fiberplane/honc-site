import type { PropsWithChildren } from "hono/jsx";

import { Wrapper } from "./Wrapper";
import { css } from "hono/css";

type GetStartedProps = PropsWithChildren<{
  title: string;
}>;

export function GetStarted({ children, title }: GetStartedProps) {
  return (
    <Wrapper narrow>
      <section class={sectionClass}>
        <h1>{title}</h1>

        <div>
          {children}
          <button type="button">copy</button>
        </div>
      </section>
    </Wrapper>
  );
}

const sectionClass = css`
  --section-get-started-radius: 0.5rem;

  h1 {
    text-align: center;
    font-size: clamp(2.5rem, 14lvw, 5rem);
  }

  div {
    display: grid;
    grid-template-columns: 1fr auto;

    pre {
      background: var(--color-border-secondary);
      outline: 1px solid var(--color-border);
      display: grid;
      align-content: center;
      padding: 1rem 2rem;
      border-top-left-radius: var(--section-get-started-radius);
      border-bottom-left-radius: var(--section-get-started-radius);
      overflow-x: auto;
    }

    button {
      padding-inline: 1.5rem;
      border: none;
      background: var(--color-bg-secondary);
      font: var(--font-code);
      font-weight: bolder;
      cursor: pointer;
      transition: box-shadow 0.2s ease-in-out;
      border-top-right-radius: var(--section-get-started-radius);
      border-bottom-right-radius: var(--section-get-started-radius);

      &:hover {
        box-shadow: 0 0 2rem 0.5rem
          rgb(from var(--color-bg-secondary) r g b / 0.8);
      }
    }
  }
`;
