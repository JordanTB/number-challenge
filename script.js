let val1;
let val2;
let val3;
let val4;
let res1;
let res2;
let res3;
let res4;
let form = document.querySelector("form");
let result = document.createElement("h2");

const generator = () => {
  let generated = Math.floor(Math.random() * (10000 - 1000) + 1000);
  let myFunc = (num) => Number(num);
  var generatedArray = Array.from(String(generated), myFunc);
  return generatedArray;
};

const randomNumber = generator();

const checkVal1 = () => {
  val1 = document.getElementById("val1").value;
  if (val1 == randomNumber[0]) {
    document.getElementById("val1").style.borderColor = "green";
    res1 = true;
  } else {
    document.getElementById("val1").style.borderColor = "red";
    res1 = false;
  }

  cracked();
};
const checkVal2 = () => {
  val2 = document.getElementById("val2").value;
  if (val2 == randomNumber[1]) {
    document.getElementById("val2").style.borderColor = "green";
    res2 = true;
  } else {
    document.getElementById("val2").style.borderColor = "red";
    res2 = false;
  }
  cracked();
};
const checkVal3 = () => {
  val3 = document.getElementById("val3").value;
  if (val3 == randomNumber[2]) {
    document.getElementById("val3").style.borderColor = "green";
    res3 = true;
  } else {
    document.getElementById("val3").style.borderColor = "red";
    res3 = false;
  }
  cracked();
};
const checkVal4 = () => {
  val4 = document.getElementById("val4").value;
  if (val4 == randomNumber[3]) {
    document.getElementById("val4").style.borderColor = "green";
    res4 = true;
  } else {
    document.getElementById("val4").style.borderColor = "red";
    res4 = false;
  }
  cracked();
};

const cracked = () => {
  if (res1 == true && res2 == true && res3 == true && res4 == true) {
    result.innerHTML = "💰💰💰";
    form.append(result);
  } else {
    result.innerHTML = "Keep Trying!";
    form.append(result);
  }
};
