
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Stores";
import Counting from "./Counting";
import reactslicer from "./Slicer1";
import CustomCounter from "./CustomCounter";

function App() {
  return (
    <Provider store={store}>
      <Counting ></Counting>
      <br></br>
      <br></br>
      <CustomCounter></CustomCounter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);