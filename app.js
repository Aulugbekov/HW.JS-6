function getAverage() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  let result = sum / arguments.length;

  return result;
}

console.log(getAverage(4, 5, 6, 6, 8, 9, 12, 15, 21));

function text(text) {
  let result = "";
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
}

console.log(text("hello"));
console.log(text("Hello,how are you"));
