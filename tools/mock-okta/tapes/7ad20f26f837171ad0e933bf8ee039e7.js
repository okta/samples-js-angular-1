var path = require("path");

/**
 * POST /oauth2/v1/token?grant_type=authorization_code&code=EMILkBhwfgGZtklJ75fv&redirect_uri=http://localhost:3000/authorization-code/callback
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
  res.setHeader("x-okta-request-id", "reqbEwLPNp1RD22eNllAgNqBg");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9990");
  res.setHeader("x-rate-limit-reset", "1478261486");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=09A3F367C24A14E4287AA41EB360ED32; Path=/"]);
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Fri, 04 Nov 2016 12:10:29 GMT");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SWpZME5rMXpRVVpFVWxnMWNWSlBNVXB6VFZFd2FXZFpPVFZsYm1SbWRYazFaMVpMVmpaM1lXcGtlRzhpZlEuZXlKMlpYSWlPakVzSW1wMGFTSTZJa0ZVTGpoTk9HUjJOamxEVjIxRGVGOXdRMUowUTI1QmMxSkxRa1kwZGxkVFpVNXRkek5FYm5sU1UyUlVORTBpTENKcGMzTWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaTl2WVhWMGFESXZiM0p6YTNOc1UwUjVWakV3V1hCNFN6RXdaek1pTENKaGRXUWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaUlzSW5OMVlpSTZJbXB2YUc1QVlXTnRaUzVqYjIwaUxDSnBZWFFpT2pFME56Z3lOakUwTXpBc0ltVjRjQ0k2TVRRM09ESTJOVEF6TUN3aVkybGtJam9pTlZaT2JURjRXalowYm5JNFlVUmxSM0pJVjJZaUxDSjFhV1FpT2lJd01IVnJlalpGTURaMmRISkhSRlp1T1RCbk15SXNJbk5qY0NJNld5SnZjR1Z1YVdRaUxDSmxiV0ZwYkNJc0luQnliMlpwYkdVaVhYMC5lMmNuU0RPRjAxc2U1Q0JIb2xEa2ZYbW1ub1l3R1R6X19SNkR0TE94al9ud2E2aWZuSC1raExNS3duQmlMWkhEeXpBbFgxR1ZrWkl1cDFsb3gyd2dzbUVYN2RnMkRKam1ycklSVHJZa2YzSE1YaHNqdWlPQnhPeXE0WGpNQ0c5LW9GQU85WUp5MERGQ1dHRUg2VTE3ZnJ3TkRtb0dBa2lqUldTMHRwal9hYmVWR3F0OHVPY0Y0Rk03WlJiek5KU0VtRDNNT2tBMGt1bFhRZjhoMVlsa3MxQl9YWC1aY2xZWTRBVXlpcEE1TExiNzNMYzNScGJ2TEZPSjRSVGtmcDR3Q2cxZEVPc3htSFZzRG9lN19YMnJETFBXSFZ4dGtKM29TRjJwN0g0WWI5MDJUMzM2cUpEQWJGa0ZrTFd4NE93TDU3UDdyWGxxMUtrUktNMnhlb0Z1M1EiLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiZXhwaXJlc19pbiI6MzYwMCwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImlkX3Rva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkltRldibkJ2TTBWTGVGRTFURWc0WDFWV1JqQjRUM05HU0dKYVVsbDZNM05VYUVReFowTlJVa05zUmswaWZRLmV5SnpkV0lpT2lJd01IVnJlalpGTURaMmRISkhSRlp1T1RCbk15SXNJbTVoYldVaU9pSktiMmh1SUVGa1lXMXpJaXdpWlcxaGFXd2lPaUpxYjJodVFHRmpiV1V1WTI5dElpd2lkbVZ5SWpveExDSnBjM01pT2lKb2RIUndPaTh2Y21GcGJpNXZhM1JoTVM1amIyMDZNVGd3TWlJc0ltRjFaQ0k2SWpWV1RtMHhlRm8yZEc1eU9HRkVaVWR5U0ZkbUlpd2lhV0YwSWpveE5EYzRNall4TkRNd0xDSmxlSEFpT2pFME56Z3lOalV3TXpBc0ltcDBhU0k2SWtsRUxuQndhWGxSYUdORFUwVjZRemh6VXpKUFdGTkpVSFpNYkV4Sk1WZGtSMkZRWDJNMVVrVnBjbmhLVUVraUxDSmhiWElpT2xzaWNIZGtJbDBzSW1sa2NDSTZJakF3YjJ0dmMyRldTbEJaU210VGQxWnJNR2N6SWl3aWJtOXVZMlVpT2lKT1QwNURSU0lzSW5CeVpXWmxjbkpsWkY5MWMyVnlibUZ0WlNJNkltcHZhRzVBWVdOdFpTNWpiMjBpTENKaGRYUm9YM1JwYldVaU9qRTBOemd5TmpFME16QXNJbUYwWDJoaGMyZ2lPaUpJTFcxb1Z6TlRWMnhZVGpSRmNDMXZlbEJPTUc5QkluMC5USTFwNEI2YVRTWDZybFhDZFZ2VnhsaXNnWHpoN0pldWdYdlhnbHliN1hySlhGOVZoWWM1ZGRQSF8tY2NkWG5LRXpQZklsakIzS1pYODhuX0o3LVRfOGJsU0cybE9yZ0F1SXo5LVlLZkxhS0lRaERoV0NKUnB5SmFtRFppUG1MU0VvdjZ2LW5CVFVlN1NGMVlGTzA3M1JOengwNjdPQ09WOFFxbUhtWVAxZ3hvMXppRWI4NTltdkdObWJSU01Nalg4SmxWQXluWERYMnBQeW1vejZ6UlVULWhFc0JlUkh3WTZ4R0xDTlZGUk0yZkh4SFZudXd4VXNFSWVDZ1E1UWQtbnRqWlNKMVhwbHZTOTZORm1WNU1sZnh4VlB1Y3lUS1ZjRmtzQ29PM1RNRjJGVmZUN1dubGN0NlJGSUUzWnBfeURiY2JZemJJb1FsSnUwWm1vMU9DSEEifQ==", "base64"));
  res.end();

  return __filename;
};
