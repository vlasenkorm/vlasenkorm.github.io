import React from "react";
import "./i18n/config";
import styled, { createGlobalStyle } from "styled-components";
import { useStore } from "./store";
import Header, { HeaderHeight } from "./components/header";
import CV from "./components/cv";
import LngSwitch from "./components/switch/lngSwitch";
import Proverb from "./components/phrases";
import Contact from "./components/contact";
import { Background } from "./components/background";
import DownloadPDF from "./components/downloadPDF";
import useScreenSize from "./utils/resizeHook";

export const BodyPadding = 20;

const App: React.FC = () => {
  useScreenSize();

  const isMobile = useStore((state) => state.isMobile);

  console.log("isMobile", isMobile);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body $theme={useStore((state) => state.theme)}>
        {isMobile ? (
          <MobileWrapper>
            <Contact />
            <CV />
          </MobileWrapper>
        ) : (
          <>
          <Background />
            <LeftSection>
              <Contact />
              <Proverb />
            </LeftSection>
            <CV />
            <RightSection>
              <LngSwitch />
              <DownloadPDF />
            </RightSection>
          </>
        )}
      </Body>
    </>
  );
};
export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;
const Body = styled.div<{ $theme: boolean }>`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: ${BodyPadding}px;
  background: ${(props) => (props.$theme ? "#f8f8f8" : "#2a2a2a")};
`;

const LeftSection = styled.section`
  height: calc(100vh - ${HeaderHeight}px - ${BodyPadding * 2}px);
  width: 450px;
  position: sticky;
  top: calc(${HeaderHeight / 2}px + ${BodyPadding}px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightSection = styled.aside`
  position: sticky;
  top: calc(${HeaderHeight / 2}px + 20px);
  height: calc(100vh - ${HeaderHeight}px - ${BodyPadding * 2}px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;



const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
`;