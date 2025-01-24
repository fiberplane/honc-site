import { css, cx } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

type MenuItemProps = PropsWithChildren<{
  anchorId: string;
  isActive: boolean;
  onClickHandler: () => void;
}>;

export function MenuItem({
  anchorId,
  children,
  isActive,
  onClickHandler,
}: MenuItemProps) {
  return (
    <li class={cx(menuItemClass, isActive && activeClass)} role="presentation">
      <a href={`#${anchorId}`} onClick={onClickHandler} role="menuitem">
        {children}
      </a>
    </li>
  );
}

type CtaMenuItemProps = PropsWithChildren<{
  href: string;
}>;

export function CtaMenuItem({ children, href }: CtaMenuItemProps) {
  return (
    <li class={cx(menuItemClass, ctaClass)} role="presentation">
      <a href={href} target="_blank" rel="noreferrer noopener" role="menuitem">
        {children}
      </a>
    </li>
  );
}

const menuItemClass = css`
  background-color: var(--color-bg-elevated);
  font: var(--font-code);
  transition: background-color 0.2s ease-in-out;
  border-radius: 0.25em;
  background-color: var(--color-bg-default);

  a {
    padding-inline: 1.25rem;
    height: 2.5rem;
    line-height: 1;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: color 0.2s ease-in-out;
    color: var(--color-fg-default);
  }
`;

const activeClass = css`
  a {
    color: var(--color-fg-primary);
  }
`;

const ctaClass = css`
  background-color: var(--color-bg-secondary);

  a svg {
    height: 1.25em;
    width: 1.25em;
  }
`;

export function CtaMenuItemGhost({ children, href }: CtaMenuItemProps) {
  return (
    <li class={cx(menuItemClass, ctaGhostClass)} role="presentation">
      <a href={href} target="_blank" rel="noreferrer noopener" role="menuitem">
        {children}
      </a>
    </li>
  );
}

export const ctaGhostClass = css`
  background-color: var(--color-bg-transparent);
`;
