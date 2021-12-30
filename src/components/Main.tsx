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
`;

const options = [
  { component: <Test />, label: "Test" },
  { component: <Toggle />, label: "Toggle" },
  { component: <Accordion />, label: "Accordion" },
];

const Main = () => {
  const [index, setIndex] = useState(0);
  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => setIndex(Number(value));

  return (
    <main>
      <select onChange={onChange}>
        {options.map((item, index) => (
          <option key={index} value={index} label={item.label} />
        ))}
      </select>
      <Container>{options[index].component}</Container>
    </main>
  );
};

export default Main;
