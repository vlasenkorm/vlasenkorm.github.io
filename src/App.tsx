import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import Counter from './Counter'
import Menu from "./components/menu";
import CV from "./components/cv";
//import Background from "./img/19653.jpeg"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  background: #2a2a2a;
  box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.4) inset;
  background-size: contain;
  background-position-y: -140px;
  background-repeat: repeat-x;
  background-position-x: 650px;
`

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <FlexCenter style={{ backgroundImage: "url(/images/18653.png)" }}>
        <CV />
      </FlexCenter>
    </>
  );
};
export default App;
