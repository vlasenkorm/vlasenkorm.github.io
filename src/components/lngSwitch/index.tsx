import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LngSwitch: React.FC = () => {

  const { i18n } = useTranslation();

  return (
    <Wrapper>
      <StyleButton onClick={() => i18n.changeLanguage('en')}>EN</StyleButton>
      <StyleButton onClick={() => i18n.changeLanguage('ua')}>UA</StyleButton>
    </Wrapper>
  );
};

export default LngSwitch;


export const Wrapper = styled.div`
  width: fit-content;
  border: solid white 2px;
  padding: 2px;
  border-radius: 2px;
`
export const StyleButton = styled.button`
  height: 40px;
  width: 80px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: large;
  &:hover {
    color: palevioletred;
    box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.4) inset 
  }
`