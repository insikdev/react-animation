import React, { useState } from "react";
import styled from "styled-components";
import Accordion from "./Accordion";
import Test from "./Test";
import Toggle from "./Toggle";

const Container = styled.section`
  width: 600px;
  height: 600px;
  background-color: aliceblue;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const options = [<Test />, <Toggle />, <Accordion />];

const Main = () => {
  const [index, setIndex] = useState(0);
  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => setIndex(Number(value));

  return (
    <main>
      <select onChange={onChange}>
        {options.map((item, index) => (
          <option key={index} value={index} label={item.type.name} />
        ))}
      </select>
      <Container>{options[index]}</Container>
    </main>
  );
};

export default Main;
