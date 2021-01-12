const AWS = require('aws-sdk');
const chalk = require('chalk');
const util = require('util')
const { argv } = require('yargs');


const ACCESSKEY = argv.accesskey || 'DZMMJUPWIUK8IWXRP0HQ';
const SECRETKEY = argv.secretkey || 'iTuJdlidzrLipymvAGrLP66Yxghl4NQxLZR3cLlu';
const ENDPOINT = argv.endpoint || 'http://127.0.0.1:8000';
const REGION = argv.region || 'us-east-1'
const SIGNATUREVERSION = argv.signatureVersion || 'v4';
const SESSIONTOKEN = argv.sessionToken || null;
const BUCKETNAME = argv.bucket || "test123";

AWS.config.update({
    accessKeyId: ACCESSKEY,
    secretAccessKey: SECRETKEY,
    sessionToken: SESSIONTOKEN,
    region: "us-west-1",
    sslEnabled: false,
    endpoint:'http://127.0.0.1:8000',
    s3ForcePathStyle: true,
    apiVersions: { s3: '2006-03-01' },
    signatureVersion: 'v4',
    signatureCache: false,
    maxRetries: 0,
});

// const iamClientParams ={
//     apiVersion: '2006-03-01',
//     endpoint: ENDPOINT,
//     region: REGION,
//     accessKeyId: ACCESSKEY,
//     secretAccessKey: SECRETKEY,
//     sessionToken: SESSIONTOKEN,
//     sslEnabled: false,
//     signatureVersion: SIGNATUREVERSION,
//     maxRetries: 1,
// };
//inject
var bucketParams = {
    Bucket : argv.bucket,
  };

const listObjectParams = {
    Bucket: argv.bucket, 
};

var createObectParams = {
  Body: 'test123', 
  Bucket: argv.bucket, 
  Key: "exampleobject", 
  Tagging: "key1=value1&key2=value2"
}


function createAndListUsers() {
    const s3 = new AWS.S3({
        httpOptions: { maxRetries: 0, timeout: 0 },
    });
    s3.createBucket(bucketParams, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data.Location);
        }
        s3.listBuckets(function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
            /*
            data = {
             Location: "/examplebucket"
            }
            */
           s3.putObject(createObectParams, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log('createObject', data);           // successful response
            s3.listObjects(listObjectParams, function(err, data) {
              if (err) console.log(err, err.stack); // an error occurred
              else     console.log('listObject:', data);           // successful response
            });
          });
        });
      });
      
    
}

createAndListUsers();