const button = document.getElementById("btn");
const color = document.getElementById("color");

// function will take numbers from hex (6-number)
const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

button.addEventListener("click", () => {
  let hexColor = generateHex();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function generateHex() {
      let hexColor = "#";
      // by for method it will run 6 times and takes 6 digit  by hexColor it will add to each 6 digit number #
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
}

function getRandomNumber() {
      //our random number will show only numbers from [1-9] whole numbers
  return Math.floor(Math.random() * hex.length);
}
