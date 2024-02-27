import React from "react";
import { createGlobalStyle } from 'styled-components'
import Counter from './Counter'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`

const App: React.FC = () => {
  return (
    <div>
      <div>vlasenkorm</div>
      <Counter/>
    </div>
  );
};
export default App;
