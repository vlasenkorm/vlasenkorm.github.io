
import styled from "styled-components";

const SVG = styled.svg`
  margin-top: 3px;
  right: 40px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-left: 10px;
`


const LogoComponent: React.FC<{ fill: string, hide: string }> = ({ fill, hide }) => {
  return <SVG xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="-147.07 -13.02 1080 1080">
    <rect width="100%" height="100%" fill="transparent" />
    <circle r="35" fill={fill} transform="matrix(4.23 0 0 4.23 213.65 351.37)" vectorEffect="non-scaling-stroke" />
    <path fill={hide} d="M280.885 348.3c0 41.316-30.892 74.813-69.006 74.813H-178.16c-38.114 0-69.006-33.497-69.006-74.813s30.892-74.813 69.006-74.813h390.032c38.12 0 69.012 33.497 69.012 74.813z" vectorEffect="non-scaling-stroke" />
    <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={fill} rx="0" ry="0" transform="matrix(3.19 0 0 .94 101.34 239.02)" vectorEffect="non-scaling-stroke" />
    <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(2.43 5.71 -.92 .39 180.73 630.25)" vectorEffect="non-scaling-stroke" />
    <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={fill} rx="0" ry="0" transform="matrix(2.43 5.71 -.92 .39 270.29 650.4)" vectorEffect="non-scaling-stroke" />
    <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(4.85 0 0 1 450.2 882.36)" vectorEffect="non-scaling-stroke" />
    <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(.78 1.83 -1.11 .47 11.85 255.11)" vectorEffect="non-scaling-stroke" />
    <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={fill} rx="0" ry="0" transform="matrix(3.14 7.38 -.92 .39 435.31 588.55)" vectorEffect="non-scaling-stroke" />
    <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={fill} rx="0" ry="0" transform="matrix(-3.67 9.49 -.93 -.36 593.8 518.32)" vectorEffect="non-scaling-stroke" />
    <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(.97 2.28 -1.05 .45 461.38 852.64)" vectorEffect="non-scaling-stroke" />
    <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(-1 2.5 -.93 -.37 548.93 838.12)" vectorEffect="non-scaling-stroke" />
    <rect width="74.33" height="74.33" x="-37.165" y="-37.165" fill={hide} rx="0" ry="0" transform="matrix(12.77 0 0 1 409.71 166.15)" vectorEffect="non-scaling-stroke" />
  </SVG>
};

export default LogoComponent;


