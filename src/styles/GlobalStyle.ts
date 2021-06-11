import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}
:root, html {
height: 100%;
/* Colors: */
--unnamed-color-e82b52: #E82B52;
--unnamed-color-124e91: #124E91;
--unnamed-color-454860: #454860;
--unnamed-color-a3b1c6: #A3B1C6;
--unnamed-color-c2cbd9: #C2CBD9;
--unnamed-color-f6f7f9: #F6F7F9;
--unnamed-color-ffffff: #FFFFFF;
--unnamed-color-3578eb: #3578EB;
--unnamed-color-96b7f2: #96B7F2;

/* Font/text values */
--unnamed-font-family-open-sans: Open Sans;
--unnamed-font-style-normal: normal;
--unnamed-font-weight-normal: normal;
--unnamed-font-weight-bold: bold;
--unnamed-font-size-16: 16px;
--unnamed-font-size-20: 20px;
--unnamed-character-spacing-0: 0px;
--unnamed-line-spacing-27: 27px;
--unnamed-line-spacing-28: 28px;
body {
  position: relative;
  width: 100%;
  min-height: 100%;
  font-size: var(--unnamed-font-size-16);
  font-family: var(--unnamed-font-family-open-sans);
  font-weight: var(--unnamed-font-weight-normal);
  @media(orientation: portrait) {
    min-height: 200vh;
  }
}
}
`;

export default GlobalStyle;
