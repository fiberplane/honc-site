import { css } from "hono/css";
import type { PropsWithChildren } from "hono/jsx";

import cloudSvg from "./icons/cloud.svg?url";
import dbSvg from "./icons/db.svg?url";
import honoSvg from "./icons/hono.svg?url";
import ormSvg from "./icons/orm.svg?url";

type IconType = "hono" | "orm" | "db" | "cloud";

type OverviewItemProps = PropsWithChildren<{
  title: string;
  iconType: IconType;
}>;

export function OverviewItem({ iconType, title, children }: OverviewItemProps) {
  const iconPath = getIconPath(iconType);

  return (
    <li class={OverviewItemClass}>
      <header id={iconType}>
        <img src={iconPath} alt="he" />
        <h3>{title}</h3>
      </header>

      <p>{children}</p>
    </li>
  );
}

const getIconPath = (iconType: IconType) => {
  switch (iconType) {
    case "hono":
      return honoSvg;
    case "orm":
      return ormSvg;
    case "db":
      return dbSvg;
    case "cloud":
      return cloudSvg;
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
