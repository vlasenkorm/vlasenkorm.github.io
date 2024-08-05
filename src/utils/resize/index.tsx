import { useEffect, useState } from "react";

const MobileSize = 430;
const TabletSize = 1024;
const DesktopSize = 1450;

declare global {
  interface Navigator {
    msMaxTouchPoints: number,
  }
}


interface ScreenSizeType {
  width: number;
  height: number;
  isMobile: boolean,
  isSMDesktop: boolean,
  isLRDesktop: boolean,
  isTablet: boolean,
}

function hasTouchScreen() {

  let hasTouchScreen = false;

  if (Object.hasOwn(navigator, "maxTouchPoints")) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  } else if (Object.hasOwn(navigator, "msMaxTouchPoints")) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
  } else {
    const mQ = matchMedia?.("(pointer:coarse)");
    if (mQ?.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches;
    } else if ("orientation" in window) {
      hasTouchScreen = true; // deprecated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      const UA = navigator.userAgent;
      hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    }
  }

  return hasTouchScreen
}


const useScreenSize = (): ScreenSizeType => {

  const [screenSize, setScreenSize] = useState({
    hasTouchScreen: false,
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: false,
    isTablet: false,
    isSMDesktop: false,
    isLRDesktop: false
  });

  useEffect(() => {
    const handleResize = () => {
      
      setScreenSize({
        hasTouchScreen: hasTouchScreen(),
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth > 0 && window.innerWidth <= MobileSize,
        isTablet: window.innerWidth > MobileSize && window.innerWidth <= TabletSize,
        isSMDesktop: window.innerWidth > TabletSize && window.innerWidth <= DesktopSize,
        isLRDesktop: window.innerWidth > DesktopSize
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return screenSize;
};

export default useScreenSize;

