/*
let newString = "";
let num = 1999;
while (num > 0) {
  if (num - 1000 >= 0) {
    newString = newString + "M";
    num = num - 1000;
  } else if (num - 900 >= 0) {
    newString = newString + "CM";
    num = num - 900;
  } else if (num - 500 >= 0) {
    newString = newString + "D";
    num = num - 500;
  } else if (num - 400 >= 0) {
    newString = newString + "CD";
    num = num - 400;
  } else if (num - 100 >= 0) {
    newString = newString + "C";
    num = num - 100;
  } else if (num - 90 >= 0) {
    newString = newString + "XC";
    num = num - 90;
  } else if (num - 50 >= 0) {
    newString = newString + "L";
    num = num - 50;
  } else if (num - 40 >= 0) {
    newString = newString + "XL";
    num = num - 40;
  } else if (num - 10 >= 0) {
    newString = newString + "X";
    num = num - 10;
  } else if (num - 9 >= 0) {
    newString = newString + "IX";
    num = num - 9;
  } else if (num - 5 >= 0) {
    newString = newString + "V";
    num = num - 5;
  } else if (num - 4 >= 0) {
    newString = newString + "IV";
    num = num - 4;
  } else if (num - 1 >= 0) {
    newString = newString + "IV";
    num = num - 1;
  }

  // console.log(num);
}

*/
num = 1999;
let numeral = [
  "I",
  "IV",
  "V",
  "IX",
  "X",
  "XL",
  "L",
  "XC",
  "C",
  "CD",
  "D",
  "CM",
  "M",
];
let numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
let newString = "";

for (let i = numeral.length - 1; num != 0; i--) {
  if (num >= numbers[i]) {
    num = num - numbers[i];
    newString = newString + numeral[i];
  }
}
console.log(newString);

arr = [10, 10, 2, 2, 1, 0, 0];

const mySet = new Set();
let dupSum = 0;
for (let x of arr) {
  mySet.add(x);

  dupSum += x;
  //console.log(x);
}
console.log(dupSum);
let noDupSUm = 0;
for (let x of mySet) {
  noDupSUm += x;
}
console.log(noDupSUm);

let string1 = "fagsgsfgdsgg sgsr";

console.log(string1.slice(1));
console.log(parseInt("0+"));

str = "+";

while (str != "") {
  if (str === "") {
    console.log(false + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if ((str[i] === "+" || str[i] === "-") && i === 0) {
      str = str.slice(1);
      console.log(str);
    } else {
      console.log(false + 2);
    }
  }
  if ((parseInt(str) != NaN || parseFloat(str) != NaN) && str != "") {
    console.log(true);
  } else {
    console.log(false + 3);
  }
  console.log(false + 4);
}

list = [1, 0, 0, 2, 3];
let zerocounter = 0;
let counter = 0;
while (counter < list.length) {
  if (list[counter] === 0) {
    list.splice(counter, 1);
    zerocounter = zerocounter + 1;
  } else {
    counter = counter + 1;
  }
}

for (let i = 0; i < zerocounter; i++) {
  list.push(0);
}

console.log(list);

function shuffle(arr) {
  // modify the arr inline to change the order randomly

  for (let i = 0; i < arr.length - 1; i++) {
    let j = Math.floor(Math.random() * (arr.length - 1) + i);
    console.log(j);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

console.log(shuffle([1, 2, 3, 4]));
