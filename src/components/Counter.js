import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counter";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dipatch = useDispatch();
  const handleIn = () => {
    dipatch(increment());
  };
  const handleDe = () => {};
  return (
    <div>
      <button onClick={handleIn}>increment</button>
      <button onClick={handleDe}>decrement</button>
    </div>
  );
};

export default Counter;
