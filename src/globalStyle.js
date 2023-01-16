import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #151515;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}

`;

export default GlobalStyle;
