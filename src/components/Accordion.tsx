import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Box = styled(motion.div)`
  margin: auto;
  width: 250px;
  height: 50px;
  background-color: #bdc3c7;
  border-radius: 4px;
`;

const Title = styled(motion.div)`
  height: 50px;
  line-height: 50px;
  padding: 0px 10px;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

const Content = styled(motion.div)`
  margin-top: 10px;
  background-color: #ced6e0;
  padding: 8px;
  border-radius: 4px;
`;

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contentVariants = {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "auto",
      opacity: 1,
    },
  };

  return (
    <Box>
      <Title onClick={() => setIsOpen((prev) => !prev)}>
        <Text>Title</Text>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={32}
          height={32}
          style={{ originX: "16px", originY: "16px" }}
          animate={{
            rotate: isOpen ? 180 : 0,
            color: isOpen ? "rgb(255,0,0)" : "rgb(0,0,0)",
          }}
        >
          <path
            fill="currentColor"
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
          />
        </motion.svg>
      </Title>
      <AnimatePresence>
        {isOpen && (
          <Content
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{ ease: "linear" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            culpa! Illo vero neque nam autem nobis quas, eveniet cupiditate
            mollitia laborum animi, exercitationem culpa eaque asperiores
            voluptas expedita ipsam itaque!
          </Content>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Accordion;
