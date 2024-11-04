import { css } from "hono/css";
import { Wrapper } from "../Wrapper";

export function HoncathonAsciiLogo() {
  return (
    <Wrapper>
      <h2 class={h2Class}>
        <span class="logo-sr-text">HONCATHON</span>

        <pre class={HoncathonAsciiLogoClass} aria-hidden="true">
          {HONCATHON_ASCII}
        </pre>
      </h2>
    </Wrapper>
  );
}

const HONCATHON_ASCII = `
  **      **   *******   ****     **   ******      **     ********** **      **   *******   ****     **
 /**     /**  **/////** /**/**   /**  **////**    ****   /////**/// /**     /**  **/////** /**/**   /**
 /**     /** **     //**/**//**  /** **    //    **//**      /**    /**     /** **     //**/**//**  /**
 /**********/**      /**/** //** /**/**         **  //**     /**    /**********/**      /**/** //** /**
 /**//////**/**      /**/**  //**/**/**        **********    /**    /**//////**/**      /**/**  //**/**
 /**     /**//**     ** /**   //****//**    **/**//////**    /**    /**     /**//**     ** /**   //****
 /**     /** //*******  /**    //*** //****** /**     /**    /**    /**     /** //*******  /**    //***
  //      //   ///////   //      ///   //////  //      //     //     //      //   ///////   //      ///
`;

const h2Class = css`
  position: relative;

  pre {
    font-family: Departure Mono, monospace;
  }

  .logo-sr-text {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const HoncathonAsciiLogoClass = css`
  line-height: 1;
  letter-spacing: -0.09em;
  text-align: center;
  container: inline-size;
  font-size: clamp(0.4rem, 1.6cqw, 1.3rem);
`;
