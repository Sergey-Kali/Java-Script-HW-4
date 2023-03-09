function addition(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return console.error(
      `"${firstNumber}" or "${secondNumber}" - is not a number`
    );
  } else {
    console.log("Сума чисел:", firstNumber + secondNumber);
  }
}

addition(55, 600);

function subtraction(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return console.error(
      `"${firstNumber}" or "${secondNumber}" - is not a number`
    );
  } else {
    console.log("Різниця чисел:", firstNumber - secondNumber);
  }
}

subtraction(15, 3);

function multiplication(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return console.error(
      `"${firstNumber}" or "${secondNumber}" - is not a number`
    );
  } else {
    console.log("Множення чисел:", firstNumber * secondNumber);
  }
}

multiplication(5, 8);

function division(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return console.error(
      `"${firstNumber}" or "${secondNumber}" - is not a number`
    );
  } else {
    console.log("Ділення чисел:", firstNumber / secondNumber);
  }
}

division(21, 7);

const array = [51, NaN, 337, undefined, 876, 38, "Яблуко", 495, null, 154];

function maximumNumber(newArr) {
  let max = newArr[0];
  for (i = 0; newArr.length > i; i++) {
    if (typeof newArr[i] === "number") {
      if (max < newArr[i]) {
        max = newArr[i];
      }
    }
  }
  console.log("Максимальне значення масиву:", max);
}

maximumNumber(array);

function minimumNumber(newArr) {
  let min = newArr[0];
  for (let element of newArr) {
    if (typeof element === "number") {
      if (min > element) {
        min = element;
      }
    }
  }
  console.log("Мінімальне значення масиву:", min);
}

minimumNumber(array);
