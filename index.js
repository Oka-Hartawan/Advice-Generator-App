const page = document.getElementById("page");
const adviceData = document.getElementById("advice");
const button = document.getElementById("button");
const loader = document.getElementById("loader");
const dice = document.getElementById("dice");

function fetchData() {
  fetch("https://api.adviceslip.com/advice", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      setTimeout(() => {
        page.innerHTML = data.slip.id;
        adviceData.innerHTML = data.slip.advice;
        dice.classList.remove("hidden");
        loader.classList.add("hidden");
        button.disabled = false;
      }),
        3000;
    })
    .catch((error) => {
      console.error(error);
    });
}

button.addEventListener("click", () => {
  button.disabled = true;
  setTimeout(() => {
    adviceData.innerHTML = "Plase wait a moment...";
    page.innerHTML = "...";
    dice.classList.add("hidden");
    loader.classList.remove("hidden");
  }),
    3000;
  fetchData();
});
