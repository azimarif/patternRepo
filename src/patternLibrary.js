function starLine(length) {
  let msg = "";
  for (len = 1; len <= length; len++) {
    msg += "*";
  }
  return msg;
}

function dashLine(length) {
  let msg = "";
  for (len = 1; len <= length; len++) {
    msg += "-";
  }
  return msg;
}

function emptyLine(length) {
  let msg = "";
  for (len = 1; len <= length; len++) {
    if (len == 1 || len == length) {
      msg += "*";
    } else {
      msg += " ";
    }
  }
  return msg;
}

function generateRectangle(shape, width, height) {
  let shapePattern = "";
  for (row = 1; row <= height; row++) {
    if (shape == "filled") {
      shapePattern += starLine(width) + "\n";
    } else if (shape == "empty") {
      if (row == 1 || row == height) {
        shapePattern += starLine(width) + "\n";
      } else {
        shapePattern += emptyLine(width) + "\n";
      }
    } else {
      if (row % 2 == 0) {
        shapePattern += dashLine(width) + "\n";
      } else {
        shapePattern += starLine(width) + "\n";
      }
    }
  }
  return shapePattern.substr(0,shapePattern.length-1);
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
  return shapePattern.substr(0, shapePattern.length-1);;
}

const repeatCharacter = function(lineLength, character) {
  let text = "";
  for (let start = 1; start <= lineLength; start++) {
    text += character;
  }
  return text;
}

const repeatSpacedChars = function(lineLength, firstChar, middleChar, lastChar) {
  let text = firstChar;
  for (let start = 1; start <= lineLength - 2; start++) {
    text += middleChar;
  }
  text += lastChar;
  if (lineLength == 1) {
    text = "*";
  }
  return text;
}

const upperHalfDiamond = function(lineLength, firstChar, middleChar, lastChar) {
  let pattern = "";
  for (let row = 1; row <= Math.ceil(lineLength / 2); row++) {
    let count = 2 * row - 1;
    let spaces = repeatCharacter((lineLength - count) / 2, " ");
    pattern += spaces + repeatSpacedChars(count, firstChar, middleChar, lastChar) + spaces + "\n";
  }
  return pattern;
}

const lowerHalfDiamond = function(lineLength, firstChar, middleChar, lastChar) {
  let pattern = "";
  for (let row = Math.ceil(lineLength / 2) - 1; row > 0; row--) {
    let count = 2 * row - 1;
    let spaces = repeatCharacter((lineLength - count) / 2, " ");
    pattern += spaces + repeatSpacedChars(count, firstChar, middleChar, lastChar) + spaces + "\n";
  }
  return pattern;
}

const filledDiamond = function(lineLength) {
  lineLength = lineLength %2 == 0 ? lineLength -1 : lineLength;
  let pattern = "";
  pattern += upperHalfDiamond(lineLength, "*", "*", "*");
 // console.log(pattern);
  pattern += lowerHalfDiamond(lineLength, "*", "*", "*");
 return pattern.substr(0, pattern.length-1);
}

const hollowDiamond = function(lineLength) {
  lineLength = lineLength %2 == 0 ? lineLength -1 : lineLength;
  let pattern = "";
  pattern += upperHalfDiamond(lineLength, "*", " ", "*");
  pattern += lowerHalfDiamond(lineLength, "*", " ", "*");
  return pattern.substr(0, pattern.length-1);
}

const angledHollowDiamond = function(lineLength) {
  lineLength = lineLength %2 == 0 ? lineLength -1 : lineLength;
  let pattern = "";
  for (let row = 1; row < Math.ceil(lineLength / 2); row++) {
    count = 2 * row - 1;
    spaces = repeatCharacter((lineLength - count) / 2, " ");
    pattern += spaces + repeatSpacedChars(count, "/", " ", "\\") + spaces + "\n";
  }
  pattern += repeatSpacedChars(lineLength, "*", " ", "*") + "\n";
  pattern += lowerHalfDiamond(lineLength, "\\", " ", "/");
  return pattern.substr(0,pattern.length-1);
}

module.exports = { generateRectangle, 
  generateTriangle, 
  filledDiamond, 
  hollowDiamond, 
  angledHollowDiamond 
}
