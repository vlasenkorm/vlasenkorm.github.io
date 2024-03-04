import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import Counter from './Counter'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <div>vlasenkorm TM</div>
      <Counter />
    </Wrapper>
  );
};
export default App;
