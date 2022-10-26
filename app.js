const button = document.getElementById("btn");
const jokeId = document.getElementById("jokeId");
const advice = document.getElementById("advice");

button.addEventListener("click", getAdvice);

const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(url);
  const resData = await response.json();

  console.log(resData.slip);
  advice.innerHTML = resData.slip.advice;
  jokeId.innerHTML = `ADVICE # ${resData.slip.id}`;
}
