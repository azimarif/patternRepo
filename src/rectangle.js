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
      shapePattern += starLine(height) + "\n";
    } else if (shape == "empty") {
      if (row == 1 || row == height) {
       shapePattern += starLine(height) + "\n";
      } else {
        shapePattern += emptyLine(height) + "\n";
      }
    } else {
      if (row % 2 == 0) {
       shapePattern += dashLine(height) + "\n";
      } else {
       shapePattern += starLine(height) + "\n";
      }
    }
  }
  return shapePattern;
}

module.exports = { generateRectangle }
