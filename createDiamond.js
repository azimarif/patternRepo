const { generateDiamond } = require("./src/patternLibrary.js");
const {getPatternDetails} = require('./src/patternUtil.js');

const main = function(){
  let patternDetail =  getPatternDetails(process.argv.slice(2));
  console.log(generateDiamond(patternDetail)); 
}
main();
