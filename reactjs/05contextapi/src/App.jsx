import { useContext } from "react";
import { CounterContext } from "./context/counter.jsx";
import Card from "./components/Card.jsx";
import FileHandling from "./components/FileHandling.jsx";

const App = () => {
  const counter = useContext(CounterContext);
  // console.log(counter);
  return (
    <div>
      <h1>{counter.count}</h1>
      <Card />
      <br />
      <FileHandling />
    </div>
  );
};
export default App;
