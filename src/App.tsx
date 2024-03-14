import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import Menu from "./components/menu";
import CV from "./components/cv";
import './i18n/config';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  background: #2a2a2a;
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
