function getPatternDetails(userDetails){
  return {
    shape : userDetails[0],
    width : +userDetails[1],
    height : +userDetails[2]
  }
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

const repeatCharacter = function(times, character) {
  let line = new Array(times).fill(character).join('');
  return line;
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
    let spaces = repeatCharacter(Math.floor((lineLength - count) / 2), " ");
    pattern += spaces + repeatSpacedChars(count, firstChar, middleChar, lastChar) + spaces + "\n";
  }
  return pattern;
}

const lowerHalfDiamond = function(lineLength, firstChar, middleChar, lastChar) {
  let pattern = "";
  for (let row = Math.ceil(lineLength / 2) - 1; row > 0; row--) {
    let count = 2 * row - 1;
    let spaces = repeatCharacter(Math.floor((lineLength - count) / 2), " ");
    pattern += spaces + repeatSpacedChars(count, firstChar, middleChar, lastChar) + spaces + "\n";
  }
  return pattern;
}

module.exports = { 
  emptyLine,
  repeatCharacter,
  repeatSpacedChars,
  upperHalfDiamond,
  lowerHalfDiamond,
  getPatternDetails
}
