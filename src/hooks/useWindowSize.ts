import { useLayoutEffect, useState } from "react";

import debounce from "../utils/debounce";

const useWindowSize = () => {
  const [size, setSize] = useState<[number, number]>([0, 0]);

  useLayoutEffect(() => {
    const updateSize = debounce(
      () => setSize([window.innerWidth, window.innerHeight]),
      150,
      false
    );

    window.addEventListener("resize", updateSize);

    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

export default useWindowSize;
