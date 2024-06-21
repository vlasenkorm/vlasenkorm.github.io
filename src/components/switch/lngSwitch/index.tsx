import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { HeaderHeight } from "../../header";
import { useGStore } from "@src/store";

const LngSwitch: React.FC = () => {

  const { i18n } = useTranslation();
  const localThema = useGStore((state) => state.theme)
 
  return (
    <Wrapper  $theme={localThema}>
      <StyleButton 
        $active={i18n.language === 'en' ? 1 : 0} 
        $theme={localThema}
        onClick={() =>  i18n.changeLanguage('en')}
      >EN</StyleButton>
      <Divider  $theme={localThema} />
      <StyleButton 
        $active={i18n.language === 'ua' ? 1 : 0} 
        $theme={localThema}
        onClick={() =>  i18n.changeLanguage('ua')}
      >UA</StyleButton>
    </Wrapper>
  );
};

export default LngSwitch;


const Wrapper = styled.div<{$theme: boolean}>`
  height: fit-content;
  position: sticky;
  top: calc(${HeaderHeight / 2}px + 20px);
  display: flex;
  flex-direction: column;
  background-color: transparent;
   box-shadow: 0px 0px 25px ${props => props.$theme ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)' };
  border: solid 1px ${props => props.$theme ? '#2a2a2a' :'#f8f8f8'};
  border-radius: 2px;
`

const Divider = styled.div<{$theme: boolean}>`
  height: 1px;
  background-color: ${props => props.$theme ? '#2a2a2a' :'#f8f8f8'};
`

const StyleButton = styled.button<{$active: number, $theme: boolean}>`
  height: 40px;
  width: 80px;
  border: none;
  background-color: transparent;
  color: ${props => props.$active ? 'cornflowerblue' : props.$theme ? '#2a2a2a' :'#f8f8f8'};
  font-size: large;
  &:hover {
    box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.4) inset 
  }
`