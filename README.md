Angular 1 Samples
======

## Table of Contents

  - [Introduction](#introduction)
  - [Using the built-in Express server](#using-the-built-in-express-server)
  - [Using your own Okta org](#using-your-own-okta-org)
  - [Support](#support)
  - [License](#license)

## Introduction

This repository contains the Angular 1 front-end code that can be used along with back-end server samples.

> Note: This Angular sample application is currently only compatible with our [Express Sample Application](https://github.com/okta/samples-nodejs-express-4).  If you are using a different sample for the back-end or resource server, please check out the [1.10.0 version of this repository](https://github.com/okta/samples-js-angular-1/tree/1.10).
>
> Please continue to visit https://developer.okta.com to learn about new documentation and sample applications.

## Using the built-in Express server

To run this sample:

1. Clone this repository and navigate to the new directory.

    ```bash
    $ git clone git@github.com:okta/samples-js-angular-1.git && cd samples-js-angular-1
    ```

2. Install the required dependencies.

    ```bash
    [samples-js-angular-1]$ npm install
    ```

3. Run the mock Okta server. If you're interested in testing this sample against your own Okta org, follow the steps in the [Express Quick Start](https://github.com/okta/samples-nodejs-express-4#quick-start).

    ```bash
    # Starts the mock-okta server at http://127.0.0.1:7777
    [samples-js-angular-1]$ npm run mock-okta
    ```

4. In a different terminal window, run the Express server.

    ```bash
    # Starts the sample back-end on http://localhost:8080
    [samples-js-angular-1]$ npm start
    ```

5. You're all set! Open a browser window to [http://localhost:8080](http://localhost:8080).
> Note:
Use chrome browser if you're running the mock-okta server, to test the sample.

## Using your own Okta org
You can create your own Okta org by signing up for a [free Developer Account](https://developer.okta.com/signup/)

If you'd like to test this sample against your own Okta org, navigate to the Okta Developer Dashboard and follow these steps:

1. Create a new **Web** application by clicking **Add Application** and selecting **Web** from the *Applications* page.
2. After accepting the default configuration, click **Done** to redirect back to the *General Settings* of your application.
3. Copy the **Client ID** and **Client Secret**, as it will be needed for the client configuration.
4. Finally, navigate to `https://{yourOktaDomain}.com/api/v1/authorizationServers/default` to see if the [Default Authorization Server](https://developer.okta.com/docs/api/resources/oauth2.html#using-the-default-authorization-server) is setup. If not, [let us know](mailto:developers@okta.com).
Then, replace the *oidc* settings in `.samples.config.json` to point to your new app:
```javascript
// .samples.config.json
{
  "oidc": {
    "oktaUrl": "https://{{yourOktaDomain}}.com",
    "issuer": "https://{{yourOktaDomain}}.com/oauth2/default",
    "clientId": "{{yourClientId}}",
    "clientSecret": "{{yourClientSecret}}",
    "redirectUri": "http://localhost:8080/authorization-code/callback"
  }
}
```

Stop the mock-okta server and Express server if you're running it.

Open a new terminal window, and run the Express server.

   ```bash
   # Starts the sample back-end on http://localhost:8080
   [samples-js-angular-1]$ npm start
   ```

You're all set! Open a browser window to [http://localhost:8080](http://localhost:8080).


## Support

Have a question or see a bug? Email developers@okta.com. For feature requests, feel free to open an issue on this repo. If you find a security vulnerability, please follow our [Vulnerability Reporting Process](https://www.okta.com/vulnerability-reporting-policy/).

## License

Copyright 2017 Okta, Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
