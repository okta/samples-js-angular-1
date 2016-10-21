var path = require("path");

/**
 * GET /login/sessionCookieRedirect?checkAccountSetupComplete=true&token=201115wm_E99hqD_SfS3DWQm5Ij_8NPfaUb2Ke5a-ZvJEYXWOVCJwsI&redirectUrl=http://127.0.0.1:7777/oauth2/v1/authorize/redirect;jsessionid=2A326E2FD56CA3F024F7D81D1674DE6C?okta_key=SQRUEu8vBuDZwnuxLkDn9X_VeY87y2BL2XlM6jkRmdc
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* / *;q=0.8
 * accept-encoding: gzip, deflate, sdch, br
 * accept-language: en-US
 * cookie: JSESSIONID=BDAD520BF3266B3C77B62B1A2E8B388D; DT=DI0Q9stb1x9SQ6dWn1ugig0kg
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 302;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqJRNFVLxXQUO-XdhEwjfQTg");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9996");
  res.setHeader("x-rate-limit-reset", "1478261486");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","t=default; Path=/","sid=1026ucKJTqgQS-TovUMWP_Oug; Path=/","proximity_8f8ad6152faec0ef482c28a7e8352021=\"BHRiJkYDZvLDsA64Es6Cf+gQZiHO3zSInW7h2dJk1PjF9BLVyNjPKbgSCx45cYg0k5acSCho1EArfam/rPLXQpMPkzEpHnSZ1S3pZBWaOugcc+VEcR+JwXXvs4g7KZLiFrZkFqqx3yTUM32zoEaY3JoArdDZ/tPJphmfF0t/oxn9CrdunI3s2smfPoFQVKPQ\"; Version=1; Max-Age=2147483647; Expires=Wed, 22-Nov-2084 15:24:34 GMT; Path=/","JSESSIONID=BDAD520BF3266B3C77B62B1A2E8B388D; Path=/"]);
  res.setHeader("x-okta-backend", "K1104");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("location", "http://127.0.0.1:7777/oauth2/v1/authorize/redirect;jsessionid=2A326E2FD56CA3F024F7D81D1674DE6C?okta_key=SQRUEu8vBuDZwnuxLkDn9X_VeY87y2BL2XlM6jkRmdc");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:27 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
