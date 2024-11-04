import { css } from "hono/css";
import { Wrapper } from "../Wrapper";

export function SignUpForm() {
  return (
    <Wrapper>
      <div class={signUpFormClass}>
        <div data-tf-live="01JBF65MV61KFVS35H83ZSVDQZ" />
        <script src="//embed.typeform.com/next/embed.js" />
      </div>
    </Wrapper>
  );
}

const signUpFormClass = css`
  width: min(100%, 600px);
  margin-inline: auto;
`;
