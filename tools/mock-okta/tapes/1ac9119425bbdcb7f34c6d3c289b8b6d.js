var path = require("path");

/**
 * POST /api/v1/authn
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * content-length: 121
 * origin: http://127.0.0.1:7777
 * x-okta-xsrftoken: 
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * content-type: application/json
 * accept: application/json
 * x-requested-with: XMLHttpRequest
 * accept-encoding: gzip, deflate, br
 * accept-language: en-US
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqn_MnKO7rSQSzpr0fEjfAYw");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1199");
  res.setHeader("x-rate-limit-reset", "1478261487");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=BDAD520BF3266B3C77B62B1A2E8B388D; Path=/","DT=DI0Q9stb1x9SQ6dWn1ugig0kg; Expires=Sun, 04-Nov-2018 12:10:27 GMT; Path=/"]);
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:27 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJleHBpcmVzQXQiOiIyMDE2LTExLTA0VDE0OjEwOjI3LjAwMFoiLCJzdGF0dXMiOiJTVUNDRVNTIiwic2Vzc2lvblRva2VuIjoiMjAxMTE1d21fRTk5aHFEX1NmUzNEV1FtNUlqXzhOUGZhVWIyS2U1YS1adkpFWVhXT1ZDSndzSSIsIl9lbWJlZGRlZCI6eyJ1c2VyIjp7ImlkIjoiMDB1a3o0eVpVZ2lHMExJb1IwZzMiLCJwYXNzd29yZENoYW5nZWQiOiIyMDE2LTEwLTMwVDA0OjE5OjE0LjAwMFoiLCJwcm9maWxlIjp7ImxvZ2luIjoiZ2VvcmdlQGFjbWUuY29tIiwiZmlyc3ROYW1lIjoiR2VvcmdlIiwibGFzdE5hbWUiOiJXYXNoaW5ndG9uIiwibG9jYWxlIjoiZW5fVVMiLCJ0aW1lWm9uZSI6IkFtZXJpY2EvTG9zX0FuZ2VsZXMifX19fQ==", "base64"));
  res.end();

  return __filename;
};
