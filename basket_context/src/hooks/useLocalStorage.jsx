import { useEffect, useState } from "react";

function UseLocalStorage(value, initial) {
  const [data, setData] = useState(
    localStorage.getItem(value)
      ? JSON.parse(localStorage.getItem(value))
      : initial
  );
  useEffect(() => {
    localStorage.setItem(value, JSON.stringify(data));
  }, [data]);

  return [data, setData];
}

export default UseLocalStorage;
