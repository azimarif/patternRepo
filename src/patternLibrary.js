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

const createLeftTriangle = function(height) {
  let prefixCharacter = "*";
  let suffixCharacter = " ";
  let shapePattern = [];
  for (let row = 0; row < height; row++) {
    let rowPrefix = repeatCharacter(row + 1, prefixCharacter);
    let rowSuffix = repeatCharacter(height - row - 1, suffixCharacter);
    shapePattern.push(rowPrefix + rowSuffix);
  }
  return shapePattern.join('\n');
}

const createRightTriangle = function(height) {
  let prefixCharacter = "*";
  let suffixCharacter = " ";
  let shapePattern = [];
  for (let row = 0; row < height; row++) {
    let rowSuffix = repeatCharacter(row + 1, prefixCharacter);
    let rowPrefix = repeatCharacter(height - row - 1, suffixCharacter);
    shapePattern.push(rowPrefix + rowSuffix);
  }
  return shapePattern.join('\n');
}

const generateTriangle = function(patternDetail) {
  let {
    shape, width
  } = patternDetail;
  let triangle = {
    left: createLeftTriangle,
    right: createRightTriangle
  };
  return triangle[shape](width);
}

const createFilledDiamond = function(lineLength) {
  lineLength = lineLength % 2 == 0 ? lineLength - 1 : lineLength;
  let pattern = "";
  pattern += upperHalfDiamond(lineLength, "*", "*", "*");
  pattern += lowerHalfDiamond(lineLength, "*", "*", "*");
  return pattern.substr(0, pattern.length - 1);
}

const createHollowDiamond = function(lineLength) {
  lineLength = lineLength % 2 == 0 ? lineLength - 1 : lineLength;
  let pattern = "";
  pattern += upperHalfDiamond(lineLength, "*", " ", "*");
  pattern += lowerHalfDiamond(lineLength, "*", " ", "*");
  return pattern.substr(0, pattern.length - 1);
}

const createAngledDiamond = function(lineLength) {
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
    filled: createFilledDiamond,
    hollow: createHollowDiamond,
    angled: createAngledDiamond
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
  createLeftTriangle,
  createRightTriangle,
  createFilledDiamond,
  createHollowDiamond,
  createAngledDiamond,
  generateRectangle,
  generateTriangle,
  generateDiamond
}