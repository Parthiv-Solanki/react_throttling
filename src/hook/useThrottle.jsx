import { useEffect, useRef, useState } from "react";

export const useThrottle = (text, delay) => {
  const [throttleValue, setThrottleValue] = useState(text);
  const lastExecuted = useRef(Date.now());
  useEffect(() => {
    if (Date.now() >= lastExecuted.current + delay) {
      lastExecuted.current = Date.now();
      setThrottleValue(text);
    } else {
      const timerId = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottleValue(text);
      }, delay);

      return () => clearTimeout(timerId);
    }
  }, [text, delay]);

  return throttleValue;
};
