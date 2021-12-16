import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Container = styled.div<{ isToggle: boolean }>`
  width: 70px;
  height: 40px;
  border-radius: 50px;
  background-color: gray;
  padding: 5px;
  display: flex;
  flex-direction: ${(props) => (props.isToggle ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Button = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.span`
  font-size: 20px;
`;

const Toggle = () => {
  const [isToggle, setIsToggle] = useState(false);
  const onClick = () => setIsToggle((prev) => !prev);
  return (
    <Container isToggle={isToggle}>
      <Button
        onClick={onClick}
        layout
        whileHover={{ boxShadow: "0 0 2px 3px #fbc531" }}
      />
      <Icon>{isToggle ? "🌞" : "🌙"}</Icon>
    </Container>
  );
};

export default Toggle;
