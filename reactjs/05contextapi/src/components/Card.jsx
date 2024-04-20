import { useContext } from "react";
import { CounterContext } from "../context/counter.jsx";
const Card = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  // console.log(count, increment, decrement);
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default Card;
