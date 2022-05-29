import { useState, useEffect } from "react";

const useMediaQuery = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return size;
};

export default useMediaQuery;
