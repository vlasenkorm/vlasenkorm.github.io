import { useEffect, useLayoutEffect, useState } from "react";
import { hasTouchScreen } from "./hasTouchScreen";

const MobileBreak = 500;
const MobileSize = 1024;
const DesktopBreak = 1450;


interface ScreenSizeType {
  hasTouchScreen: boolean;
  width: number;
  height: number;
  isMobile: boolean;
  isDesktop: boolean;
  SM: boolean;
  LM: boolean;
  SD: boolean;
  LD: boolean;
}

const useScreenSize = (): ScreenSizeType => {
  
  const _hasTouchScreen = hasTouchScreen()

  const [screenSize, setScreenSize] = useState({
    hasTouchScreen: _hasTouchScreen,
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: _hasTouchScreen,
    isDesktop: !_hasTouchScreen,
    SM: false,
    LM: false,
    SD: false,
    LD: false,
  });

  useEffect(() => {
    const handleResize = () => {

      setScreenSize({
        //-Base
        hasTouchScreen: _hasTouchScreen,
        width: window.innerWidth,
        height: window.innerHeight,
        //--Main
        isMobile: _hasTouchScreen,
        isDesktop: !_hasTouchScreen,
        //---Extend
        SM: window.innerWidth <= MobileBreak,// <500
        LM: window.innerWidth > MobileBreak && window.innerWidth <= MobileSize,// 500<>1024
        SD: window.innerWidth > MobileSize && window.innerWidth <= DesktopBreak,// 1024<>1450
        LD: window.innerWidth > DesktopBreak,// >1450
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
