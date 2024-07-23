import { css } from "hono/css";

export function Citation() {
  return (
    <blockquote class={blockQuoteClass}>
      <header>
        <h3>
          <abbr>HONC</abbr> <span>| hɒŋk |</span>
        </h3>
      </header>

      <p>
        abbreviation <span>informal</span>
      </p>

      <ul>
        {/* The ids are based on the OverviewItem's IconType */}
        <li>
          <a href="#hono">
            <b>H</b>: <span class={emphasisClass}>H</span>ono
          </a>
        </li>

        <li>
          <a href="#orm">
            <b>O</b>: Drizzle <span class={emphasisClass}>O</span>RM
          </a>
        </li>

        <li>
          <a href="#db">
            <b>N</b>: <span class={emphasisClass}>N</span>eon
          </a>
        </li>

        <li>
          <a href="#cloud">
            <b>C</b>: <span class={emphasisClass}>C</span>loudflare
          </a>
        </li>
      </ul>

      <p className={exampleClass}>
        "I can't believe I wasn't using <abbr>HONC</abbr> before. I'm finally
        part of the cool coding kids club now!"
      </p>
    </blockquote>
  );
}

const blockQuoteClass = css`
  display: grid;
  gap: .5rem;
  margin: 0 auto;
  background: var(--color-bg-elevated);
  padding: 1em 2em;
  border-left: 4px solid var(--color-border-secondary);
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  header {
    h3 {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 1ch;
      margin: 0;

      span {
        font-size: 0.7em;
        color: lightgrey;
        font-weight: normal;
      }
    }
  }

  p {
    margin: 0;

    span {
      color: lightgrey;
      font-style: italic;
    }
  }

  ul {
    list-style: none;
    padding-inline: 1em;
    font-size: .8em;

    li {
      margin: 0;
      padding: 0;
    }
  }
`;

const exampleClass = css`
  margin: 0;
  color: lightgrey;
  font-size: .8em;
  font-style: italic;
`;

const emphasisClass = css`
  font-weight: bold;
  text-decoration: underline;
`;
