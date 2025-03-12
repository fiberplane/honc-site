import { css } from "hono/css";
import { Wrapper } from "../Wrapper";
import qrCode from "./QR.png?inline";

export function AfterHoursSignUp() {
  return (
    <Wrapper className={wrapperClass} narrow>
      <h1>Sign up for the after hours event</h1>

      <img src={qrCode} alt="" />
    </Wrapper>
  );
}

const wrapperClass = css`
  display: grid;
  justify-items: center;

  h1 {
    text-align: center;
    margin-top: 0;
  }
`;
