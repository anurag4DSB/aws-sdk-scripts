const AWS = require('aws-sdk');
const chalk = require('chalk');
const util = require('util');
const { argv } = require('yargs');

async function listUsers (client, params = {}) {
    try {
        list = await client.listUsers(params).promise();
        return list;
    } catch (err) {
        console.log(chalk.red.inverse.bold(err), {
            method: 'iam/listUsers()',
            err,
        });
    }
    return;
}

module.exports = {
    listUsers,
}

{
    "Credentials": {
        "AccessKeyId": "NYD15BB7MF5NLXPCH2GL",
        "SecretAccessKey": "N5tBs6c3H0YR=r096xOHOzqVkwIlRX5hD8qtOcho",
        "SessionToken": "d9ce1f89a316b62cb2cc1211522e338e6058b7ba782b1f2aab9593b4499d7401d5fdfe78ebec782aeda03d1d915eb808d54689af94d950013d1a0b0295b25329",
        "Expiration": "2020-11-19T16:13:57+00:00"
    },
    "AssumedRoleUser": {
        "AssumedRoleId": "943310370345:anurag",
        "Arn": "arn:aws:iam::943310370345:role/roleForB"
    },
    "Provider": "www.scality.com"
}