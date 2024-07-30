import { css, cx } from "hono/css";
import { useEffect, useState } from "hono/jsx";

import { anchorIds } from "../constants";

export function Nav() {
  const [activeId, setActiveId] = useState<string | undefined>();

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
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
  }, []);

  const getActiveClass = (id: string) => (activeId === id ? "active" : "");

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

        {/* TODO: Set `active` class when CTA is not intersecting */}
        <li class="example">
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
        transition: color 0.2s ease-in-out;
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
