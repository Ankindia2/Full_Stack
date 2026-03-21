/* create element through JS */

const React = {
    createElement: function(tag, styles, children) {

        const element = document.createElement(tag);

        if (typeof children === "object") {
            for (let val of children) {
                element.append(val);
            }
        } else {
            element.innerText = children;
        }

        for (let key in styles) {
            element.style[key] = styles[key];
        }

        return element;
    }
};


const header1 = React.createElement(
    "h1",
    { fontSize: "30px", backgroundColor: "red", color: "black" },
    "Hello Coder Army"
);

const header2 = React.createElement(
    "h2",
    { fontSize: "30px", backgroundColor: "green", color: "black" },
    "Kaise hai app log"
);

const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JS");

const ul = React.createElement(
    "ul",
    { fontSize: "20px", backgroundColor: "blue", color: "black" },
    [li1, li2, li3]
);

document.body.append(header1, header2);


/* DOM example (commented)

const header1 = document.createElement("h1");
header1.innerText = "Hello Coder Army";
header1.style.backgroundColor = "brown";
header1.style.frontSize = "30px";
header1.style.color = "white";

const header2 = document.createElement("h2");
header2.innerText = "kaise ho aap sab log";
header2.style.backgroundColor = "green";
header2.style.frontSize = "20px";
header2.style.color = "white";

const root = document.getElementById("root");
root.append(header1);
root.append(header2);

*/


const ReactDOM = {
    render: function(element, root) {
        root.append(element);
    }
};

ReactDOM.render(header1, document.getElementById("root"));
ReactDOM.render(header2, document.getElementById("root"));
ReactDOM.render(ul, document.getElementById("root"));


