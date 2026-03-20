// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent ="Strike is coming";
    
// }



//  const element = document.getElementById("first");
    // element.onclick = function handleClick(){
    //     element.textContent = "Jaddu is coming";
    // }


const element = document.getElementById("first");
element.addEventListener('click',()=>{
  element.textContent = "strike is hold";
})

element.addEventListener('click',()=>{
  element.style.backgroundColor="white";
})

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//   child1.textContent = "this is red"
// })

// const child2 = document.getElementById("child2");
// child2.addEventListener('click',()=>{
//   child2.textContent = "this is green"
 
// })
// loop:-
// const parent = document.getElementById("parent");
// console.log(parent.children);

// for(let child of parent.children){
//   console.log(child);
//   child.addEventListener('click',()=>{
//     child.textContent = "i am clicked";
//   })
// }

// bubbling(optimise of loop):-
 const grandparent = document.getElementById("grandparent");
 grandparent.addEventListener('click',()=>{
   grandparent.textContent = "grandparent is clicked";
  console.log("grandparent is clicked");
 },false)

  const parent = document.getElementById("parent");
 parent.addEventListener('click',()=>{
  parent.textContent = "parent is clicked";
  console.log("parent is clicked");
 },false)

  const child = document.getElementById("child");
 child.addEventListener('click',(e)=>{
  console.log(e);
   child.textContent = "child is clicked";
  console.log("child is clicked");
 },false)
// by default false aata hai.
//  capture phase on hai:- top se down aaoge : us time pe event ko tigger kar diya jaayega
// capture phase off hai:- event hai usko down to up (bubbling phase bolte hai,tab tigger kiya jaaye ga)
// (e.target) se sab bata dega,kis element se trigger kiya gaya thaa.
