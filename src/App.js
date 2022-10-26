import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <p>{count}</p>
      <Counter></Counter>
    </div>
  );
}

export default App;
