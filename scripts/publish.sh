#!/bin/bash -vx

REGISTRY="https://artifacts.aue1d.saasure.com/artifactory/api/npm/npm-okta"

cd ${OKTA_HOME}/${REPO}

export TEST_SUITE_TYPE="build"

if ! npm install; then
  echo "npm install failed! Exiting..."
  exit $FAILED_SETUP
fi

if ! npm run ci-update-package -- --branch ${BRANCH}; then
  echo "ci-update-package failed! Exiting..."
  exit $FAILED_SETUP
fi

if ! npm run build -- --branch ${BRANCH}; then
  echo "run run build failed! Exiting..."
  exit $FAILED_SETUP
fi

if ! npm publish --registry ${REGISTRY}; then
  echo "npm publish failed! Exiting..."
  exit $PUBLISH_ARTIFACTORY_FAILURE
fi

exit $SUCCESS
