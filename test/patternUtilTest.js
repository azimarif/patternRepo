const {
  getPatternDetails,
  emptyLine,
  repeatCharacter,
  repeatSpacedChars,
  upperHalfDiamond,
  lowerHalfDiamond,
} = require('../src/patternUtil.js');

const {
  equal, 
  deepEqual
} = require('assert');

//Test for getPatternDetails
deepEqual(getPatternDetails([,, "filled", "5", "3"]), { shape : "filled", width : 5, height :3 });
deepEqual(getPatternDetails([,, "hollow", "5", "3"]), { shape : "hollow", width : 5, height :3 });
deepEqual(getPatternDetails([,, "angled", "5", "3"]), { shape : "angled", width : 5, height :3 });
deepEqual(getPatternDetails([,, "alternating", "5", "3"]), { shape : "alternating", width : 5, height :3 });
deepEqual(getPatternDetails([,, "empty", "5", "3"]), { shape : "empty", width : 5, height :3 });

//Test case for empty line
equal(emptyLine(1), '*');
equal(emptyLine(2), '**');
equal(emptyLine(3), '* *');
equal(emptyLine(4), '*  *');
equal(emptyLine(5), '*   *');

//Test for repeat character 
equal(repeatCharacter(1, '*'), '*');
equal(repeatCharacter(2, '*'), '**');
equal(repeatCharacter(3, '*'), '***');
equal(repeatCharacter(4, '*'), '****');
equal(repeatCharacter(5, '*'), '*****');

//Test for repeatSpacedChars
equal(repeatSpacedChars(1, '*', '*', '*'), '*');
equal(repeatSpacedChars(2, '*', '*', '*'), '**');
equal(repeatSpacedChars(3, '*', '*', '*'), '***');
equal(repeatSpacedChars(4, '*', '*', '*'), '****');
equal(repeatSpacedChars(5, '*', '*', '*'), '*****');

//Test for upperHalfDiamond
equal(upperHalfDiamond(1, '*', '*', '*'), '*\n');
equal(upperHalfDiamond(2, '*', '*', '*'), '*\n');
equal(upperHalfDiamond(3, '*', '*', '*'), ' * \n***\n');
equal(upperHalfDiamond(4, '*', '*', '*'), ' * \n***\n');
equal(upperHalfDiamond(5, '*', '*', '*'), '  *  \n *** \n*****\n');

//Test for lowerHalfDiamond
equal(lowerHalfDiamond(1, '*', '*', '*'), '');
equal(lowerHalfDiamond(2, '*', '*', '*'), '');
equal(lowerHalfDiamond(3, '*', '*', '*'), ' * \n');
equal(lowerHalfDiamond(4, '*', '*', '*'), ' * \n');
equal(lowerHalfDiamond(5, '*', '*', '*'), ' *** \n  *  \n');

console.log('All Util function tests passed');
