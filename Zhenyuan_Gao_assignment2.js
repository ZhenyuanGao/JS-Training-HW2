const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

/*
//Given the array, implement a function for generating a new array which doubles the
quantity and price in each object.
● Given the array, implement a function for generating a new array which contains item
quantity > 2 and price > 300 only.
● Given the array, implement a function to calculate the total value of the items.

*/
function doublev2(itemsObject) {
  itemsObject.forEach((element) => {
    element.price = 2 * element.price;
    element.quantity = 2 * element.quantity;
  });

  return itemsObject;
}
//console.log(itemsObject);

console.log(doublev2(itemsObject));

//aboce is the answer for the first question.
/** 
//use for loop
function double(itemsObject) {
  for (let i of itemsObject) {
    i.price = 2 * i.price;
    i.quantity = 2 * i.quantity;
  }

  console.log(itemsObject);
}

double(itemsObject);
**/

//filter with no function.

const newArray = itemsObject.filter(
  (element) => element.quantity > 2 && element.price > 300
);

console.log(newArray);

//answer for the second question.

//
/** 
function mytotal2(itemsObject) {
  return itemsObject.reduce(function (acc, element) {
    acc += element.price * element.quantity;
    return acc;
  }, 0);
}

**/

function mytotal2(itemsObject) {
  return itemsObject.reduce(
    (acc, element) => (acc += element.price * element.quantity),
    0
  );
}

console.log("the sum is " + mytotal2(itemsObject));
/**
 *
 *
function mytotal(itemsObject) {
  let sum = 0;
  for (let i of itemsObject) {
    sum = sum + i.quantity * i.price;
  }

  return sum;
}

console.log("the sum is " + mytotal(itemsObject));


 *
 */

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return                              The Sum Of All The Elements In An Array ";

const newString = string
  .toLowerCase()
  .replace(/-/g, " ")
  .split(" ")
  .filter((element) => element != "")
  .toString()
  .replace(/,/g, " ");

console.log(newString);
