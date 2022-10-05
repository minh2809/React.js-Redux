import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import allReducers from "./reducer/index";
import { Provider } from "react-redux";

//Store -> globalized state

//action increment
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
  }
};

let myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
);

//display it in the console
myStore.subscribe(() => console.log(myStore.getState()));

//dispatch
myStore.dispatch(increment());
myStore.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
