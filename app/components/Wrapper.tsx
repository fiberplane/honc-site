import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

type WrapperProps = PropsWithChildren<{
  className?: ReturnType<typeof css>;
}>;

export function Wrapper({ children, className }: WrapperProps) {
  return (
    <div data-wrapper class={cx(wrapperClass, className)}>
      {children}
    </div>
  );
}

const wrapperClass = css`
  width: min(calc(100% - 4rem), 1200px);
  margin-inline: auto;
`;
