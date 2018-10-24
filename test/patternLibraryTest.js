const {
  generateRectangle, 
  generateTriangle, 
  filledDiamond, 
  hollowDiamond, 
  angledHollowDiamond
} = require('../src/patternLibrary.js');

const {
  deepEqual
} = require('assert');

let line = "********************";
pattern = [line, line, line, line, line, line, line].join("\n");

//Test cases for rectangle patterns

//Rectangle pattern test with the given input -> filled , wdth - 20 and height - 7
deepEqual(generateRectangle("filled", 20, 7), pattern);

//Rectangle pattern test with the inputs "filled" , width - 1 and height - 2
deepEqual(generateRectangle("filled", 1, 2), "*\n*");

//rectangle pattern test with the inputs "filled" , width - 2 and height - 2
deepEqual(generateRectangle("filled", 2, 2), "**\n**");

//rectangle pattern test with the inputs "filed" , width -1 and height -3
deepEqual(generateRectangle("filled", 1, 3), "*\n*\n*");

//rectangle pattern test with the inputs "filled" , width - 3 and height  -3
deepEqual(generateRectangle("filled", 3, 3), "***\n***\n***");

//rectangle pattern test with the inputs "filled", width - 4 and height -2
deepEqual(generateRectangle("filled", 4, 2), "****\n****");

line = "********************";
hline = "*                  *";
pattern = [line, hline, hline, hline, hline, hline, line].join("\n");
//rectangle pattern test with the inputs "emmpty" width as 2 and height as 2
deepEqual(generateRectangle("empty", 2, 2), "**\n**");

//rectangle pattern test with the inputs "empty" width as 3 and height as 2
deepEqual(generateRectangle("empty", 3, 2), "***\n***");

//rectangle pattern test with the inputs "empty"width as 3 and height as 3
deepEqual(generateRectangle("empty", 3, 3), "***\n* *\n***");

//rectangle pattern test with the inputs "empty" width as 20 and height as 7
deepEqual(generateRectangle("empty", 20, 7), pattern);

line = "******************************";
hline = "*                            *";
pattern = [line, hline, hline, hline, hline, hline, hline, line].join("\n");
deepEqual(generateRectangle("empty", 30, 8), pattern);

//


deepEqual(generateRectangle("alternating", 2, 2), "**\n--");
deepEqual(generateRectangle("alternating", 3, 2), "***\n---");
deepEqual(generateRectangle("alternating", 3, 3), "***\n---\n***");
deepEqual(generateRectangle("alternating", 1, 2), "*\n-");


line = "********************";
hline = "--------------------";
pattern = [line, hline, line, hline, line, hline, line].join("\n");
deepEqual(generateRectangle("alternating", 20, 7), pattern);

//-----------------------TRIANGLE-----------------------------

//Triangle pattern of left aligned with height 2
deepEqual(generateTriangle("left", 2), "* \n**");

//Triangle pattern of left aligned with height 3
deepEqual(generateTriangle("left", 3), "*  \n** \n***");

//Triangle pattern of left aligned with height 4
deepEqual(generateTriangle("left", 4), "*   \n**  \n*** \n****");

//Triangle pattern of left aligned with height 5
deepEqual(generateTriangle("left", 5), "*    \n**   \n***  \n**** \n*****");

//Triangle pattern of left aligned with height 6
deepEqual(generateTriangle("left", 6), "*     \n**    \n***   \n****  \n***** \n******");

//Triangle pattern of right aligned with height 2
deepEqual(generateTriangle("right", 2), " *\n**");

//Triangle pattern of right aligned with height 3
deepEqual(generateTriangle("right", 3), "  *\n **\n***");

//Triangle patten of right aligned with height 4
deepEqual(generateTriangle("right", 4), "   *\n  **\n ***\n****");

//Triangle pattern of right aligned with height 5
deepEqual(generateTriangle("right", 5), "    *\n   **\n  ***\n ****\n*****");

//Triangle pattern of right aligned with height 6
deepEqual(generateTriangle("right", 6), "     *\n    **\n   ***\n  ****\n *****\n******");

//Diamond pattern of filled type and height 3
//console.log(filledDiamond(3));
deepEqual(filledDiamond(3), " * \n***\n * ");
//Diamond patten of filled type and height 4
deepEqual(filledDiamond(4), " * \n***\n * ");
//Diamond pattern of filled type and height 5
deepEqual(filledDiamond(5), "  *  \n *** \n*****\n *** \n  *  ");
//Diamond pattern of filled type and height 6
deepEqual(filledDiamond(6), "  *  \n *** \n*****\n *** \n  *  ");
//Daimond pattern of filled type and height 7
deepEqual(filledDiamond(7), "   *   \n  ***  \n ***** \n*******\n ***** \n  ***  \n   *   ");
//Diamond pattern of filled type and height 8
deepEqual(filledDiamond(8), "   *   \n  ***  \n ***** \n*******\n ***** \n  ***  \n   *   ");

//Diamond pattern of hollow type and height 3
deepEqual(hollowDiamond(3), " * \n* *\n * ");
//Diamond patten of hollow type and height 4
deepEqual(hollowDiamond(4), " * \n* *\n * ");
//Diamond pattern of hollow type and height 5
deepEqual(hollowDiamond(5), "  *  \n * * \n*   *\n * * \n  *  ");
//Diamond pattern of hollow type and height 6
deepEqual(hollowDiamond(6), "  *  \n * * \n*   *\n * * \n  *  ");
//Daimond pattern of hollow type and height 7
deepEqual(hollowDiamond(7), "   *   \n  * *  \n *   * \n*     *\n *   * \n  * *  \n   *   ");
//Diamond pattern of hollow type and height 8
deepEqual(hollowDiamond(8), "   *   \n  * *  \n *   * \n*     *\n *   * \n  * *  \n   *   ");

//Diamond pattern of angled type and height 3
deepEqual(angledHollowDiamond(3), " * \n* *\n * ");
//Diamond patten of angled type and height 4
deepEqual(angledHollowDiamond(4), " * \n* *\n * ");
//Diamond pattern of angled type and height 5
deepEqual(angledHollowDiamond(5), "  *  \n / \\ \n*   *\n \\ / \n  *  ");
//Diamond pattern of angled type and height 6
deepEqual(angledHollowDiamond(6), "  *  \n / \\ \n*   *\n \\ / \n  *  ");
//Daimond pattern of angled type and height 7
deepEqual(angledHollowDiamond(7), "   *   \n  / \\  \n /   \\ \n*     *\n \\   / \n  \\ /  \n   *   ");
//Diamond pattern of angled type and height 8
deepEqual(angledHollowDiamond(8), "   *   \n  / \\  \n /   \\ \n*     *\n \\   / \n  \\ /  \n   *   ");


console.log("All tests passed");