import { css } from "hono/css";

export function Nav() {
  return (
    <nav class={navClass}>
      <ul>
        <li class="active">
          <a href="#intro">Intro</a>
        </li>

        <li>
          <a href="#overview">Overview</a>
        </li>

        <li>
          <a href="#quickstart">Overview</a>
        </li>

        <li class="example active">
          <a
            href="https://github.com/fiberplane/goose-quotes"
            rel="noreferrer noopener"
          >
            Sample API
          </a>
        </li>
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

      a {
        color: var(--color-fg-default);
      }

      &.active:not(.example) a {
        color: var(--color-fg-primary);
      }

      &.example.active {
        background-color: var(--color-bg-secondary);
      }
    }
  }
`;
