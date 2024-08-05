import { css } from "hono/css";
import { useEffect, useRef } from "hono/jsx";

import { useIntersectionObserver } from "../hooks";

export default function AsciiArt() {
  const preRef = useRef<HTMLPreElement>(null);
  const isIntersecting = useRef(false);

  const intersectionObserverCallback = (
    entries: Array<IntersectionObserverEntry>,
    observer: IntersectionObserver,
  ) => {
    for (const element of entries) {
      const refElement = element.target;
      if (!refElement) {
        continue;
      }

      if (element.isIntersecting) {
        isIntersecting.current = true;
        observer.unobserve(refElement);
        observer.disconnect();
      }
    }
  };

  // As, apparently, `document` can't be accessed anywhere else than in
  // useEffect, we need to store the elements in a ref to be able to access them
  useIntersectionObserver(preRef, intersectionObserverCallback, {
    rootMargin: "0px 0px -70% 0px",
  });

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) {
      return;
    }

    let chance = 0.05;

    const interval = setInterval(() => {
      const newMatrix = matrix
        .map((row) =>
          [...row]
            .map((char) => (Math.random() > chance ? getRandomChar() : char))
            .join(""),
        )
        .join("\n");

      pre.textContent = newMatrix;

      if (isIntersecting.current) {
        chance += 0.03;
      }

      if (chance >= 1.05) {
        clearInterval(interval);
      }
    }, 75);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <pre ref={preRef} class={preClass}>
      <span>{asciiArt.trim()}</span>
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

function getRandomChar() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()/\\|[]{}<>~`";

  return characters.charAt(Math.floor(Math.random() * characters.length));
}

const preClass = css`
  white-space: pre;
  display: inline-block;
  margin-inline: auto;

  span {
    visibility: hidden;
  }
`;
