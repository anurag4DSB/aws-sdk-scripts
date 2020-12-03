const AWS = require('aws-sdk');
const chalk = require('chalk');
const util = require('util')
const { argv } = require('yargs');

const create = require('./createUser');
const list = require('./listUsers');

const ACCESSKEY = argv.accesskey || 'DZMMJUPWIUK8IWXRP0HQ';
const SECRETKEY = argv.secretkey || 'iTuJdlidzrLipymvAGrLP66Yxghl4NQxLZR3cLlu';
const ENDPOINT = argv.endpoint || 'http://127.0.0.1:8600';
const REGION = argv.region || 'us-east-1'
const SIGNATUREVERSION = argv.signatureVersion || 'v4';
const SESSIONTOKEN = argv.sessionToken || null;

const iamClientParams ={
    apiVersion: { iam: '2010-05-08' },
    endpoint: ENDPOINT,
    region: REGION,
    accessKeyId: ACCESSKEY,
    secretAccessKey: SECRETKEY,
    sessionToken: SESSIONTOKEN,
    sslEnabled: false,
    signatureVersion: SIGNATUREVERSION,
    signatureCache: false,
    maxRetries: 0,
};

async function createAndListUsers(prefix, count) {
    const client = new AWS.IAM(iamClientParams);
    // let a = await create.createUser(client, prefix, count)
    console.log('!!!!!!!!!!!!: ---------------------------------------')
    // console.log('!!!!!!!!!!!!: createAndListUsers -> a', a)
    const param = {
        Marker: '0',
        MaxItems: '40',
    }
    console.log('!!!!!!!!!!!!: ---------------------------------------')
    let b = await list.listUsers(client, { Marker: '0', MaxItems: '500' });
    console.log('!!!!!!!!!!!!: ---------------------------------------')
    console.log('!!!!!!!!!!!!: createAndListUsers -> b', b)
    console.log('!!!!!!!!!!!!: ---------------------------------------')
    // console.log(chalk.yellow.inverse.bold(util.inspect(a, {showHidden: false, depth: null})));
    // console.log(chalk.green.inverse.bold(util.inspect(b, {showHidden: false, depth: null})));
    return;
}

createAndListUsers(argv.prefix, argv.count);