function isArrayLengthOdd(array) {
  if (array.length % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isArrayLengthOdd([1, 2, 3]));

function isArrayLengthOdd(array) {
  if (array.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayLengthOdd([1, 2, 3, 4]));

function addLailaToArray(instructors) {
  instructors.push("Laila");
  return instructors;
}

instructors = ["Mshary", "Hasan"];
console.log(addLailaToArray(["Mshary", "Hasan"]));

function eliminateTeam(teams) {
  teams.splice(0, 2);
  return teams;
}

teams = ["Brazil", "Germany", "Italy"];
console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

function secondHalfOfArrayIfItIsEven(fruits) {
  half = fruits.length / 2;
  if (fruits.length % 2 == 0) {
    return fruits.slice(half);
  } else {
    return [];
  }
}

fruits = ["apple", "orange", "banana", "kiwi", "tomato", "grape"];
console.log(
  secondHalfOfArrayIfItIsEven([
    "apple",
    "orange",
    "banana",
    "kiwi",
    "tomato",
    "grape",
  ])
);
