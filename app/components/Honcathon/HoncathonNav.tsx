import { css } from "hono/css";

import { Wrapper } from "../Wrapper";
import { GithubIcon } from "../icons";

export function HoncathonNav() {
  return (
    <nav>
      <Wrapper className={wrapperClassName}>
        <a href="/">
          <h1>HONC</h1>
        </a>

        {/* <a
          class={anchorClass}
          href="https://github.com/fiberplane/goose-quotes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          Sample API
        </a> */}
      </Wrapper>
    </nav>
  );
}

const wrapperClassName = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-block: 1.5rem;

  h1 {
    font-size: 2.5rem;
    line-height: 1;
    margin: 0;
    color: var(--color-fg-default);
  }
`;

const anchorClass = css`
  display: grid;
  grid-template-columns: 1rem 1fr;
  align-items: center;
  gap: 12px;
  background-color: var(--color-bg-primary);
  color: var(--color-fg-default);
  border-radius: 0.375em;
  padding: 0.75rem 1rem;
  line-height: 1;

  & > svg {
    height: 1em;
    width: 1em;
  }
`;
