import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import Counter from './Counter'
import Menu from "./components/menu";
import CV from "./components/cv";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  background: #2a2a2a;
`

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <FlexCenter>
        <CV />
      </FlexCenter>
    </>
  );
};
export default App;
