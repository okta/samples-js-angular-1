var path = require("path");

/**
 * GET /assets/js/mvc/vendor/lib/jquery-wrapper.js
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: * / *
 * accept-encoding: gzip, deflate, sdch, br
 * accept-language: en-US
 * cookie: DT=DI0jLnSH-63R9Gd7XKjjwHZ3Q; t=default; JSESSIONID=2A326E2FD56CA3F024F7D81D1674DE6C
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("accept-ranges", "bytes");
  res.setHeader("etag", "W/\"670-1477769062000\"");
  res.setHeader("last-modified", "Sat, 29 Oct 2016 19:24:22 GMT");
  res.setHeader("content-type", "text/javascript");
  res.setHeader("content-length", "670");
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:26 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("ZGVmaW5lKFsnanF1ZXJ5JywgJ3ZlbmRvci9saWIvanNvbjInXSwgZnVuY3Rpb24gKCQpIHsKICAkKGZ1bmN0aW9uICgpIHsKICAgICQuYWpheFNldHVwKHsKICAgICAgaGVhZGVyczogewogICAgICAgICdYLU9rdGEtWHNyZlRva2VuJzogJCgnI194c3JmVG9rZW4nKS50ZXh0KCkKICAgICAgfSwKICAgICAgY29udmVydGVycyA6IHsKICAgICAgICAndGV4dCBzZWN1cmVKU09OJyA6IGZ1bmN0aW9uIChzdHIpIHsKICAgICAgICAgIGlmIChzdHIuc3Vic3RyaW5nKDAsIDExKSA9PT0gJ3doaWxlKDEpe307JykgewogICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDExKTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7CiAgICAgICAgfQogICAgICB9CiAgICB9KTsKICB9KTsKICAvLyBTZWxlbml1bSBIb29rCiAgLy8gV2lkZ2V0IHN1Y2ggYXMgYXV0b2NvbXBsZXRlIGFuZCBhdXRvc3VnZ2VzdCBuZWVkcyB0byBiZSB0cmlnZ2VyZWQgZnJvbSB0aGUgcnVubmluZyB2ZXJzaW9uIG9mIGpRdWVyeS4KICAvLyBXZSBoYXZlIDIgdmVyc2lvbnMgb2YgalF1ZXJ5IHJ1bm5pbmcgaW4gcGFyYWxsZWwgYW5kIHRoZXkgZG9uJ3Qgc2hhcmUgdGhlIHNhbWUgZXZlbnRzIGJ1cwogIHdpbmRvdy5qUXVlcnlDb3VyYWdlID0gJDsKICByZXR1cm4gJDsKfSk7Cg==", "base64"));
  res.end();

  return __filename;
};
