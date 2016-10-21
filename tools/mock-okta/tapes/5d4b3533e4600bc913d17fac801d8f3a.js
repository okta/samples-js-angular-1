var path = require("path");

/**
 * GET /oauth2/v1/authorize?client_id=5VNm1xZ6tnr8aDeGrHWf&redirect_uri=http://localhost:3000/authorization-code/callback&response_type=code&response_mode=query&state=STATE&nonce=NONCE&scope=openid email
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* / *;q=0.8
 * accept-encoding: gzip, deflate, sdch, br
 * accept-language: en-US
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 302;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqEQ7zjVIuTfSm5XO72urUEg");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9999");
  res.setHeader("x-rate-limit-reset", "1478261486");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=2A326E2FD56CA3F024F7D81D1674DE6C; Path=/","t=default; Path=/","DT=DI0jLnSH-63R9Gd7XKjjwHZ3Q; Expires=Sun, 04-Nov-2018 12:10:26 GMT; Path=/","sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=2A326E2FD56CA3F024F7D81D1674DE6C; Path=/"]);
  res.setHeader("x-okta-backend", "K1104");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("location", "http://rain.okta1.com:1802/oauth2/v1/authorize/redirect;jsessionid=2A326E2FD56CA3F024F7D81D1674DE6C?okta_key=SQRUEu8vBuDZwnuxLkDn9X_VeY87y2BL2XlM6jkRmdc");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:26 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
