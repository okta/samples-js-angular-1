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
 * cookie: t=default; DT=DI0PGMgQBnSTpO1O9uNghBXqQ; sid=1027DLrDUNkQMSwylB6WIJlgA; proximity_b34d5aef8ac96319ddbbb2c86dbb3ace="HIleHJD+EyvtdIoi07KUJDuAaOPTxgitJS5V4EQB6QkBMQOmZnQwMNuAaOSEI3qa1PPFS96OlPdqm45/hUrj8DUD+FlOMZLq5feU38qvsGgHmdFjAsDNRBg50eWw/bBQ+aF1j8Mkjv6BCOll286+giI1KFsdx+P0pAs27IXT9x83glA0nxR5tG3HzcMOXDc4"; JSESSIONID=1BB0297BA7710BF9FFE8006C8E52E45B
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqqVkBliGgToKY32jLbR5I0w");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1196");
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
  res.setHeader("set-cookie", ["JSESSIONID=1BB0297BA7710BF9FFE8006C8E52E45B; Path=/"]);
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:29 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
