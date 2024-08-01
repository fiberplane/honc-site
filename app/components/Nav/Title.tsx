import { css } from "hono/css";

export function Title() {
  return <span class={titleClass}>HONC</span>;
}

const titleClass = css`
  font: var(--font-headings-h1);
  font-size: 1.75rem;
  line-height: 1;
  margin: 0;
  padding: 0;
`;
