const {generateRectangle} = require('./src/rectangle.js');

const main = function(){
  let shape = process.argv[2];
  let width = process.argv[3];
  let height = process.argv[4];
  console.log(generateRectangle(shape, width, height));
}

main();
