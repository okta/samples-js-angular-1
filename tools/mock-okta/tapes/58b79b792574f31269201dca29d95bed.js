var path = require("path");

/**
 * GET /oauth2/v1/authorize?client_id=5VNm1xZ6tnr8aDeGrHWf&redirect_uri=http://localhost:3000/authorization-code/callback&response_type=code&response_mode=query&state=STATE&nonce=NONCE&sessionToken=2011117dnhCVKaxR_qBbMOzOk_CsPKswuLawH7rB17QshBXK0eGwDEq&scope=openid email profile
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
  res.setHeader("x-okta-request-id", "reqxDYlQQ1TRsWFGu85HsUJuQ");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9991");
  res.setHeader("x-rate-limit-reset", "1478261486");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["JSESSIONID=1BB0297BA7710BF9FFE8006C8E52E45B; Path=/","t=default; Path=/","DT=DI0PGMgQBnSTpO1O9uNghBXqQ; Expires=Sun, 04-Nov-2018 12:10:30 GMT; Path=/","sid=1027DLrDUNkQMSwylB6WIJlgA; Path=/","proximity_b34d5aef8ac96319ddbbb2c86dbb3ace=\"HIleHJD+EyvtdIoi07KUJDuAaOPTxgitJS5V4EQB6QkBMQOmZnQwMNuAaOSEI3qa1PPFS96OlPdqm45/hUrj8DUD+FlOMZLq5feU38qvsGgHmdFjAsDNRBg50eWw/bBQ+aF1j8Mkjv6BCOll286+giI1KFsdx+P0pAs27IXT9x83glA0nxR5tG3HzcMOXDc4\"; Version=1; Max-Age=2147483647; Expires=Wed, 22-Nov-2084 15:24:37 GMT; Path=/","JSESSIONID=1BB0297BA7710BF9FFE8006C8E52E45B; Path=/"]);
  res.setHeader("x-okta-backend", "K1104");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("location", "http://localhost:3000/authorization-code/callback?code=EMILkBhwfgGZtklJ75fv&state=STATE");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:29 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
