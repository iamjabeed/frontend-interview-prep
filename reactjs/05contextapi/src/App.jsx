import { useContext } from "react";
import { CounterContext } from "./context/counter.jsx";
import Card from "./components/Card.jsx";

const App = () => {
  const counter = useContext(CounterContext);
  // console.log(counter);
  return (
    <div>
      <h1>{counter.count}</h1>
      <Card />
    </div>
  );
};
export default App;
