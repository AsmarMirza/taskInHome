import { useEffect, useState } from "react";

function useLocalStorage(property, initialValue) {
  const [value, setValue] = useState(
    localStorage.getItem(property)
      ? JSON.parse(localStorage.getItem(property))
      : initialValue
  );

  useEffect(() => {
    localStorage.setItem(property, JSON.stringify(value));
  }, [property, value]);
  return [value, setValue];
}

export default useLocalStorage;
