import { useEffect, useState } from "react";


const MobileSize = 430;
const TabletSize = 1024;


interface ScreenSizeType { 
  width: number; 
  height: number;
  isMobile: boolean,
  isDesctop: boolean,
  isTablet: boolean,
}

const useScreenSize = ():ScreenSizeType => {

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: false,
    isTablet: false,
    isDesctop: false
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth > 0 && window.innerWidth <= MobileSize,
        isTablet:  window.innerWidth > MobileSize && window.innerWidth <= TabletSize ,
        isDesctop: window.innerWidth > TabletSize
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

