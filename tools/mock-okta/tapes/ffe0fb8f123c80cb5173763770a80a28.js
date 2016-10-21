var path = require("path");

/**
 * POST /api/v1/authn
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * content-length: 120
 * accept: application/json
 * origin: http://localhost:3000
 * x-okta-xsrftoken: 
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * content-type: application/json
 * accept-encoding: gzip, deflate, br
 * accept-language: en-US
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqEsAAEVRBQsWsd_G8nCOAWA");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1197");
  res.setHeader("x-rate-limit-reset", "1478261487");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=00573D60571BB103058E57DA6BE059C8; Path=/","DT=DI0TyS_MAKOQ56nlory83JtnA; Expires=Sun, 04-Nov-2018 12:10:30 GMT; Path=/"]);
  res.setHeader("access-control-allow-origin", "http://localhost:3000");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:29 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJleHBpcmVzQXQiOiIyMDE2LTExLTA0VDE0OjEwOjMwLjAwMFoiLCJzdGF0dXMiOiJTVUNDRVNTIiwic2Vzc2lvblRva2VuIjoiMjAxMTExN2RuaENWS2F4Ul9xQmJNT3pPa19Dc1BLc3d1TGF3SDdyQjE3UXNoQlhLMGVHd0RFcSIsIl9lbWJlZGRlZCI6eyJ1c2VyIjp7ImlkIjoiMDB1a3o2RTA2dnRyR0RWbjkwZzMiLCJwYXNzd29yZENoYW5nZWQiOiIyMDE2LTEwLTMwVDA0OjE4OjM0LjAwMFoiLCJwcm9maWxlIjp7ImxvZ2luIjoiam9obkBhY21lLmNvbSIsImZpcnN0TmFtZSI6IkpvaG4iLCJsYXN0TmFtZSI6IkFkYW1zIiwibG9jYWxlIjoiZW5fVVMiLCJ0aW1lWm9uZSI6IkFtZXJpY2EvTG9zX0FuZ2VsZXMifX19fQ==", "base64"));
  res.end();

  return __filename;
};
