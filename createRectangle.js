const {generateRectangle} = require('./src/patternLibrary.js');
const {getPatternDetails} = require('./src/patternUtil.js');

const main = function(){
  let patternDetails =  getPatternDetails(process.argv);
  console.log(generateRectangle(patternDetails));
}

main();
