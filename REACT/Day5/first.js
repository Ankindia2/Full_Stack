// import React from "react";
// import ReactDOM from "react-dom/client"

// const element1 = <h1>Hello Coder Army</h1>

// // JSX: JS Expression
// // JSX: Statement (unko aap nhi likh sakte)

// // Result produce hona chahiye: string , number, array
// function Greet(props) {
//     console.log(props);
//     return <h2>Ram Ram Bhaiya ji {props.name} {props.age} </h2>
// }

// // const Root = ReactDOM.createRoot(document.getElementById('root'));
// Root.render(Greet("Ankit"));

// // JSX rule hai ki function ka first letter capital me hona chahiye.

// const element2 = <Greet name="Ankit Samrat" age="21"/>

// const element3 = <h1 id="first" className="second"></h1>

// c

// const Root = ReactDOM.createRoot(document.getElementById('root'))
// Root.render(eement2);

// // const Root = ReactDOM.createRoot(document.getElementById)


import React from "react";
import ReactDOM from "react-dom/client";

// Component
function Greet(props) {
  console.log(props);

  return (
    <h2>
      Ram Ram Bhaiya ji {props.name} {props.age}
    </h2>
  );
}

// JSX component call
const element2 = <Greet name="Ankit Samrat" age="21" />;

// Create root FIRST
const Root = ReactDOM.createRoot(document.getElementById("root"));

// Render
Root.render(element2);
