import React, { Component } from "react";
import ReactDOM from "react-dom/client";

document.getElementById("root")


const element = React.createElement(
  "h1",
  {
    id: "first",
    className: "Ankit",
    style: {
      backgroundColor: "blue",
      fontSize: "30px",
      color: "red",
    },
  },
  "Hello Coder Army"
);

const element2 = React.createElement(
  "h1",
  {
    id: "first",
    className: "Ankit",
    style: {
      backgroundColor: "red",
      fontSize: "30px",
      color: "blue",
    },
  },
  "maja aa gaya "
);

const Reactroot = ReactDOM.createRoot(
  document.getElementById("root")
);

Reactroot.render(element);
Reactroot.render(element2);

const div1 = React.createElement(
  "div",
  {},
  [element, element2]
);

Reactroot.render(div1);

// JSX :javascript XML: HTML code direct js ke ander likh sakte hai.

const newElement = <h1>HEllo COder Army</h1>;

Reactroot.render(newElement);

// const newElement = <h1>HEllo COder Army</h1> :-aisa react or nhi js samjhta hai to isko samjhne ke liye babel use hota hai.

//    babel:                     react                             render
// JSX => React.CreateElement() => react element (JSobject) => HTML Element.

// jsx ko react.createelemnt me babel krta hai .
// reactcreateelement  ko react element me badlne ka kaam react krna hai.
// react element ko html element me baadlne ka kaam render krta hai.

// JSX: js ke expression
const names = "Ankit";
const obj = {
    age:21,
    salary:232738
}

const rootElement = document.getElementById("root"); // reuse same root


// React Element:-
const newElement1 = (
  <>
       <h1 id="first" className="second">Hello kaise ho bhai {names}</h1>
       <h2 style={{backgroundColor:"Black",color:"red"}}>jai jai shree ram</h2>
        {/* doube curlly bracket isliye hai ki jsx object jaisa mangta hai  */}
       <h1>jai ho {obj.age}</h1>
  </>
);

Reactroot.render(newElement1);


// React component:
// 1.Class Based Component
// 2.Function Based component 

function greet (){
  return <h1> Aur bhai kaise ho</h1>
}
const newElement2 = greet();

const Reactroot1 = ReactDOM.createRoot(document.getElementById('root'));
Reactroot.render(newElement2);

const meet  = ()=>{
  return <h2>mera sab acha hai</h2>

}
const newElement3 = meet();

Reactroot.render(newElement3);

// if both function call at same time
Reactroot.render(<>{greet()}{meet()}</>)
// render previous wala render ko hata ke latest wala print krta hai isliye 
// sabko print karane ka tarika hai
Reactroot.render(
  <>
    {element}
    {element2}
    {newElement1}
    {greet()}
    {meet()}
  </>
);





