import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

import * as Icon from "./icons";

type IconType = "hono" | "orm" | "db" | "cloud";

type OverviewItemProps = PropsWithChildren<{
  title: string;
  iconType: IconType;
}>;

export function OverviewItem({ iconType, title, children }: OverviewItemProps) {
  const Icon = getIcon(iconType);

  return (
    <li class={OverviewItemClass}>
      <header id={iconType}>
        <Icon />
        <h3>{title}</h3>
      </header>

      <p>{children}</p>
    </li>
  );
}

const getIcon = (iconType: IconType) => {
  switch (iconType) {
    case "hono":
      return Icon.HonoIcon;
    case "orm":
      return Icon.OrmIcon;
    case "db":
      return Icon.DbIcon;
    case "cloud":
      return Icon.CloudIcon;
  }
};

const OverviewItemClass = css`
  display: grid;
  gap: 1rem;
  align-content: start;
  padding: 1.5rem 2rem;
  font-size: 1rem;

  header {
    line-height: 1;
    display: grid;
    align-items: center;
    grid-template-columns: 48px 1fr;
    gap: 12px;

    & > svg {
      margin-inline: auto;
      width: 1.5em;
    }
  }

  p,
  header h3 {
    margin: 0;
  }
`;
