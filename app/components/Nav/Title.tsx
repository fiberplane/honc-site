import { css, keyframes } from "hono/css";
import { memo } from "hono/jsx";

export const Title = memo(function Title() {
  const title = "HONC";

  console.log("render?");

  return (
    <header class={headerClass}>
      <span class={spanClass}>HI</span>

      {/* {[...title].map((l, i) => {
        const spanClass = getSpanClass(i);
        return (
          <span class={spanClass} key={{ i: l }}>
            {l}
          </span>
        );
      })} */}
    </header>
  );
});

function getSpanClass(i: number) {
  return css`
    &:nth-child(${i + 1}) {
      animation-delay: calc(var(--animation-delay) * ${i});
    }
  `;
}

const spanClass = css`
  animation-delay: var(--animation-delay);
`;

const rollInKeyframes = keyframes`
  0% {
    opacity: 0;
    scale: 1;
  }
  75% {
    scale: 1.05;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
`;

const headerClass = css`
  --animation-delay: 0.1s;

  font: var(--font-headings-h1);
  font-size: 1.75rem;
  line-height: 1;
  margin: 0;

  span {
    opacity: 0;
    transform-origin: top center;
    animation-name: ${rollInKeyframes};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.11, 1.22, 0.79, 1.43);
  }
`;
