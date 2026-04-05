import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./Header";
import Card from "./Card";
import stores from "./stored";

function App() {
  return (
    <Provider store={stores}>
      <Header />
      <Card />
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);