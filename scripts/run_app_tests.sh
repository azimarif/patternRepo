set -e

./scripts/run_test.sh ./createTriangle.js ./app_tests_data/triangleInput ./app_tests_data/triangleOutput
./scripts/run_test.sh ./createRectangle.js ./app_tests_data/rectangleInput ./app_tests_data/rectangleOutput
./scripts/run_test.sh ./createDiamond.js ./app_tests_data/diamondInput ./app_tests_data/diamondOutput

node ./test/patternLibraryTest.js
