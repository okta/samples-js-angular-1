#!/bin/bash -vx

cd ${OKTA_HOME}/${REPO}

# Use latest version of Node
setup_service node v8.1.1

# Use latest NPM
npm install -g npm@latest

# Install required dependencies
npm install -g @okta/ci-update-package
npm install -g @okta/ci-pkginfo

SHRINKWRAP="$OKTA_HOME/$REPO/tools/wrap-dependencies/npm-shrinkwrap-ci.json"
if [ -f "$SHRINKWRAP" ];
then
  cp "$SHRINKWRAP" "$OKTA_HOME/$REPO/npm-shrinkwrap.json"
else
  echo "No CI shrinkwrap! Run \"npm run wrap\""
  exit $FAILED_SETUP
fi

if ! npm install --no-optional --unsafe-perm; then
  echo "npm install failed! Exiting..."
  exit ${FAILED_SETUP}
fi
