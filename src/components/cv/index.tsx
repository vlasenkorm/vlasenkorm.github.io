import { useRef, useState } from "react";
import styled from "styled-components";
import Page from "./page";

const CV: React.FC = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  const move = (e: any) => {
    setX(e.clientX - 1000);
    setY(e.clientY - 400);
  };

  const clear = () => {
    setX(0);
    setY(0);
  };

  return (
    <Container onMouseMove={move} onMouseLeave={clear} ref={componentRef}>
      <Wrapper $rotate_x={Y * 0.001} $rotate_y={X * -0.001}>
        <Page />
      </Wrapper>
    </Container>
  );
};

export default  CV;

const Wrapper = styled.div.attrs<{ $rotate_x?: number; $rotate_y?: number }>(
  (props) => ({
    style: {
      transform: `rotateX(${props.$rotate_x + "deg"}) rotateY(${
        props.$rotate_y + "deg"
      })`,
    },
  })
)`
  border: solid black 2px;
  width: 800px;
  background-color: white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4) inset;
`;

const Container = styled.div`
  perspective: 80px;
`;
