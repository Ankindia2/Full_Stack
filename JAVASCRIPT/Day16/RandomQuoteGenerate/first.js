const quotes = [
  "Small steps today create big results tomorrow.",
  "Don’t wait for motivation, build discipline.",
  "Your future is created by what you do today.",
  "Progress is better than perfection.",
  "Hard work beats talent when talent doesn’t work.",
  "Dreams don’t work unless you do.",
  "Stay consistent, results will follow.",
  "Every day is a new chance to improve.",
  "Focus on growth, not excuses.",
  "Success starts with self-belief.",
  "One day or day one — you decide.",
  "Learn, apply, repeat.",
  "Don’t stop when you’re tired, stop when you’re done.",
  "Your effort today is your success tomorrow.",
  "Build skills, not just marks.",
  "Hustle in silence, let success make noise.",
  "Fail fast, learn faster.",
  "Consistency is a superpower.",
  "You are closer than you think.",
  "Turn pressure into power." 
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];

})
