import { css } from "hono/css";
import { Wrapper } from "../Wrapper";

type HoncathonHeaderProps = {
  emoji?: string;
  preheader?: string;
  subtitle?: string;
  title: string;
};

export function HoncathonHeader({
  emoji,
  preheader,
  subtitle,
  title,
}: HoncathonHeaderProps) {
  return (
    <header class={headerClass}>
      {emoji && (
        <Wrapper center>
          <p data-emoji>{emoji}</p>
        </Wrapper>
      )}

      {preheader && (
        <Wrapper center narrow>
          <p data-preheader>{preheader}</p>
        </Wrapper>
      )}

      <Wrapper center>
        <h2 class={h2Class}>{title}</h2>
      </Wrapper>

      {subtitle && (
        <Wrapper center narrow>
          <p>{subtitle}</p>
        </Wrapper>
      )}
    </header>
  );
}

const headerClass = css`
  margin-block: 5rem;

  &:has([data-emoji]),
  &:has([data-preheader]) {
    h2 {
      margin-block-start: 0.5em;
    }
  }

  [data-emoji] {
    font-size: 2rem;
  }

  [data-preheader] {
    color: hsl(from var(--color-fg-default) h s 70%);
  }

  [data-wrapper] p {
    max-width: 65ch;
    margin-inline: auto;
    text-wrap: pretty;
  }
`;

const h2Class = css`
  container-type: inline-size;
  font-family: Departure Mono, monospace;
  font-size: clamp(3rem, 10cqw, 5rem);
  line-height: 0.875;
  letter-spacing: -0.04em;
`;
