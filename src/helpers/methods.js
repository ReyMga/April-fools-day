import { useEffect, useRef } from "react";

export const useInterval = (callback, delay) => {
  const intervalId = useRef(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => savedCallback.current();
    if (delay !== null) {
      intervalId.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalId.current);
    }
  }, [delay]);

  return intervalId.current;
};

export const createRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const readLocalStorage = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

export const writeLocalStorage = (item, object) => {
  localStorage.setItem(item, JSON.stringify(object));
};

export const colorPreset = (seconds) => {
  let result;
  switch (true) {
    case (seconds > 51):
      result = "purple";
    break;
    case (seconds >= 42 && seconds <= 51  ):
      result = "blue";
    break;
    case (seconds >= 32 && seconds <= 41  ):
      result = "green";
    break;
    case (seconds >= 22 && seconds <= 31  ):
      result = "yellow";
    break;
    case (seconds >= 12 && seconds <= 21  ):
      result = "orange";
    break;
    case (seconds >= 0 && seconds <= 11  ):
      result = "red";
    break;
    default:
      result = "grey";
    break;
  }
  return result;
};
