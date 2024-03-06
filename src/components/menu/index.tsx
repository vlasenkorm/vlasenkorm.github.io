//import { Wrapper } from "./menuComponents";

import styled from "styled-components";

const Menu: React.FC = () => {

  return (
    <Wrapper>
      <FirstBox><h3>Roman Vlasenko<br />Front-end Engineer</h3></FirstBox>
      <Box><h3>Menu</h3></Box>
      <Box><h3>vlasenkorm@gmail.com</h3></Box>
    </Wrapper>
  );
};

export default Menu;


export const Wrapper = styled.div`
  display: flex;
  border: solid white 2px;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: #2a2a2a;
`

export const Box = styled.div`
 width: 200px;
 text-align: center;
`
export const FirstBox = styled.div`
 width: 200px;
 text-align: left;
`
