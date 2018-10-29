const {
  generateRectangle, 
  generateTriangle, 
  generateDiamond
} = require('../src/patternLibrary.js');

const {
  deepEqual
} = require('assert');

let line = "********************";
let pattern = [line, line, line, line, line, line, line].join("\n");
let hline = "*                  *";

//Test cases for rectangle patterns

//Rectangle pattern test with the given input -> filled , wdth - 20 and height - 7
deepEqual(generateRectangle({shape : "filled", width : 20, height : 7}), pattern);

//Rectangle pattern test with the inputs "filled" , width - 1 and height - 2
deepEqual(generateRectangle({shape : "filled", width : 1, height : 2}), "*\n*");

//rectangle pattern test with the inputs "filled" , width - 2 and height - 2
deepEqual(generateRectangle({shape : "filled", width : 2, height : 2}), "**\n**");

//rectangle pattern test with the inputs "filed" , width -1 and height -3
deepEqual(generateRectangle({shape : "filled", width : 1, height : 3}), "*\n*\n*");

//rectangle pattern test with the inputs "filled" , width - 3 and height  -3
deepEqual(generateRectangle({shape : "filled", width : 3, height : 3}), "***\n***\n***");

//rectangle pattern test with the inputs "filed", width - 4 and height -2
deepEqual(generateRectangle({shape : "filled", width : 4, height : 2}), "****\n****");

line = "********************";
pattern = [line, hline, hline, hline, hline, hline, line].join("\n");
//rectangle pattern test with the inputs "emmpty" width as 2 and height as 2
deepEqual(generateRectangle({shape : "empty", width : 2,  height : 2}), "**\n**");

//rectangle pattern test with the inputs "empty" width as 3 and height as 2
deepEqual(generateRectangle({shape : "empty", width : 3,  height : 2}), "***\n***");

//rectangle pattern test with the inputs "empty"width as 3 and height as 3
deepEqual(generateRectangle({shape : "empty", width : 3,  height : 3}), "***\n* *\n***");

//rectangle pattern test with the inputs "empty" width as 20 and height as 7
deepEqual(generateRectangle({shape : "empty", width : 20, height : 7 }), pattern);

line = "******************************";
hline = "*                            *";
pattern = [line, hline, hline, hline, hline, hline, hline, line].join("\n");

deepEqual(generateRectangle({shape : "empty", width : 30, height :8}), pattern);
deepEqual(generateRectangle({shape : "alternating", width : 2, height :2 }), "**\n--");
deepEqual(generateRectangle({shape : "alternating", width : 3, height :2 }), "***\n---");
deepEqual(generateRectangle({shape : "alternating", width : 3, height :3 }), "***\n---\n***");
deepEqual(generateRectangle({shape : "alternating", width : 1, height :2 }), "*\n-");

line = "********************";
hline = "--------------------";
pattern = [line, hline, line, hline, line, hline, line].join("\n");
deepEqual(generateRectangle({shape : "alternating", width : 20,height : 7 }), pattern);

//-----------------------TRIANGLE-----------------------------

//Triangle pattern of left aligned with height 2
deepEqual(generateTriangle({ shape : "left", width : 2} ), "* \n**");

//Triangle pattern of left aligned with height 3
deepEqual(generateTriangle({ shape : "left", width : 3} ), "*  \n** \n***");

//Triangle pattern of left aligned with height 4
deepEqual(generateTriangle({ shape : "left", width : 4} ), "*   \n**  \n*** \n****");

//Triangle pattern of left aligned with height 5
deepEqual(generateTriangle({ shape : "left", width : 5} ), "*    \n**   \n***  \n**** \n*****");

//Triangle pattern of left aligned with height 6
deepEqual(generateTriangle({ shape : "left", width : 6} ), "*     \n**    \n***   \n****  \n***** \n******");

//Triangle pattern of right aligned with height 2
deepEqual(generateTriangle({ shape : "right", width : 2 } ), " *\n**");

//Triangle pattern of right aligned with height 3
deepEqual(generateTriangle({ shape : "right", width : 3 } ), "  *\n **\n***");

//Triangle patten of right aligned with height 4
deepEqual(generateTriangle({ shape : "right", width : 4 } ), "   *\n  **\n ***\n****");

//Triangle pattern of right aligned with height 5
deepEqual(generateTriangle({ shape : "right", width : 5 } ), "    *\n   **\n  ***\n ****\n*****");

//Triangle pattern of right aligned with height 6
deepEqual(generateTriangle({ shape : "right", width : 6 } ), "     *\n    **\n   ***\n  ****\n *****\n******");

//Diamond pattern of filled type and height 3
//console.log(filledDiamond(3));
deepEqual(generateDiamond({shape : "filled", width : 3}), " * \n***\n * ");
//Diamond patten of filled type and height 4
deepEqual(generateDiamond({shape : "filled", width : 4}), " * \n***\n * ");
//Diamond pattern of filled type and height 5
deepEqual(generateDiamond({shape : "filled", width : 5}), "  *  \n *** \n*****\n *** \n  *  ");
//Diamond pattern of filled type and height 6
deepEqual(generateDiamond({shape : "filled", width : 6}), "  *  \n *** \n*****\n *** \n  *  ");
//Daimond pattern of filled type and height 7
deepEqual(generateDiamond({shape : "filled", width : 7}), "   *   \n  ***  \n ***** \n*******\n ***** \n  ***  \n   *   ");
//Diamond pattern of filled type and height 8
deepEqual(generateDiamond({shape : "filled", width : 8}), "   *   \n  ***  \n ***** \n*******\n ***** \n  ***  \n   *   ");

//Diamond pattern of hollow type and height 3
deepEqual(generateDiamond({shape : "hollow", width : 3}), " * \n* *\n * ");
//Diamond patten of hollow type and height 4
deepEqual(generateDiamond({shape : "hollow", width : 4}), " * \n* *\n * ");
//Diamond pattern of hollow type and height 5
deepEqual(generateDiamond({shape : "hollow", width : 5}), "  *  \n * * \n*   *\n * * \n  *  ");
//Diamond pattern of hollow type and height 6
deepEqual(generateDiamond({shape : "hollow", width : 6}), "  *  \n * * \n*   *\n * * \n  *  ");
//Daimond pattern of hollow type and height 7
deepEqual(generateDiamond({shape : "hollow", width : 7}), "   *   \n  * *  \n *   * \n*     *\n *   * \n  * *  \n   *   ");
//Diamond pattern of hollow type and height 8
deepEqual(generateDiamond({shape : "hollow", width : 8}), "   *   \n  * *  \n *   * \n*     *\n *   * \n  * *  \n   *   ");

//Diamond pattern of angled type and height 3
deepEqual(generateDiamond({shape : "angled", width : 3}), " * \n* *\n * ");
//Diamond patten of angled type and height 4
deepEqual(generateDiamond({shape : "angled", width : 4}), " * \n* *\n * ");
//Diamond pattern of angled type and height 5
deepEqual(generateDiamond({shape : "angled", width : 5}), "  *  \n / \\ \n*   *\n \\ / \n  *  ");
//Diamond pattern of angled type and height 6
deepEqual(generateDiamond({shape : "angled", width : 6}), "  *  \n / \\ \n*   *\n \\ / \n  *  ");
//Daimond pattern of angled type and height 7
deepEqual(generateDiamond({shape : "angled", width : 7}), "   *   \n  / \\  \n /   \\ \n*     *\n \\   / \n  \\ /  \n   *   ");
//Diamond pattern of angled type and height 8
deepEqual(generateDiamond({shape : "angled", width : 8}), "   *   \n  / \\  \n /   \\ \n*     *\n \\   / \n  \\ /  \n   *   ");

console.log("All tests passed");
