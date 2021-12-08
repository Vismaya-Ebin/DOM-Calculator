const createContainer = document.createElement("div");
const createColumn = document.createElement("div");
const heading = document.createElement("h1");
heading.setAttribute("id", "title");
heading.style.textAlign = "center";
const para = document.createElement("p");

heading.innerHTML = "Calculator";
para.innerHTML = "DOM Manipulation of Calculator";
para.setAttribute("class", "col-lg-12 col-md-4  col-sm-4 col-xs-2");
para.setAttribute("id", "description");
para.style.textAlign = "center";

createContainer.setAttribute("class", "container");
createColumn.setAttribute("class", "column");

document.body.appendChild(createContainer);
createContainer.appendChild(createColumn);
createColumn.appendChild(heading);
createColumn.appendChild(para);

const createContainerForCal = document.createElement("div");
const createRow = document.createElement("div");
const create_Form = document.createElement("form");
create_Form.setAttribute("name", "form1");
create_Form.setAttribute("id", "form1");
//input Btn

const inputBtn = document.createElement("input");
inputBtn.setAttribute("placeholder", "0");
inputBtn.setAttribute("type", "text");
inputBtn.setAttribute("class", "form-control");
inputBtn.setAttribute("id", "result");
inputBtn.setAttribute("name", "result");
//inputBtn.required = true;

//button creation C
const btnC = document.createElement("button");
btnC.innerHTML = "C";
btnC.setAttribute("id", "clear");
btnC.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-danger rounded-0 p-2"
);

//BackArrow
const backArrow = document.createElement("button");
backArrow.innerHTML = "<-";
backArrow.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

//.Dot
const dot = document.createElement("button");
dot.innerHTML = ".";
dot.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

// X

const multiply = document.createElement("button");
multiply.innerHTML = "X";
multiply.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-primary rounded-0 p-2"
);

// 7, 8, 9, /

const sevenBtn = document.createElement("button");
sevenBtn.innerHTML = "7";
sevenBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

const eightBtn = document.createElement("button");
eightBtn.innerHTML = "8";
eightBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

const nineBtn = document.createElement("button");
nineBtn.innerHTML = "9";
nineBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

const divideBtn = document.createElement("button");
divideBtn.innerHTML = "/";
divideBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-primary rounded-0 p-2"
);

//4 5 6 -
const fourBtn = document.createElement("button");
fourBtn.innerHTML = "4";
fourBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

const fiveBtn = document.createElement("button");
fiveBtn.innerHTML = "5";
fiveBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

const sixBtn = document.createElement("button");
sixBtn.innerHTML = "6";
sixBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

const minusBtn = document.createElement("button");
minusBtn.innerHTML = "-";
minusBtn.setAttribute("id", "subtract");
minusBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-primary rounded-0 p-2"
);

//1,2,3,+
const oneBtn = document.createElement("button");
oneBtn.innerHTML = "1";
oneBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

const twoBtn = document.createElement("button");
twoBtn.innerHTML = "2";
twoBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

const threeBtn = document.createElement("button");
threeBtn.innerHTML = "3";
threeBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);

const plusBtn = document.createElement("button");
plusBtn.innerHTML = "+";
plusBtn.setAttribute("id", "add");
plusBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-primary rounded-0 p-2"
);

//0,00,=
const zeroBtn = document.createElement("button");
zeroBtn.innerHTML = "0";
zeroBtn.setAttribute("id", "zero");
zeroBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2  bg-light text-dark rounded-0 p-2"
);

const zeroBtnDouble = document.createElement("button");
zeroBtnDouble.innerHTML = "00";
zeroBtnDouble.setAttribute("id", "doubleZero");
zeroBtnDouble.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2  bg-light text-dark rounded-0  p-2"
);

const isEqual = document.createElement("button");
isEqual.innerHTML = "=";
isEqual.setAttribute("id", "equal");
isEqual.setAttribute("class", "col-lg-6 bg-primary rounded-0 p-2");

// isEqual.addEventListener("keydown",calculate);

document.body.appendChild(createContainerForCal);
createContainer.appendChild(createRow);
createRow.appendChild(create_Form);
create_Form.appendChild(inputBtn);
create_Form.appendChild(btnC);
create_Form.appendChild(backArrow);
create_Form.appendChild(dot);
create_Form.appendChild(multiply);
create_Form.appendChild(sevenBtn);
create_Form.appendChild(eightBtn);
create_Form.appendChild(nineBtn);
create_Form.appendChild(divideBtn);
create_Form.appendChild(fiveBtn);
create_Form.appendChild(fourBtn);
create_Form.appendChild(sixBtn);
create_Form.appendChild(minusBtn);
create_Form.appendChild(oneBtn);
create_Form.appendChild(twoBtn);
create_Form.appendChild(threeBtn);
create_Form.appendChild(plusBtn);
create_Form.appendChild(zeroBtn);
create_Form.appendChild(zeroBtnDouble);
create_Form.appendChild(isEqual);
document.body.addEventListener("keydown", keypress);

function keypress(e) {
  validate(e);
 
  if (e.key === "=") {
    console.log("Entering to calculate()")
    calculate();
  }
}
////valication Check
function validate(e) {
  console.log("Keys", e.key, typeof e.key);
  
  if (
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "9" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "0" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "Shift" ||
    e.key === "=" ||  e.key === "%"
  ) {
    
  } else {
    alert("Only Numbers allowed");
  }
  
}
function calculate() {
  let operationValue = 0;
  let finalValue = document.getElementById("result").value;
  let result = document.getElementById("result");

  //Addition

  if (finalValue.includes("+")) {
    const [num1, num2] = finalValue.split("+");
    operationValue = parseFloat(num1) + parseFloat(num2);
    result.value = operationValue;
  }

  //Substraction
  if (finalValue.includes("-")) {
    const [num1, num2] = finalValue.split("-");
    operationValue = parseFloat(num1) - parseFloat(num2);
    result.value = operationValue;
  }

  //Multiplication
  if ( finalValue && finalValue.includes("*")) {
    const [num1, num2] = finalValue.split("*");
    operationValue = parseFloat(num1) * parseFloat(num2);
    result.value = operationValue;
  }

  //Division
  if (finalValue.includes("/")) {
    const [num1, num2] = finalValue.split("/");
    operationValue = Number(num1) / Number(num2);
    result.value = operationValue;
    
  }

  //Modulus
  if (finalValue.includes("%")) {
    const [num1, num2] = finalValue.split("%");
    operationValue = parseFloat(num1) % parseFloat(num2);
    result.value = operationValue;
   
  }

}
