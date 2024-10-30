import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

type WrapperProps = PropsWithChildren<{
  center?: boolean;
  className?: ReturnType<typeof css>;
  narrow?: boolean;
}>;

export function Wrapper({ center, children, className, narrow }: WrapperProps) {
  return (
    <div
      class={cx(wrapperClass, className)}
      data-wrapper
      data-center={center}
      data-narrow={narrow}
    >
      {children}
    </div>
  );
}

const wrapperClass = css`
  --spacing-wrapper: 2rem;

  width: min(calc(100% - var(--spacing-wrapper) * 2), 75rem);
  margin-inline: auto;

  @media screen and (width <= 480px) {
    --spacing-wrapper: 1rem;
  }

  &[data-narrow="true"] {
    width: min(calc(100% - var(--spacing-wrapper) * 2), 55rem)
  }

  &[data-center="true"] {
    text-align: center;
  }
`;
