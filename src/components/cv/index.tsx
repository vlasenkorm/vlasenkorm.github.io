import { memo, useRef, useState } from "react";
import styled from "styled-components";
import Page from "./page";
import useScreenSize from "@src/utils/resizeHook";
import { useStore } from "@src/store";

const CV: React.FC = () => {
console.log('CV: React.FC');
  
  const isMobile = useStore((state) => state.isMobile)

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
      <Wrapper $rotate_x={Y * 0.001} $rotate_y={X * -0.001} $mobile={isMobile}>
        <Page />
      </Wrapper>
    </Container>
  );
};

export default  CV;

const Wrapper = styled.div.attrs<{ $rotate_x?: number; $rotate_y?: number; $mobile: boolean }>(
  (props) => ({
    style: {
      transform: `rotateX(${props.$rotate_x + "deg"}) rotateY(${
        props.$rotate_y + "deg"
      })`,
    },
  })
)`
  border: solid black 2px;
  width: ${(props) => props.$mobile ? '100%' : '800px'};
  background-color: white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4) inset;
`;

const Container = styled.div`
  perspective: 80px;
`;
