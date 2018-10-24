set -e
./run_test.sh ./createTriangle.js ./test/triangleInput ./test/triangleOutput
./run_test.sh ./createRectangle.js ./test/rectangleInput ./test/rectangleOutput
./run_test.sh ./createDiamond.js ./test/diamondInput ./test/diamondOutput
