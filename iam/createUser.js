const chalk = require('chalk');

const Utils = require('../Utils');

async function createUser(client, prefix = Utils.makeRandomString(10), count = 1) {
    let i = 0;
    let usersCreated = [];
    try {
        for (; i < count; i++) {
            let user = await client.createUser({
                UserName: prefix + i + Utils.makeRandomString(4),
            }).promise();
            usersCreated.push(user.User);
            let key = await client.createAccessKey({
                UserName: user.User.UserName,
            }).promise();
            console.log('!!!!!!!!!!!!: -----------------------------------')
            console.log('!!!!!!!!!!!!: createUser -> key', key)
            console.log('!!!!!!!!!!!!: -----------------------------------')
            // console.log(chalk.green.inverse.bold(user), {
            //     method: 'iam/createUser()',
            //     user,
            // });
        }
        return usersCreated;
    } catch (err) {
        console.log(chalk.red.inverse.bold(err), {
            method: 'iam/createUser()',
            err,
        });
    }
    return;
};

module.exports = {
    createUser,
}
