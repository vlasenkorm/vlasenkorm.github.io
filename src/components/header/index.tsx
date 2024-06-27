import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ToggleSlider from "../switch/themeSwitch";
import { useGStore } from "@src/store";
import useScreenSize from "@src/utils/resize";
import Logo from "../icons/logo";

export const HeaderHeight = 100;



const Header: React.FC = () => {

  const { t, i18n } = useTranslation();
  const screenSize = useScreenSize();
 
  console.log(screenSize)

  const fill = useGStore((state) => state.theme) ? "#2a2a2a" : "#f8f8f8"
  const hide = useGStore((state) => state.theme) ? "#f8f8f8" : "#2a2a2a"

  return (
    <Wrapper $theme={useGStore((state) => state.theme)}>
      <div>
        <Logo
          text="gg"
          fill={fill}
          hide={hide}
        />
      </div>
      <h3>{t('name')}<br />{t('title')}</h3>
      <ToggleSlider />
    </Wrapper>
  );
};

export default Header;


const Wrapper = styled.div<{ $theme: boolean }>`
  height: ${HeaderHeight}px;
  display: flex;
  border-bottom: solid ${props => props.$theme ? '#2a2a2a' : '#f8f8f8'} 2px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  background: ${props => props.$theme ? '#f8f8f8' : '#2a2a2a'};
  color: ${props => props.$theme ? 'black' : '#f8f8f8'};
  svg {
    height: 100px;
    width: 100px;
    cursor: pointer;
  }
`
