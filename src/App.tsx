import React from "react";
import './i18n/config';
import styled, { createGlobalStyle } from 'styled-components'
import Header, { HeaderHeight } from "./components/header";
import CV from "./components/cv";
import LngSwitch from "./components/lngSwitch";
import Proverb from "./components/phrazes";
import Menu from "./components/menu";

export const BodyPadding = 20;


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body style={{ backgroundImage: "url(/images/18653.png)" }}>
        <MenuWrapper>
       
            <Menu/>
         
          <MenuBox>
            <Proverb />
          </MenuBox>
        </MenuWrapper>
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
const Body = styled.div`
  height: 1120px;
  display: flex;
  justify-content: space-around;
  padding: ${BodyPadding}px;
  background: #2a2a2a;
  background-size: contain;
  background-position-y: -260px;
  background-repeat: repeat-x;
`

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: white;
  background-color: #2a2a2a;
  border: solid 1px white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
`

const MenuWrapper = styled.div`
  height: calc(100vh - ${HeaderHeight}px - ${BodyPadding * 2}px);
  width: 450px;
  position: sticky;
  top: calc(${HeaderHeight / 2}px + ${BodyPadding}px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `



