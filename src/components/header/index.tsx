import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ToggleSlider from "../switch/themeSwitch";
import { useGStore } from "@src/store";
import useScreenSize from "@src/utils/resize";

export const HeaderHeight = 100;

const Header: React.FC = () => {

  const {t, i18n } = useTranslation();
  const screenSize = useScreenSize();
  console.log(screenSize)

  return (
    <Wrapper $theme={useGStore((state) => state.theme)}>
      <h3>{t('name')}<br />{t('title')}</h3>
      <ToggleSlider/>
    </Wrapper>
  );
};

export default Header;


const Wrapper = styled.div<{$theme: boolean}>`
  height: ${HeaderHeight}px;
  display: flex;
  border-bottom: solid ${props => props.$theme ? '#2a2a2a' :'#f8f8f8'} 2px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  background: ${props => props.$theme ? '#f8f8f8' : '#2a2a2a' };
  color: ${props => props.$theme ? 'black' : '#f8f8f8' };
  box-shadow: 0px 0px 25px ${props => props.$theme ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)' }  inset;
`
