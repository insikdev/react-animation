import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

import Toggle from "./components/Toggle";

const Container = styled.section`
  width: 600px;
  height: 600px;
  background-color: aliceblue;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Toggle></Toggle>
      </Container>
    </>
  );
};

export default App;
