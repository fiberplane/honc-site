import { css } from "hono/css";

export function Nav() {
  return (
    <nav class={navClass}>
      <ul>
        <li class="active">Intro</li>
        <li>Overview</li>
        <li>Quickstart</li>
        <li class="example">Example API</li>
      </ul>
    </nav>
  );
}

const navClass = css`
  height: var(--spacing-nav-size);

  /* TODO: container query 680px for mobile */
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 1rem;

    li {
      padding: 0.5rem 1.25rem;
      background-color: var(--color-bg-elevated);
      font: var(--font-code);

      &.active {
        color: var(--color-fg-primary);
      }

      &.example {
        background-color: var(--color-bg-secondary);
      }
    }
  }
`;
