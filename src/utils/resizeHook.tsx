import { useCallback, useEffect, useState } from "react";
import { hasTouchScreen } from "./hasTouchScreen";
import { useStore } from "@src/store";

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

  const _hasTouchScreen = useCallback(hasTouchScreen, [navigator])();
  //local
  const [screenSize, setScreenSize] = useState({
    hasTouchScreen: _hasTouchScreen,
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: _hasTouchScreen,
    isDesktop: !_hasTouchScreen,
    SM: window.innerWidth <= MobileBreak, // <500
    LM: window.innerWidth > MobileBreak && window.innerWidth <= MobileSize, // 500<>1024
    SD: window.innerWidth > MobileSize && window.innerWidth <= DesktopBreak, // 1024<>1450
    LD: window.innerWidth > DesktopBreak, // >1450
  });

  //Store
  const changeScreenSize = useStore((state) => state.changeScreenSize);

  changeScreenSize({
    width: screenSize.width,
    height:screenSize.height,
    isMobile: screenSize.isMobile,
    isDesktop: screenSize.isDesktop,
    SM: screenSize.SM,
    LM: screenSize.LM,
    SD: screenSize.SD,
    LD: screenSize.LD,
  });

  useEffect(() => {
    const handleResize = () => {
      console.log("handleResize");
      setScreenSize({
        ...screenSize,
        width: window.innerWidth,
        height: window.innerHeight,
        SM: window.innerWidth <= MobileBreak, // <500
        LM: window.innerWidth > MobileBreak && window.innerWidth <= MobileSize, // 500<>1024
        SD: window.innerWidth > MobileSize && window.innerWidth <= DesktopBreak, // 1024<>1450
        LD: window.innerWidth > DesktopBreak, // >1450
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    console.log('useScreenSize = ()', screenSize)
  return screenSize;
};

export default useScreenSize;
