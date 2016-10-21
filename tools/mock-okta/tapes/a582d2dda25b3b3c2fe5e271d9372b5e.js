var path = require("path");

/**
 * DELETE /api/v1/sessions/me
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * accept: application/json
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * origin: http://localhost:3000
 * content-type: application/json
 * accept-encoding: gzip, deflate, sdch, br
 * accept-language: en-US
 * cookie: DT=DI0Q9stb1x9SQ6dWn1ugig0kg; proximity_8f8ad6152faec0ef482c28a7e8352021="BHRiJkYDZvLDsA64Es6Cf+gQZiHO3zSInW7h2dJk1PjF9BLVyNjPKbgSCx45cYg0k5acSCho1EArfam/rPLXQpMPkzEpHnSZ1S3pZBWaOugcc+VEcR+JwXXvs4g7KZLiFrZkFqqx3yTUM32zoEaY3JoArdDZ/tPJphmfF0t/oxn9CrdunI3s2smfPoFQVKPQ"; t=default; sid=1026ucKJTqgQS-TovUMWP_Oug; JSESSIONID=BDAD520BF3266B3C77B62B1A2E8B388D
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "req0fPIX0vCT3G-EHeJnQnvQg");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1198");
  res.setHeader("x-rate-limit-reset", "1478261487");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("access-control-allow-origin", "http://localhost:3000");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-okta-backend", "K1104");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("set-cookie", ["JSESSIONID=BDAD520BF3266B3C77B62B1A2E8B388D; Path=/"]);
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:27 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
