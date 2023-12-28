function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide a number";
  }
  const cube = number * number * number;
  return cube;
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide valid strings";
  }
  const index = string1.indexOf(string2);
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
}

function sortMaker(arr) {
  if (
    arr.length === 2 &&
    typeof arr[0] === "number" &&
    typeof arr[1] === "number" &&
    arr[0] >= 0 &&
    arr[1] >= 0
  ) {
    if (arr[0] === arr[1]) {
      return "equal";
    } else if (arr[0] < arr[1]) {
      var temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
      return arr;
    } else {
      return arr;
    }
  } else {
    return "Invalid Input";
  }
}

function findAddress(obj) {
  let key = ["street", "house", "society"];
  let keyValues = [];

  for (let items of key) {
    let value = obj[items] || "__";
    keyValues.push(value);
  }

  let address = keyValues + "";

  return address;
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "please provide an array";
  }

  let totalCash = 0;
  for (let i = 0; i < changeArray.length; i++) {
    totalCash += changeArray[i];
  }

  if (totalCash >= totalDue) {
    return true;
  } else {
    return false;
  }
}

let greeting;
greetign = {};
console.log(greetign);

function sum(a, b) {
  return a + b;
}

console.log(sum(1, "2"));
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
