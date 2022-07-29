let hello = "Hello";
console.log(hello);
let thisIsANumber = 5;
console.log(thisIsANumber);
thisIsANumber--;
console.log(thisIsANumber);
let c = 10;
console.log(thisIsANumber + c);
thisIsANumber += 1;
console.log(c / thisIsANumber);
console.log(c / 2.5);
console.log(~c);
console.log((10 + 5) / 3 + (7 - 2) / 5);

{
  let c = 5;
  console.log(c);
}

console.log(c);
c = 12;
if (c == 10) {
  console.log("Muoi");
} else if (c == 11) {
  console.log("Muoi mot");
} else {
  console.log("Khong phai Muoi");
}
switch (c) {
  case 10:
    console.log("Muoi");
    break;
  case 11:
    console.log("Muoi mot");
    break;
  default:
    console.log("Khong phai muoi va muoi mot");
    break;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

while (c > 0) {
  c--;
  console.log(c);
}
