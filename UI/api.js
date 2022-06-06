const left = document.querySelector(".left");
const right = document.querySelector("right");

fetch("https://dummyjson.com/quotes/14")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    left.innerText = `"${data.quote}"`;
  });
