import { useEffect, useState } from "react";

export const UseDebounce = (value, delay = 600) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(id);
  }, [delay, value]);

  return debouncedValue;
};
