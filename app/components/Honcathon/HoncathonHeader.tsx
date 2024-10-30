import { css } from "hono/css";
import { Wrapper } from "../Wrapper";

type HoncathonHeaderProps = {
  title: string;
  subtitle?: string;
};

export function HoncathonHeader({ subtitle, title }: HoncathonHeaderProps) {
  return (
    <Wrapper center>
      <header>
        <h2 class={h2Class}>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </header>
    </Wrapper>
  );
}

const h2Class = css`
  font-family: Departure Mono, monospace;
  font-size: 5rem;
  line-height: 0.875;
  letter-spacing: -0.04em;
`;
