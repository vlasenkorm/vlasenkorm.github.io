import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ToggleSlider from "../switch/themeSwitch";
import { useGStore } from "@src/store";
import useScreenSize from "@src/utils/resize";

export const HeaderHeight = 100;

const Header: React.FC = () => {

  const { t, i18n } = useTranslation();
  const screenSize = useScreenSize();
  console.log(screenSize)
  const fill = useGStore((state) => state.theme) ? "#2a2a2a" : "#f8f8f8" 
  const hide = useGStore((state) => state.theme) ?  "#f8f8f8" : "#2a2a2a"

  return (
    <Wrapper $theme={useGStore((state) => state.theme)}>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="-147.07 -13.02 1080 1080">
  <rect width="100%" height="100%" fill="transparent"/>
  <circle r="35" fill={fill} transform="matrix(4.23 0 0 4.23 213.65 351.37)" vector-effect="non-scaling-stroke"/>
  <path fill={hide} d="M280.885 348.3c0 41.316-30.892 74.813-69.006 74.813H-178.16c-38.114 0-69.006-33.497-69.006-74.813s30.892-74.813 69.006-74.813h390.032c38.12 0 69.012 33.497 69.012 74.813z" vector-effect="non-scaling-stroke"/>
  <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={fill} rx="0" ry="0" transform="matrix(3.19 0 0 .94 101.34 239.02)" vector-effect="non-scaling-stroke"/>
  <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(2.43 5.71 -.92 .39 180.73 630.25)" vector-effect="non-scaling-stroke"/>
  <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={fill} rx="0" ry="0" transform="matrix(2.43 5.71 -.92 .39 270.29 650.4)" vector-effect="non-scaling-stroke"/>
  <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(4.85 0 0 1 450.2 882.36)" vector-effect="non-scaling-stroke"/>
  <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(.78 1.83 -1.11 .47 11.85 255.11)" vector-effect="non-scaling-stroke"/>
  <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={fill} rx="0" ry="0" transform="matrix(3.14 7.38 -.92 .39 435.31 588.55)" vector-effect="non-scaling-stroke"/>
  <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={fill} rx="0" ry="0" transform="matrix(-3.67 9.49 -.93 -.36 593.8 518.32)" vector-effect="non-scaling-stroke"/>
  <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(.97 2.28 -1.05 .45 461.38 852.64)" vector-effect="non-scaling-stroke"/>
  <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(-1 2.5 -.93 -.37 548.93 838.12)" vector-effect="non-scaling-stroke"/>
  <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(12.77 0 0 1 409.71 166.15)" vector-effect="non-scaling-stroke"/>
</svg>
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
