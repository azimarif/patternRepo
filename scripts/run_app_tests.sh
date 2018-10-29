set -e

./scripts/run_test.sh ./createTriangle.js ./app_tests_data/input/triangleInput ./app_tests_data/output/triangleOutput
./scripts/run_test.sh ./createRectangle.js ./app_tests_data/input/rectangleInput ./app_tests_data/output/rectangleOutput
./scripts/run_test.sh ./createDiamond.js ./app_tests_data/input/diamondInput ./app_tests_data/output/diamondOutput
