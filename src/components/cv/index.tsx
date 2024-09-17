import { useRef, useState } from "react";
import styled from "styled-components";
import Page from "./page";
import { useStore } from "@src/store";

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

  const isMobile = useStore((state) => state.isMobile);

  return isMobile ? (
    <MWrapper $mobile={isMobile}>
      <Page />
    </MWrapper>
  ) : (
    <Wrapper onMouseMove={move} onMouseLeave={clear} ref={componentRef}>
      <Container
        $rotate_x={Y * 0.001}
        $rotate_y={X * -0.001}
        $mobile={isMobile}
      >
        <Page />
      </Container>
    </Wrapper>
  );
};

export default CV;

const Wrapper = styled.div`
  perspective: 80px;
`;

const Container = styled.div.attrs<{
  $rotate_x?: number;
  $rotate_y?: number;
  $mobile: boolean;
}>((props) => ({
  style: {
    transform: `rotateX(${props.$rotate_x + "deg"}) rotateY(${
      props.$rotate_y + "deg"
    })`,
  },
}))`
  border: solid black 1px;
  width: ${(props) => (props.$mobile ? "auto" : "800px")};
  background-color: white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3) inset;
`;

const MWrapper = styled.div<{ $mobile: boolean }>`
  perspective: 80px;
  border: solid black 1px;
  width: ${(props) => (props.$mobile ? "auto" : "800px")};
  background-color: white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3) inset;
`;
