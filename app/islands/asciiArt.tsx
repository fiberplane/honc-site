import { css, cx } from "hono/css";
import { useEffect, useRef, useState } from "hono/jsx";

import { useIntersectionObserver } from "../hooks";

export default function AsciiArt() {
  const preRef = useRef<HTMLPreElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleIntersection = (
    entries: Array<IntersectionObserverEntry>,
    observer: IntersectionObserver,
  ) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }
  };

  useIntersectionObserver(preRef, handleIntersection, { threshold: 0.3 });

  useEffect(() => {
    if (!isIntersecting) {
      return;
    }

    const pre = preRef.current;
    if (!pre) {
      return;
    }

    let chance = 0.05;

    const interval = setInterval(() => {
      const newMatrix = matrix
        .map((row) =>
          [...row]
            .map((character) =>
              Math.random() > chance ? getRandomCharacter() : character,
            )
            .join(""),
        )
        .join("\n");

      pre.textContent = newMatrix;

      chance += 0.03;

      if (chance >= 1.05) {
        clearInterval(interval);
      }
    }, 75);

    return () => {
      clearInterval(interval);
    };
  }, [isIntersecting]);

  return (
    <pre ref={preRef} class={cx(preClass, isIntersecting && "fade-in")}>
      <span>{asciiArt}</span>
    </pre>
  );
}

const asciiArt = `
┏┓
┃┃╱╲ In this
┃╱╱╲╲ house
╱╱╭╮╲╲ we love
▔▏┗┛▕▔ & appreciate
╱▔▔▔▔▔▔▔▔▔▔╲
|   JSON   |
╱╱┏┳┓╭╮┏┳┓╲╲
▔▏┗┻┛┃┃┗┻┛▕▔
`.trim();

const art = asciiArt.split("\n");
const columnCount = art.reduce((a, r) => (r.length > a ? r.length : a), 0);
const matrix = art.map((row) => {
  if (row.length < columnCount) {
    return row + " ".repeat(columnCount - row.length);
  }
  return row;
});

function getRandomCharacter() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()/\\|[]{}<>~`";

  return characters.charAt(Math.floor(Math.random() * characters.length));
}

const preClass = css`
  white-space: pre;
  display: inline-block;
  margin-inline: auto;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  font: var(--font-code);

  &.fade-in {
    opacity: 1;
  }

  span {
    visibility: hidden;
  }
`;
