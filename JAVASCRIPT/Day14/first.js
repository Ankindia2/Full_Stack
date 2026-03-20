 const newElement = document.createElement("h2");
 newElement.textContent = "strike is coming";
 newElement.id = "second";
//  console.log(newElement);

// select element
const element = document.getElementById("first");
element.after(newElement);

const newElement2 = document.createElement('h3');
newElement2.textContent ="diwali is coming";
newElement2.id ="third";
newElement2.className = "diwali";
newElement2.className += " Holi";

newElement2.classList.add("diwali");
newElement2.classList.add("holi");
newElement2.classList.remove("holi");

newElement2.style.backgroundColor ="red";
newElement2.style.fontSize ="20px"
element.before(newElement2);
console.log(newElement2);

console.log(newElement2.getAttribute("class"));

const list = document.createElement("li");
list.textContent ="MILK"

const list2 = document.createElement("li");
list2.textContent ="CAKE"

const list3 = document.createElement("li");
list3.textContent ="HAlWA"

const list4 = document.createElement("li");
list4.textContent ="PANEER"

const unorderElement = document.getElementById("listing");
unorderElement.append(list);
unorderElement.append(list2);
unorderElement.prepend(list3);

list.after(list4);

const arr = ["BAT","BALL","STUMP","PITCH","GROUND"];
const unorderElement1 = document.getElementById("listing");
const fragment = document.createDocumentFragment();
for(let cricket of arr){
    const list = document.createElement("li");
    list.textContent = cricket;
    fragment.append(list)
    
}
 unorderElement1.append(fragment);


//  for deletion
const s1 = document.getElementsByID("first");
s1.remove();
