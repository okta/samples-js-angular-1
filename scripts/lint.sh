#!/bin/bash -vx

echo "Starting lint.sh"

cd ${OKTA_HOME}/${REPO}
pwd -P

export TEST_SUITE_TYPE="checkstyle"
export TEST_RESULT_FILE_DIR="${REPO}/build2/reports/lint"

if ! npm install; then
  echo "Npm install failed! Exiting..."
  exit ${FAILED_SETUP}
fi

if ! npm run lint:report; then
  echo "Lint failed! Exiting..."
  exit ${TEST_FAILURE}
fi

exit ${SUCCESS}
