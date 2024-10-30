import { css } from "hono/css";
import { Wrapper } from "../Wrapper";

type HoncathonHeaderProps = {
  title: string;
  subtitle?: string;
};

export function HoncathonHeader({ subtitle, title }: HoncathonHeaderProps) {
  return (
    <header>
      <Wrapper center>
        <h2 class={h2Class}>{title}</h2>
      </Wrapper>

      <Wrapper center narrow>
        {subtitle && <p>{subtitle}</p>}
      </Wrapper>
    </header>
  );
}

const h2Class = css`
  font-family: Departure Mono, monospace;
  font-size: 5rem;
  line-height: 0.875;
  letter-spacing: -0.04em;
`;
