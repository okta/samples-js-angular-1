#!/bin/bash -vx

REGISTRY="https://artifacts.aue1d.saasure.com/artifactory/api/npm/npm-okta"

source $OKTA_HOME/$REPO/scripts/setup.sh

export TEST_SUITE_TYPE="build"

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

DATALOAD=$(npm run ci-pkginfo:dataload --silent)
if ! artifactory_curl -X PUT -u ${ARTIFACTORY_CREDS} ${DATALOAD} -v -f; then
  echo "artifactory_curl failed! Exiting..."
  exit $PUBLISH_ARTIFACTORY_FAILURE
fi

exit $SUCCESS
