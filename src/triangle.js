const repeatCharacter = function(numberOfTimes, character) {
  let pattern = "";
  for (let start = 0; start < numberOfTimes; start++) {
    pattern += character;
  }
  return pattern;
}

const generateTriangle = function(shape, lineLength) {
  let shapePattern = "";
  for (let row = 0; row < lineLength; row++) {
    let prefixCharacter = "*";
    suffixCharacter = " ";

    let rowPrefix = repeatCharacter(row + 1, prefixCharacter);
    let rowSuffix = repeatCharacter(lineLength - row - 1, suffixCharacter);
    if (shape == "left") {
      shapePattern += rowPrefix + rowSuffix + "\n";
    } else {
      shapePattern += rowSuffix + rowPrefix + "\n";
    }
  }
  return shapePattern;
}

module.exports = {generateTriangle }
