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
  background-color: grey;
`;

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <FlexCenter><CV /></FlexCenter>
    </>
  );
};
export default App;
