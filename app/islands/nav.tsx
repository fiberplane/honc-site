import { css } from "hono/css";
import { useEffect, useState } from "hono/jsx";

import { GithubIcon, Wrapper } from "../components";
import { anchorIds } from "../constants";

export function Nav() {
  const [activeId, setActiveId] = useState<string>(anchorIds.intro);

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
      <Wrapper>
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
      </Wrapper>
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
  display: grid;
  align-items: center;

  /* TODO: container query 720px for mobile */
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;
    width: fit-content;
    margin-inline: auto;

    li {
      background-color: var(--color-bg-elevated);
      font: var(--font-code);
      transition: background-color 0.2s ease-in-out;
      border-radius: 0.25em;
      background-color: var(--color-bg-default);

      a {
        padding-inline: 1.25rem;
        height: 40px;
        line-height: 1;
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: color 0.2s ease-in-out;
        color: var(--color-fg-default);
      }

      &.active:not(.example) a {
        color: var(--color-fg-primary);
      }

      &.example {
        background-color: var(--color-bg-secondary);

        a svg {
          height: 1.25em;
          width: 1.25em;
        }
      }
    }
  }

  container-type: inline-size;
  @container (width <= 720px) {
    & {
      position: relative;
      isolation: isolate;
      z-index: 90;
    }

    ul {
      grid-auto-flow: row;
      justify-items: stretch;
      position: absolute;
      right: 0;
      top: var(--spacing-nav-size);
      z-index: 1;
      background-color: rgb(from var(--color-bg-elevated) r g b / 95%);
      backdrop-filter: blur(10px);
      box-shadow: 0 0 2rem 1rem rgb(from var(--color-bg-elevated) r g b / 50%);
      width: 100%;
      padding: 2rem;
    }
  }
`;
