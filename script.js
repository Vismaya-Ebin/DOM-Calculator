const createContainer = document.createElement("div");
const createColumn = document.createElement("div");
const heading = document.createElement("h1");
heading.setAttribute("id","title");
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

//input Btn

const inputBtn = document.createElement("input");
inputBtn.setAttribute("placeholder", "0");
inputBtn.setAttribute("type", "text");
inputBtn.setAttribute("class", "form-control");
inputBtn.setAttribute("id", "result");
inputBtn.required = true;

//button creation C
const btnC = document.createElement("button");
btnC.innerHTML = "C";
btnC.setAttribute("id", "clear");
btnC.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-danger rounded-0 p-2"
);
btnC.addEventListener("click", function () {
  display("C");
});
//BackArrow
const backArrow = document.createElement("button");
backArrow.innerHTML = "<-";
backArrow.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
backArrow.addEventListener("click", function () {
  display("Back");
});

//.Dot
const dot = document.createElement("button");
dot.innerHTML = ".";
dot.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
dot.addEventListener("click", function () {
  display(".");
});

// X

const multiply = document.createElement("button");
multiply.innerHTML = "X";
multiply.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-primary rounded-0 p-2"
);
multiply.addEventListener("click", function () {
  display("X");
});

// 7, 8, 9, /

const sevenBtn = document.createElement("button");
sevenBtn.innerHTML = "7";
sevenBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
sevenBtn.addEventListener("click", function () {
  display("7");
});

const eightBtn = document.createElement("button");
eightBtn.innerHTML = "8";
eightBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
eightBtn.addEventListener("click", function () {
  display("8");
});

const nineBtn = document.createElement("button");
nineBtn.innerHTML = "9";
nineBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
nineBtn.addEventListener("click", function () {
  display("9");
});

const divideBtn = document.createElement("button");
divideBtn.innerHTML = "/";
divideBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-primary rounded-0 p-2"
);
divideBtn.addEventListener("click", function () {
  display("/");
});

//4 5 6 -
const fourBtn = document.createElement("button");
fourBtn.innerHTML = "4";
fourBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
fourBtn.addEventListener("click", function () {
  display("4");
});

const fiveBtn = document.createElement("button");
fiveBtn.innerHTML = "5";
fiveBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
fiveBtn.addEventListener("click", function () {
  display("5");
});

const sixBtn = document.createElement("button");
sixBtn.innerHTML = "6";
sixBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
sixBtn.addEventListener("click", function () {
  display("6");
});

const minusBtn = document.createElement("button");
minusBtn.innerHTML = "-";
minusBtn.setAttribute("id","subtract");
minusBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-primary rounded-0 p-2"
);
minusBtn.addEventListener("click", function () {
  display("-");
});

//1,2,3,+
const oneBtn = document.createElement("button");
oneBtn.innerHTML = "1";
oneBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
oneBtn.addEventListener("click", function () {
  display("1");
});

const twoBtn = document.createElement("button");
twoBtn.innerHTML = "2";
twoBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
twoBtn.addEventListener("click", function () {
  display("2");
});

const threeBtn = document.createElement("button");
threeBtn.innerHTML = "3";
threeBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-dark rounded-0 p-2"
);
threeBtn.addEventListener("click", function () {
  display("3");
});

const plusBtn = document.createElement("button");
plusBtn.innerHTML = "+";
plusBtn.setAttribute("id","add");
plusBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2 bg-light text-primary rounded-0 p-2"
);
plusBtn.addEventListener("click", function () {
  display("+");
});

//0,00,= 
const zeroBtn = document.createElement("button");
zeroBtn.innerHTML = "0";
zeroBtn.setAttribute("id","zero");
zeroBtn.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2  bg-light text-dark rounded-0 p-2");
  
zeroBtn.addEventListener("click", function () {
  display("0");
});

const zeroBtnDouble = document.createElement("button");
zeroBtnDouble.innerHTML = "00";
zeroBtnDouble.setAttribute("id","doubleZero");
zeroBtnDouble.setAttribute(
  "class",
  "col-lg-3 col-md-4  col-sm-4 col-xs-2  bg-light text-dark rounded-0  p-2");
  
  zeroBtnDouble.addEventListener("click", function () {
  display("00");
});
const isEqual = document.createElement("button");
isEqual.innerHTML = "=";
isEqual.setAttribute("id","equal");
isEqual.setAttribute(
  "class",
  "col-lg-6 bg-primary rounded-0 p-2");
  
  isEqual.addEventListener("click", function () {
  display("=");
});

document.body.appendChild(createContainerForCal);
createContainer.appendChild(createRow);
createRow.appendChild(inputBtn);
createRow.appendChild(btnC);
createRow.appendChild(backArrow);
createRow.appendChild(dot);
createRow.appendChild(multiply);
createRow.appendChild(sevenBtn);
createRow.appendChild(eightBtn);
createRow.appendChild(nineBtn);
createRow.appendChild(divideBtn);
createRow.appendChild(fiveBtn);
createRow.appendChild(fourBtn);
createRow.appendChild(sixBtn);
createRow.appendChild(minusBtn);
createRow.appendChild(oneBtn);
createRow.appendChild(twoBtn);
createRow.appendChild(threeBtn);
createRow.appendChild(plusBtn);
createRow.appendChild(zeroBtn);
createRow.appendChild(zeroBtnDouble);
createRow.appendChild(isEqual);

function display(event) {
  event.preventDefault();
 // alert(event);
}
