import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

type WrapperProps = PropsWithChildren<{
  className?: ReturnType<typeof css>;
  narrow?: boolean;
}>;

export function Wrapper({ children, className, narrow }: WrapperProps) {
  return (
    <div data-wrapper class={cx(wrapperClass, className, narrow && "narrow")}>
      {children}
    </div>
  );
}

const wrapperClass = css`
  --spacing-wrapper: 2rem;

  width: min(calc(100% - calc(var(--spacing-wrapper)) * 2), 75rem);
  margin-inline: auto;

  @media screen and (width <= 480px) {
    --spacing-wrapper: 1rem;
  }

  &.narrow {
    width: min(calc(100% - calc(var(--spacing-wrapper)) * 2), 55rem)
  }
`;
