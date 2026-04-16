import styled from "styled-components";
import Copy from "../icons/copy";
import Link from "../icons/link";
import { useStore } from "@src/store";
import { Colors } from "@src/design/colors";
import { useState } from "react";

const Contact: React.FC = () => {

  const theme = useStore((state) => state.theme)
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Wrapper $theme={theme}>
      <TitleRow>
        <Title>Contact</Title>
        <ToggleButton
          type="button"
          $theme={theme}
          aria-expanded={isVisible}
          onClick={() => setIsVisible((v) => !v)}
        >
          {isVisible ? "Hide" : "Show"}
        </ToggleButton>
      </TitleRow>

      {isVisible && (
        <Contacts>
          <div>
            Gmail : vlasenkorm@gmail.com{" "}
            <Copy text={"vlasenkorm@gmail.com"} color={theme ? Colors.Black : Colors.White} />
          </div>
          <div>
            Phone : +380509672999{" "}
            <Copy text={"+380509672999"} color={theme ? Colors.Black : Colors.White} />
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
  padding: 10px;
  background: ${(props) => (props.$theme ? Colors.BWhite : Colors.BBlack)};
  color: ${(props) => (props.$theme ? Colors.Black : Colors.White)};
  border: solid 1px ${(props) => (props.$theme ? Colors.BBlack : Colors.BWhite)};
`;

const Title = styled.div`
  font-size: 2rem;
  margin: 10px;
  border-bottom: solid;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToggleButton = styled.button<{ $theme: boolean }>`
  margin: 10px;
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => (props.$theme ? Colors.Black : Colors.White)};
  background: ${(props) => (props.$theme ? Colors.BWhite : Colors.BBlack)};
  border: solid 1px ${(props) => (props.$theme ? Colors.BBlack : Colors.BWhite)};
`;

const Contacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  padding: 10px; 
  font-size: 1.2rem;
`;
