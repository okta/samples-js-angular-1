var path = require("path");

/**
 * POST /oauth2/v1/token?grant_type=authorization_code&code=wWChZ9HfmJI_E1hYhFrX&redirect_uri=http://localhost:3000/authorization-code/callback
 *
 * authorization: Basic: NVZObTF4WjZ0bnI4YURlR3JIV2Y6bm9SR08wZGJXR044cWFWb05sLTBQakVRQXRyc0IxOHU0cGJtOTZ5Mg==
 * content-type: application/x-www-form-urlencoded
 * host: rain.okta1.com:1802
 * content-length: 0
 * connection: close
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept-language: en-US
 * cookie: 
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqNpJUIp62QJ21ssooeHf6YA");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9994");
  res.setHeader("x-rate-limit-reset", "1478261486");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=D98208AB0FECDD94678CF246F0CD848A; Path=/"]);
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:27 GMT");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SWpZME5rMXpRVVpFVWxnMWNWSlBNVXB6VFZFd2FXZFpPVFZsYm1SbWRYazFaMVpMVmpaM1lXcGtlRzhpZlEuZXlKMlpYSWlPakVzSW1wMGFTSTZJa0ZVTGpOcU5rVXdRVlJ4U2tOYVJXZzBRWGhxTlVwRFdtWldNMVZHY0d4WFNqSlFkakpWV0VSNlgyeEViMnNpTENKcGMzTWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaTl2WVhWMGFESXZiM0p6YTNOc1UwUjVWakV3V1hCNFN6RXdaek1pTENKaGRXUWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaUlzSW5OMVlpSTZJbWRsYjNKblpVQmhZMjFsTG1OdmJTSXNJbWxoZENJNk1UUTNPREkyTVRReU9Dd2laWGh3SWpveE5EYzRNalkxTURJNExDSmphV1FpT2lJMVZrNXRNWGhhTm5SdWNqaGhSR1ZIY2toWFppSXNJblZwWkNJNklqQXdkV3Q2TkhsYVZXZHBSekJNU1c5U01HY3pJaXdpYzJOd0lqcGJJbTl3Wlc1cFpDSXNJbVZ0WVdsc0lsMTkuZTFfaW51ZktCV2xvVmc2ZlpmdkdhWU8yQXRXRFMwb2F1LXpJZzludUJqdC00TDlLcDduNDItbDNfcjFBSlE1bWQtZlFDY0VrTzQ3eUUxQm9OSkdLYmo1UXJ6eGM1cGJoSDZ3MGNGd1kySEJPTm96MFZ3c09fQXB5M0dCQzUteGhSSmVqUXJocjNaWkZleWdOcC1QZzV2M1hqd1N2eWhOWi1YeEVZOXkwT0FZNi0weWdaQ05NLWl1Tzl4R29FbzBBd3ZOWk1nb3BuZnBUSWt4NndPUU9taVNEdFZjMVh2NnpxLVg2bDFpYkd4QU5LZWpRVmUtWVY2MzZlVHNyUURnM0hGM2R4ekJHajNzVkRWN1V1T2M2ZXN0OGJtSU1nbHdJdWFLOGtZamc4czl4YnRxOVh2bDZ6VTVwVGRQMllQRU0xOUtfbkRvempDMmV6UDJVSjBqWjFRIiwidG9rZW5fdHlwZSI6IkJlYXJlciIsImV4cGlyZXNfaW4iOjM2MDAsInNjb3BlIjoib3BlbmlkIGVtYWlsIiwiaWRfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SW1GV2JuQnZNMFZMZUZFMVRFZzRYMVZXUmpCNFQzTkdTR0phVWxsNk0zTlVhRVF4WjBOUlVrTnNSazBpZlEuZXlKemRXSWlPaUl3TUhWcmVqUjVXbFZuYVVjd1RFbHZVakJuTXlJc0ltVnRZV2xzSWpvaVoyVnZjbWRsUUdGamJXVXVZMjl0SWl3aWRtVnlJam94TENKcGMzTWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaUlzSW1GMVpDSTZJalZXVG0weGVGbzJkRzV5T0dGRVpVZHlTRmRtSWl3aWFXRjBJam94TkRjNE1qWXhOREk0TENKbGVIQWlPakUwTnpneU5qVXdNamdzSW1wMGFTSTZJa2xFTGtSd2QweFlZVzFhVEd4TVFuSm9hWEpvTTFWZk5VaGxMVVEzV2pBMlIxWjRTVVV0YUdOcVp6VkhXbXNpTENKaGJYSWlPbHNpY0hka0lsMHNJbWxrY0NJNklqQXdiMnR2YzJGV1NsQlpTbXRUZDFack1HY3pJaXdpYm05dVkyVWlPaUpPVDA1RFJTSXNJbUYxZEdoZmRHbHRaU0k2TVRRM09ESTJNVFF5Tnl3aVlYUmZhR0Z6YUNJNkltRXhXV04yTFc1SU5EUnRhWHBFVUVKQlZUTkxiMmNpZlEuUEh4OFZFZHkybmc1aG1jYS01Z09Md2RNNVVxNmxSb1AxbDdNZ1hEX2JDNDdTVmNBVVUxVm83bWhHekU0Z1Z4Y2NhZWotUGNtZTVZWkV6X1N0YUx6b3ZQdmxXaEpwQVJIS0szSURwOGFLMDI5bW41YTBGQW16d2EzX3ZZc2dTT2NkTEN4UnVqR1NwU1JRSHltd3BUeFlNaWxlOFV6cVBVc1V3M24ySmZkbmFmby03XzQtalFqdVl3dENmRzB6UXlvLW1kMDZqRHl5YmZHMTdnemowM1FLd3pjemI3TFVGUEdtTWFCU242ZG0wNDd2YjN5WFhrQjU3UFRxZkt3V1JZQ2ljcjlvQ1ZSZDRwV1pRT3JJcTB3SXQwckJxbXMzckxBWTlZUjZhVXB4RDlTUjdab216bFBKS2VaZWs2U3JQMnVWUGZwbm9hM3o5WkRlb2djSU1uNGVBIn0=", "base64"));
  res.end();

  return __filename;
};
