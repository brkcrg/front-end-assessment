// ASSESSMENT:
// Fill inside of the optimizeFunction function!

function doExpensiveTask(input) {
  const result = 2 * input;
  console.log("Doing expensive task...:", result);
  return result;
}

var oldResult;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function optimizeFunction(func) {
  // You shouldn't need to edit anywhere else
  // Do your work inside this function
  // SOLUTION:

  var fnStr = func.toString().replace(STRIP_COMMENTS, "");
  var result = fnStr
    .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
    .match(ARGUMENT_NAMES);
  if (result === null) result = [];
  return console.log(result);

  //     var str = func.toString();
  //     console.log(str);
  //     var index=str.indexOf(":");

  //     console.log(index);
  //     console.log();
  // return func;
}

// anOptimizedFunc shouldn't execute the expensive task if new input is same as the previous one
const anOptimizedFunc = optimizeFunction(doExpensiveTask);

anOptimizedFunc(2);