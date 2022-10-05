import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>Counter {counter}</div>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h1>Valuable Information i shouldn't see</h1> : ""}
    </div>
  );
}

export default App;
