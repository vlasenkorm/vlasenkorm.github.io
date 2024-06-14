import React from "react";
import './i18n/config';
import styled, { createGlobalStyle } from 'styled-components'
import Header, { HeaderHeight } from "./components/header";
import CV from "./components/cv";
import LngSwitch from "./components/switch/lngSwitch";
import Proverb from "./components/phrazes";
import Contact from "./components/contact";
import { useGStore } from "./store";

export const BodyPadding = 20;

const App: React.FC = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Body $theme={useGStore((state) => state.theme)} style={{ backgroundImage: "url(/images/18653.png)" }}>
        <LeftWrapper>
          <Contact />
          <Proverb />
        </LeftWrapper>
        <CV />
        <LngSwitch />
      </Body>
    </>
  );
};
export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
const Body = styled.div<{ $theme: boolean }>`
  display: flex;
  justify-content: space-around;
  padding: ${BodyPadding}px;
  background: ${props => props.$theme ? '#f8f8f8' : '#2a2a2a'};
  background-size: contain;
  background-position-y: -260px;
  background-repeat: repeat-x;
`

const LeftWrapper = styled.div`
  height: calc(100vh - ${HeaderHeight}px - ${BodyPadding * 2}px);
  width: 450px;
  position: sticky;
  top: calc(${HeaderHeight / 2}px + ${BodyPadding}px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `



