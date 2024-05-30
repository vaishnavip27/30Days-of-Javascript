//getting buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".button");

//Initializing the count variable
let count = 0;

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increment")) {
      count++;
    } else if (styles.contains("decrement")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "#6BBA62";
    }
    if (count < 0) {
      counter.style.color = "#CD0404";
    }

    if (count === 0) {
      counter.style.color = "#F7F7F7";
    }
    counter.textContent = count;
  });
});
