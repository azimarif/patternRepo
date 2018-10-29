for testFile in ./test/*.js
do
  echo $testFile
  node $testFile
done

