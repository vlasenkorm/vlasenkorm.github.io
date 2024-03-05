//import { Wrapper } from "./menuComponents";

import styled from "styled-components";

const Menu: React.FC = () => {

  return (
    <Wrapper>
      <h3>
        Roman Vlasenko<br/>
        Front-end Engineer
      </h3>
      <h3>Menu</h3>
      <h3>icon</h3>
    </Wrapper>
  );
};

export default Menu;


const Wrapper = styled.div`
  display: flex;
  border: solid black 2px;
  justify-content: space-between;
`;
