const AWS = require('aws-sdk');
const { argv } = require('yargs');

const sts = new AWS.STS({
    endpoint: 'http://127.0.0.1:8800',
    region: 'us-east-1',
    sslEnabled: false,
    maxRetries: 0,
    accessKeyId: 'DZMMJUPWIUK8IWXRP0HQ',
    secretAccessKey: 'iTuJdlidzrLipymvAGrLP66Yxghl4NQxLZR3cLlu',
});

var params = {
    DurationSeconds: argv.duration,  
    RoleArn: argv.roleArn, 
    RoleSessionName: argv.sessionName, 
    WebIdentityToken: argv.webIdentityToken,
};

sts.assumeRoleWithWebIdentity(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
