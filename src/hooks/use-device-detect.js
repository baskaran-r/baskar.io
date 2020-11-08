import { useEffect, useState } from 'react';

// Should match $layout-breakpoint-sm
const MOBILE_WIDTH_THRESHOLD = 685;

const calcIsMobile = () => (
  typeof window !== 'undefined' && window.innerWidth <= MOBILE_WIDTH_THRESHOLD
);

export default function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(calcIsMobile());

  useEffect(() => {
    const listener = () => {
      setIsMobile(calcIsMobile());
    };
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return { isMobile };
}
