declare global {
    interface Navigator {
      msMaxTouchPoints: number;
    }
  }

export function hasTouchScreen() {
    let hasTouchScreen = false;
  console.log('function hasTouchScreen()')
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
        console.log('UA', UA)
        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
      }
    }
  
    return hasTouchScreen;
  }