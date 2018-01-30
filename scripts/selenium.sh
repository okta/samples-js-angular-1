#!/bin/bash -vx

source $OKTA_HOME/robo-warrior/setupfiles/google-chrome-stable/google-chrome-stable-setup.sh 53.0.2785.143-1
source $OKTA_HOME/robo-warrior/setupfiles/xvfb/xvfb-entrypoint.sh start
source $OKTA_HOME/$REPO/scripts/setup.sh

echo "Selenium tests for this repo are now run through Travis"

exit 0;
