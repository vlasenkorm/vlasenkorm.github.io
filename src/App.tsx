import React from "react";
import styled, { createGlobalStyle } from 'styled-components'
import Header, { HeaderHeight } from "./components/header";
import CV from "./components/cv";
import './i18n/config';
import LngSwitch from "./components/lngSwitch";

export const BodyPadding = 20;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`
const Body = styled.div`
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
  color: white;
  background-color: #2a2a2a;
  border-radius: 10px;
  border: solid 2px white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
  font-family: "Kalam";
`

const FlexBox = styled.div`
  height: calc(100vh - ${HeaderHeight}px - ${BodyPadding*2}px);
  position: sticky;
  top: calc(${HeaderHeight/2}px + ${BodyPadding}px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Body style={{ backgroundImage: "url(/images/18653.png)" }}>
      <FlexBox>
        <MenuBox>
          <h3>Mail: vlasenkorm@gmail.com</h3>
          localization
          <LngSwitch />
        </MenuBox>
        <MenuBox>
          <div>
            What is evil? Everything that comes from weakness.<br/>
            Was it schlecht? Alles, was aus der Schwäche stammt.<br/>
            F.W. Nietzsche “Antichrist”<br/>
            Friedrich Wilhelm Nietzsche: Der Antichris<br/>
          </div>
        </MenuBox>
        </FlexBox>
        <CV />
      </Body>
    </>
  );
};
export default App;
