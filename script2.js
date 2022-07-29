let numArr = [2, 4, 6, 8];
console.table(numArr);
console.log(numArr[0]);
numArr.push(10);
console.table(numArr);
let lastElem = numArr.pop();
console.log(lastElem);
let firstElem = numArr.shift();
console.log(firstElem);
numArr.unshift(2);
console.table(numArr);
for (a of numArr) {
  console.log(a);
}

//mutable vs immutable

let s = "Duc";
for (char of s) console.log(char);

s[0] = "C"; // illegal
console.log(s); // Still Duc

const aFunction = (a, b) => {
  console.log(a + b);
};

aFunction(2, 3);

let Dog = {
  legs: 4,
  barkSound: "Woof",
  bark() {
    console.log(this.barkSound);
  },
};

document.title = "Hello Ban Dev";
document.getElementById("header").innerText = "Hello Header";
let pElem = document.getElementsByTagName("p");
for (elem of pElem) elem.style.color = "antiquewhite";
let cards = document.querySelectorAll("section.card");
for (card of cards) card.style.border = "1px solid white";

// create a new button
let footer = document.querySelector("footer");
let button = document.createElement("button");

let count = 0;
button.innerText = `You have click me ${count} time(s)`;
button.addEventListener("click", () => {
  count++;
  button.innerText = `You have click me ${count} time(s)`;
});

console.log(button);
button.onmouseover = () => {
  button.style.backgroundColor = "teal";
};
button.onmouseleave = () => {
  button.style.backgroundColor = "white";
};
footer.appendChild(button);
