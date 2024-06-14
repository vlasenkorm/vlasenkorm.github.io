import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { HeaderHeight } from "../../header";

const LngSwitch: React.FC = () => {

  const { i18n } = useTranslation();
 
  return (
    <Wrapper>
      <StyleButton 
        $active={i18n.language === 'en' ? 1 : 0} 
        onClick={() =>  i18n.changeLanguage('en')}
      >EN</StyleButton>
      <Divider />
      <StyleButton 
        $active={i18n.language === 'ua' ? 1 : 0} 
        onClick={() =>  i18n.changeLanguage('ua')}
      >UA</StyleButton>
    </Wrapper>
  );
};

export default LngSwitch;


const Wrapper = styled.div`
  height: fit-content;
  position: sticky;
  top: calc(${HeaderHeight / 2}px + 20px);
  display: flex;
  flex-direction: column;
  background-color: #2a2a2a;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8);
  border: solid white 2px;
  border-radius: 2px;
`

const Divider = styled.div`
  height: 2px;
  background-color: white;
`

const StyleButton = styled.button<{$active: number}>`
  height: 40px;
  width: 80px;
  background-color: transparent;
  border: none;
  color: ${props => props.$active ? 'cornflowerblue' : 'white'};
  font-size: large;
  &:hover {
    box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.4) inset 
  }
`