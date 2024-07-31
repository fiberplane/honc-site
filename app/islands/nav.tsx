import { css } from "hono/css";
import { useEffect, useState } from "hono/jsx";

import { GithubIcon } from "../components";
import { anchorIds } from "../constants";

export function Nav() {
  const [activeId, setActiveId] = useState<string | undefined>();

  const handleIntersection = (entries: Array<IntersectionObserverEntry>) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );
    const elements = document.querySelectorAll(anchorSelectors);
    for (const element of elements) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getActiveClass = (id: string) =>
    activeId === id ? "active" : undefined;

  return (
    <nav class={navClass}>
      <ul>
        <li class={getActiveClass(anchorIds.intro)}>
          <a href={`#${anchorIds.intro}`}>Intro</a>
        </li>

        <li class={getActiveClass(anchorIds.overview)}>
          <a href={`#${anchorIds.overview}`}>Overview</a>
        </li>

        <li class={getActiveClass(anchorIds.quickstart)}>
          <a href={`#${anchorIds.quickstart}`}>Quickstart</a>
        </li>

        <li class="example">
          <a
            href="https://github.com/fiberplane/goose-quotes"
            rel="noreferrer noopener"
          >
            Sample API
            <GithubIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}

const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0.5,
};

const anchorSelectors = Object.values(anchorIds)
  .map((id) => `#${id}`)
  .join(", ");

const navClass = css`
  height: var(--spacing-nav-size);
  background-color: var(--color-bg-elevated);
  position: fixed;
  z-index: 1;
  width: 100%;
  border-bottom: 1px solid var(--color-bg-default);

  /* TODO: container query 800px for mobile */
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, auto);
    place-items: center;
    gap: 2rem;
    height: 100%;
    width: fit-content;
    margin-inline: auto;

    li {
      background-color: var(--color-bg-elevated);
      font: var(--font-code);
      transition: background-color 0.2s ease-in-out;
      border-radius: 0.25em;
      padding: 0.5rem 1.25rem;

      background-color: var(--color-bg-default);

      a {
        transition: color 0.2s ease-in-out;
        color: var(--color-fg-default);
      }

      &.active:not(.example) a {
        color: var(--color-fg-primary);
      }

      &.example {
        background-color: var(--color-bg-secondary);

        a {
          display: flex;
          align-items: center;
          gap: 0.5em;

          svg {
            height: 1em;
            width: 1em;
          }
        }
      }
    }
  }
`;
