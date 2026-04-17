import styled from "styled-components";
import Copy from "../icons/copy";
import Link from "../icons/link";
import { useStore } from "@src/store";
import { Colors } from "@src/design/colors";
import { useState } from "react";

const Contact: React.FC = () => {

  const theme = useStore((state) => state.theme)
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Wrapper $theme={theme}>
      <TitleRow $theme={theme} onClick={() => setIsVisible((v) => !v)}>
        <Title>Contact</Title>
        <ToggleStatus
          type="button"
          $theme={theme}
          $open={isVisible}
          aria-label={isVisible ? "Hide contacts" : "Show contacts"}
          title={isVisible ? "Hide contacts" : "Show contacts"}
        />
      </TitleRow>

      {isVisible && (
        <Contacts>
          <div>
            Gmail : vlasenkorm@gmail.com{" "}
            <Copy text={"vlasenkorm@gmail.com"} color={theme ? Colors.Black : Colors.White} />
          </div>
          <div>
            Linkedin : vlasenkorm{" "}
            <Link link={"https://www.linkedin.com/in/vlasenkorm/"} color={theme ? Colors.Black : Colors.White} />
          </div>
        </Contacts>
      )}
    </Wrapper>
  ); 
};

export default Contact;

const Wrapper = styled.div<{ $theme: boolean }>`
  font-family: Roboto;
  background: ${(props) => (props.$theme ? Colors.BWhite : Colors.BBlack)};
  color: ${(props) => (props.$theme ? Colors.Black : Colors.White)};
  border: solid 1px ${(props) => (props.$theme ? Colors.BBlack : Colors.BWhite)};
`;

const Title = styled.div`
  font-size: 2rem;
  margin: 10px;
`;

const TitleRow = styled.div<{ $theme: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.14s ease;
  background-color: ${(props) => (props.$theme ? Colors.BlackUI: Colors.WhiteUI)};

  &:hover {
    background-color: ${(props) => (props.$theme ? "#e1e1e1" : "#4a4a4a")};
  }
`;

const ToggleStatus = styled.button<{ $theme: boolean; $open: boolean }>`
  position: relative;
  margin: 10px;
  width: 42px;
  height: 42px;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.14s ease, box-shadow 0.14s ease, background-color 0.14s ease;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 14px;
    height: 3px;
    border-radius: 2px;
    background: ${(props) => (props.$theme ? Colors.Black : Colors.White)};
    transform-origin: center;
    transition: transform 0.18s ease, background-color 0.14s ease;
  }

  &::before {
    left: 10px;
    transform: translateY(-50%) rotate(${(props) => (props.$open ? "-45deg" : "45deg")});
  }

  &::after {
    right: 10px;
    transform: translateY(-50%) rotate(${(props) => (props.$open ? "45deg" : "-45deg")});
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding: 10px; 
  font-size: 1.2rem;
`;
