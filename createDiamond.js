const { generateDiamond } = require("./src/patternLibrary.js");
const {getPatternDetails} = require('./src/patternUtil.js');

const main = function(){
  let patternDetail =  getPatternDetails(process.argv);
  console.log(generateDiamond(patternDetail)); 
}
main();
