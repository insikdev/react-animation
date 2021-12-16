import * as styled from "styled-components";
import reset from "styled-reset";

const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  #root {
    width: 100vw;
    height: 100vh;
    background-color: #130f40;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
