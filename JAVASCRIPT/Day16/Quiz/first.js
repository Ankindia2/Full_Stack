const form = document.querySelector('form');

const answerc = {
  q1: "Sachin Tendulkar",
  q2: "Muttiah Muralitharan",
  q3: "Rohit Sharma",
  q4: "Rohit Sharma",
  q5: "Virat Kohli",
  q6: "MS Dhoni"
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  let finalScore = 0;

  for (let [name, value] of data.entries()) {
    if (answerc[name] === value) {
      finalScore++;
    }
  }

  document.getElementById("out").textContent =
    `Your Score Is ${finalScore} Out Of 6`;
});
