const {generateTriangle} = require('./src/triangle.js');
const main = function(){
  let shape = process.argv[2];
  let lineLength = process.argv[3];
  console.log(generateTriangle(shape, lineLength));
}

main();
