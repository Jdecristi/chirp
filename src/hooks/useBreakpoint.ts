import { useEffect, useState } from "react";

const breakpoints = {
  0: "base",
  640: "sm",
  768: "md",
  1024: "lg",
  1280: "xl",
  1536: "xxl",
} as const;

const useBreakpoint = () => {
  const [screenSize, setScreenSize] = useState<(typeof breakpoints)[keyof typeof breakpoints]>("base");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const [sm, setSm] = useState<boolean>(false);
  const [md, setMd] = useState<boolean>(false);
  const [lg, setLg] = useState<boolean>(false);
  const [xl, setXl] = useState<boolean>(false);
  const [xxl, setXxl] = useState<boolean>(false);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("resize", handleResize);
      handleResize();

      if (0 < windowSize.width) {
        setScreenSize(breakpoints[0]);
      }
      if (640 < windowSize.width) {
        setScreenSize(breakpoints[640]);
        setSm(true);
      }
      if (768 < windowSize.width) {
        setScreenSize(breakpoints[768]);
        setMd(true);
      }
      if (1024 < windowSize.width) {
        setScreenSize(breakpoints[1024]);
        setLg(true);
      }
      if (1280 < windowSize.width) {
        setScreenSize(breakpoints[1280]);
        setXl(true);
      }
      if (windowSize.width >= 1536) {
        setScreenSize(breakpoints[1536]);
        setXxl(true);
      }

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [windowSize.width]);

  return { sm, md, lg, xl, xxl, screenSize };
};

export { useBreakpoint };
