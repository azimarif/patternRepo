const {
  emptyLine,
  repeatCharacter,
  repeatSpacedChars,
  upperHalfDiamond,
  lowerHalfDiamond
} = require('./patternUtil.js');

const createFilledRectangle = function(height, width) {
  let pattern = [];
  for (let row = 0; row < height; row++) {
    pattern.push(repeatCharacter(width, '*'));
  }
  return pattern.join('\n');
}

const createEmptyRectangle = function(height, width) {
  let pattern = [];
  pattern.push(repeatCharacter(width, '*'));
  for (let row = 0; row < height - 2; row++) {
    pattern.push('*' + repeatCharacter(width - 2, ' ') + '*');
  }
  pattern.push(repeatCharacter(width, '*'));
  return pattern.join('\n');
}

const createAlternateRectangle = function(height, width) {
  let pattern = [];
  for (let row = 0; row <= height / 2 - 1; row++) {
    pattern.push(repeatCharacter(width, '*'));
    pattern.push(repeatCharacter(width, '-'));
  }
  if (height % 2 == 1) {
    pattern.push(repeatCharacter(width, '*'));
  }
  return pattern.join('\n');
}

const generateRectangle = function(patternDetail) {
  let {
    shape, width, height
  } = patternDetail;
  let shapePattern = "";

  let rectangles = {
    filled: createFilledRectangle,
    empty: createEmptyRectangle,
    alternating: createAlternateRectangle
  };
  return rectangles[shape](height, width);
}

const generateTriangle = function(patternDetail) {
  let shape = patternDetail.shape;
  let lineLength = patternDetail.width;
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
  return shapePattern.substr(0, shapePattern.length - 1);;
}

const filledDiamond = function(lineLength) {
  lineLength = lineLength % 2 == 0 ? lineLength - 1 : lineLength;
  let pattern = "";
  pattern += upperHalfDiamond(lineLength, "*", "*", "*");
  pattern += lowerHalfDiamond(lineLength, "*", "*", "*");
  return pattern.substr(0, pattern.length - 1);
}

const hollowDiamond = function(lineLength) {
  lineLength = lineLength % 2 == 0 ? lineLength - 1 : lineLength;
  let pattern = "";
  pattern += upperHalfDiamond(lineLength, "*", " ", "*");
  pattern += lowerHalfDiamond(lineLength, "*", " ", "*");
  return pattern.substr(0, pattern.length - 1);
}

const angledHollowDiamond = function(lineLength) {
  lineLength = lineLength % 2 == 0 ? lineLength - 1 : lineLength;
  let pattern = "";
  for (let row = 1; row < Math.ceil(lineLength / 2); row++) {
    count = 2 * row - 1;
    spaces = repeatCharacter((lineLength - count) / 2, " ");
    pattern += spaces + repeatSpacedChars(count, "/", " ", "\\") + spaces + "\n";
  }
  pattern += repeatSpacedChars(lineLength, "*", " ", "*") + "\n";
  pattern += lowerHalfDiamond(lineLength, "\\", " ", "/");
  return pattern.substr(0, pattern.length - 1);
}

const generateDiamond = function(patternDetail) {
  let diamondType = {
    filled: filledDiamond,
    hollow: hollowDiamond,
    angled: angledHollowDiamond
  }
  let {
    shape, width
  } = patternDetail;
  return diamondType[shape](width);
}

module.exports = {
  createFilledRectangle,
  createEmptyRectangle,
  createAlternateRectangle,
  generateRectangle,
  generateTriangle,
  generateDiamond
}