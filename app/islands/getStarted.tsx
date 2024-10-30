import { css, cx } from "hono/css";
import { type PropsWithChildren, useEffect, useRef, useState } from "hono/jsx";

import { Wrapper } from "../components/Wrapper";

type GetStartedProps = PropsWithChildren<{
  title: string;
}>;

export function GetStarted({ children, title }: GetStartedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const codeContent = containerRef?.current
      ?.querySelector("code")
      ?.textContent?.trim();
    if (!codeContent) {
      console.error("No code content");
      return;
    }

    try {
      await navigator.clipboard.writeText(codeContent);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy to clipboard: ", error);
    }
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isCopied) {
      timeout = setTimeout(() => setIsCopied(false), 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied]);

  return (
    <section class={sectionClass}>
      <h1>{title}</h1>

      <div ref={containerRef}>
        {children}
        <button
          type="button"
          onClick={handleCopy}
          class={cx(isCopied && "copied")}
        >
          <span>copy</span>
          <span>copied!</span>
        </button>
      </div>
    </section>
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
      font: var(--font-code);
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
      position: relative;

      span:nth-of-type(2) {
        display: none;
        position: absolute;
        inset: 0;
        margin: auto;
      }

      &.copied {
        span:first-of-type {
          visibility: hidden;
        }

        span:nth-of-type(2) {
          display: grid;
          align-content: center;
        }
      }

      &:hover {
        box-shadow: 0 0 1rem 0
          rgb(from var(--color-bg-secondary) r g b / 0.8);
      }
    }
  }
`;
