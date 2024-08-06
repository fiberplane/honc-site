import { css } from "hono/css";
import { useEffect, useState, type PropsWithChildren } from "hono/jsx";

import { Wrapper } from "../components/Wrapper";

type GetStartedProps = PropsWithChildren<{
  title: string;
}>;

export function GetStarted({ children, title }: GetStartedProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("h");
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

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <Wrapper narrow>
      <section class={sectionClass}>
        <h1>{title}</h1>

        <div>
          {children}
          <button type="button" onClick={handleCopy}>
            {isCopied ? "copied" : "copy"}
          </button>
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
