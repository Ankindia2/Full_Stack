import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy"
// import {greet as goa ,meet as rao} from "./utils/dummy"(as goa file ka name change karne ke liye)

// props=argument,hooks=function


// App
function App() {

  let [A,setA] = useState(arr);

  function sortArray(){
    A.sort((a,b)=>a.price-b.price);
    setA([...A]);
    // mere ui me sort dikh nhi rha thaa isliye duplicate arr banaya(setA([...A]);)
    // for this new arr create [...A]
  }
  function sortAbove1500(){
    const B = arr.filter((value)=>value.price>1500);
    setA(B);
  }

  return (
    <>
      {/* Header */}
      <Header />
      <button onClick={sortArray}>Sort by Price</button>
      <button onClick={sortAbove1500}>Sort above 1500</button>

      {/* Body */}
      <div className="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {
        A.map((value, index) => (<Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/> ))
        }
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(<App />);

