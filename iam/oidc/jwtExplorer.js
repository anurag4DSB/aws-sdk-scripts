const jwt = require('jsonwebtoken');
const http = require('http');
const { on } = require('process');

const claims =  "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJZUWlFcmlJTnBiNDZ1V2pDRGVQSHVDM0RCZ2RmUDM1clVpOVJEa1kwNmQ4In0.eyJleHAiOjE1OTg4OTY3MjEsImlhdCI6MTU5ODg5NjQyMSwianRpIjoiODk5Yjk4ZGYtNmJkNi00ZTBiLWE3OGQtYzE2NWQxMTFjMjUwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL0FQSS1LRVlDTE9BSyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJlYjQ5ZDM5Mi1mM2Q5LTQxMDItOThjMS03MTQxN2FiMjQ1ZDkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhcGktU1RTIiwic2Vzc2lvbl9zdGF0ZSI6IjQ1ZTg4YmIyLWFmNjAtNDRjYy04NTM1LWNlNDkxNzI4MWYzYiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4ODAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJhZG1pbmlzdHJhdG9yIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW5pc3RyYXRvciIsImdpdmVuX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwiZW1haWwiOiJhZG1pbkBrZXljbG9hay5sb2NhbCJ9.Z1O9WlZy3EifGmpGkZMdloA8om8IJo7Pps9cLmsN-NoZ2NWDJ8s49G1cxZ8yo5W7AMaXQOI_nPB5gTQe7nnc9_iZwRkTbUYYx95mw-7lUEi1mpQndBgdFSi_Uo5p_4AE7IM04ZOWXEdB8ZlhFfqDUZBSCu_6me78RyGoWYT1c5CqvaxXbw2rBgwTHeynamZxRWKAcxZ0unSDvYWEF3LQwWcfUrlyW73QyWNorq0oKszCyFwC8a7tZkI9hNzv3cHK6jZTRcq3pHFsteFTUQ-CtVmWe-jAjjIIiN_oY-g9okSYvocJMGccpvetp6wOaZf8bX3nu6Trt1gcvtCpqt5TQQ"

const result = jwt.decode(claims, { complete: true });
console.log(result)



const { header, payload } = result;
const { kid, alg: algorithm } = header;
const { iss } = payload;
const keycloakCert = `${iss}/protocol/openid-connect/certs`
const {hostname: host, port, pathname: path} = new URL({ toString: () => keycloakCert });
const req = http.get({ host, port, path }, response => {
    const data = [];
    response
    .on('data', chunk => data.push(chunk))
    .on('end', () => {
        const certData = (JSON.parse(Buffer.concat(data))).keys;
        const { x5c } = certData.find(key => key.kid === kid);
        const cert = Utils.tagCert(x5c[0]);
        jwt.verify(token, cert, { algorithm }, (err, result) => {
            if (err) {
                console.log('error')
                // log.error(`access token verification failed: ${error}`, {
                //     error: errors.InvalidToken,
                //     method: 'Jwt:verifyToken()',
                // });
                return console.log(error);
            }
            return console.log('tadaaaaaaaaaaaaaaa', result);
        });
    })
    .on('error', error => cb(error));
    req.end();
})

// const { host, port, jwkPath: path } = header.payload;


// onst options = { host, port, path };
//         const req = http.get(options, response => {
//             const data = [];
//             response.on('data', chunk => data.push(chunk))
//                 .on('end', () => {
//                     const certData = (JSON.parse(Buffer.concat(data))).keys;
//                     const { x5c } = certData.find(key => key.kid === kid);
//                     const cert = Utils.tagCert(x5c[0]);
//                     jwt.verify(token, cert, { algorithm },
//                         (error, result) => {
//                             if (error) {
//                                 log.error(`access token verification failed: ${error}`,
//                                     {
//                                         error: errors.InvalidToken,
//                                         method: 'Jwt:verifyToken()',
//                                     });
//                                 return cb(error);
//                             }
//                             return cb(null, result);
//                         });
//                     return cb();
//                 });
//         });
//         req.on('error', error => cb(error));
//         req.end();
//     }
