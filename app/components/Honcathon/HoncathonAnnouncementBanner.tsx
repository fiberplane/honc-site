import { css } from "hono/css";

import { Wrapper } from "../Wrapper";

export function HoncathonAnnouncementBanner() {
  return (
    <aside class={asideClass} data-announcement>
      <Wrapper>
        <a href="/honcathon">🧑‍💻 Sign up for the November Honcathon! 🧑‍💻</a>
      </Wrapper>
    </aside>
  );
}

const asideClass = css`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: var(--color-bg-primary);
  display: block;
  width: 100%;
  display: grid;
  align-items: center;
  height: 2rem;
  
  [data-wrapper] {
    text-align: center;
  }
  
  a {
    text-transform: uppercase;
    font-family: Departure Mono, monospace;
    line-height: 1;
    margin: 0;
    color: var(--color-text-primary);
  }
`;
