const screenEl = document.querySelector(".screen");
const numbersEl = document.querySelectorAll(".number");
const operatorsEl = document.querySelectorAll(".operator");
const clearEL = document.querySelector(".clear");
const equalEl = document.querySelector(".equal");
let result = null;
let disNum = "";
lastOperation = "";

numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    disNum += e.target.innerText;
    screenEl.textContent += disNum;
    // console.log(disNum);
  });
});

operatorsEl.forEach((operator) => {
  operator.addEventListener("click", function (e) {
    if (!disNum) {
      return;
    }
    const operatorName = e.target.textContent;
    console.log(operatorName);
    if (disNum && lastOperation) {
      mathOperator();
    } else {
      result = parseFloat(disNum);
    }
    screenEl.textContent+=operatorName
    clearVar(operatorName);
    lastOperation = operatorName;
  });
});
function clearVar(name) {
    disNum += " " + name + " ";
    screenEl.textContent=disNum
  disNum = "";  
//   tempResultEl.innerText = result;
}
function mathOperator() {
    if (lastOperation==="*") {
        result=parseFloat(result)*parseFloat(disNum)
    }
    else if(lastOperation==="+"){
        result=parseFloat(result)+parseFloat(disNum)
    }
    else if(lastOperation==="-"){
        result=parseFloat(result)-parseFloat(disNum)
    }
    else if(lastOperation==="/"){
        result=parseFloat(result)/parseFloat(disNum)
    }
}
equalEl.addEventListener("click",function(){
    mathOperator();
    clearVar();
    screenEl.textContent=result
})
clearEL.addEventListener("click",function(){
    disNum="";
    screenEl.textContent=""
    result="";
    operatorName="";
})

document.body.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" 
     ) {
      clickNumberEl(e.key);
      // console.log(e.key)
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
      clickOperation(e.key);
    } else if (e.key == "Enter" || e.key === "=") {
      clickEqual();
    }
    // console.log(e.key)
  });
  function clickNumberEl(key) {
    numbersEl.forEach((nums) => {
      if (nums.textContent === key) {
        nums.click();
      }
    });
  }
  function clickOperation(key) {
    operatorsEl.forEach((operator) => {
      if (operator.textContent === key) {
        operator.click();
      }
    });
  }
  function clickEqual() {
    equalEl.click();
  }



