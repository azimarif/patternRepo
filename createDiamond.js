const {filledDiamond, hollowDiamond, angledHollowDiamond } = require("./src/patternLibrary.js");

const main = function(){
  let shape = process.argv[2];
  let lineLength = +process.argv[3];
  lineLength = lineLength % 2 == 0 ? lineLength - 1 : lineLength;

  if (shape == "filled") {
    console.log(filledDiamond(lineLength));
  } else if (shape == "hollow") {
    console.log(hollowDiamond(lineLength));
  } else {
    console.log(angledHollowDiamond(lineLength));
  }
}

main();
