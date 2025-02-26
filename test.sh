#!/bin/bash
set -e
trap "exit" INT TERM
trap "kill 0" EXIT

echo "Welcome to the <new> test script!"
while getopts 'p:h' opt; do
  case "$opt" in
    p)
      FDC_BINARY_PATH="$OPTARG"
      echo "Processing option 'p'"
      ;;
       
    ?|h)
      echo "Usage: $(basename $0) [-p PATH_TO_BINARY] "
      exit 1
      ;;
  esac
done
export DATACONNECT_EMULATOR_BINARY_PATH="${FDC_BINARY_PATH}"
echo "Setting binary path to: $DATACONNECT_BINARY_PATH"
shift "$(($OPTIND -1))"
cd vanilla-js-10
pnpm i
firebase emulators:start & pid=$!
sleep 5
npm run test
cd ../vanilla-js-11
pnpm i
npm run test
kill -9 $pid