{ key: 'accountArn:arn:aws:iam::917013789763:/anurag/',
  value: '917013789763' }
{ key:
   'accountCanonicalId:71ffa087831d548a8ec467523436074161f8a9c93e3fbca9a9ea56cfaf8030ae',
  value: '917013789763' }
{ key: 'accountEmailAddress:anurag@test.com',
  value: '917013789763' }
{ key: 'accountId:917013789763',
  value:
   '{"arn":"arn:aws:iam::917013789763:/anurag/","canonicalId":"71ffa087831d548a8ec467523436074161f8a9c93e3fbca9a9ea56cfaf8030ae","id":"917013789763","emailAddress":"anurag@test.com","name":"anurag","createDate":"2020-12-23T17:24:06Z","aliasList":[],"oidcpList":[]}' }
{ key: 'accountName:anurag', value: '917013789763' }


// createaccessKey for account:
// ❯ node leveldump.js
{ key: 'accountArn:arn:aws:iam::917013789763:/anurag/',
  value: '917013789763' }
{ key:
   'accountCanonicalId:71ffa087831d548a8ec467523436074161f8a9c93e3fbca9a9ea56cfaf8030ae',
  value: '917013789763' }
{ key: 'accountEmailAddress:anurag@test.com',
  value: '917013789763' }
{ key: 'accountId:917013789763',
  value:
   '{"arn":"arn:aws:iam::917013789763:/anurag/","canonicalId":"71ffa087831d548a8ec467523436074161f8a9c93e3fbca9a9ea56cfaf8030ae","id":"917013789763","emailAddress":"anurag@test.com","name":"anurag","createDate":"2020-12-23T17:24:06Z","aliasList":[],"oidcpList":[]}' }
{ key: 'accountName:anurag', value: '917013789763' }
{ key: 'holdsSecretKey:917013789763:O7MXOTA94SO0EEAWX6MZ',
  value: '' }
{ key: 'secretKeyId:O7MXOTA94SO0EEAWX6MZ',
  value:
   '{"id":"O7MXOTA94SO0EEAWX6MZ","value":"WDECO5zt3L2gzPzd33lsegoUNBmcSdysDFY+dwcy1O2YgmCeKg7xpg==","tag":"6BCUEG7D9ALmRAhvm6Iohg==","createDate":"2020-12-23T17:26:49Z","lastUsedDate":"2020-12-23T17:26:49Z","status":"Active","userId":"917013789763"}' }


// after creating a user

❯ node leveldump.js


{ key:
   'accountContainsUser:917013789763:BRF275OJD311CO56JVN6L1R16TDW0ZPD',
  value: '' }

{ key: 'accountId:917013789763:userEmailAddress:',
  value: 'BRF275OJD311CO56JVN6L1R16TDW0ZPD' }

{ key: 'accountId:917013789763:userName:vault-user1',
  value: 'BRF275OJD311CO56JVN6L1R16TDW0ZPD' }

{ key: 'userArn:arn:aws:iam::917013789763:user/vault-user1',
  value: 'BRF275OJD311CO56JVN6L1R16TDW0ZPD' }

{ key: 'userId:BRF275OJD311CO56JVN6L1R16TDW0ZPD',
  value:
   '{"arn":"arn:aws:iam::917013789763:user/vault-user1","id":"BRF275OJD311CO56JVN6L1R16TDW0ZPD","emailAddress":"","name":"vault-user1","createDate":"2020-12-23T17:31:54Z","parentId":"917013789763"}' }





User with case sensitive username: 

{ key:
   'accountContainsUser:917013789763:112AB1OAAHW6KO4YU3P0X0XJKUU71RYL',
  value: '' }

{ key: 'accountId:917013789763:userEmailAddress:',
  value: '112AB1OAAHW6KO4YU3P0X0XJKUU71RYL' }

{ key: 'accountId:917013789763:userName:uppercaseusername',
  value: '112AB1OAAHW6KO4YU3P0X0XJKUU71RYL' }

{ key: 'userArn:arn:aws:iam::917013789763:user/UpperCaseUserName',
  value: '112AB1OAAHW6KO4YU3P0X0XJKUU71RYL' }

{ key: 'accountId:917013789763:userName:uppercaseusername',
  value: '112AB1OAAHW6KO4YU3P0X0XJKUU71RYL' }

{ key: 'userId:112AB1OAAHW6KO4YU3P0X0XJKUU71RYL',
  value:
   '{"arn":"arn:aws:iam::917013789763:user/UpperCaseUserName","id":"112AB1OAAHW6KO4YU3P0X0XJKUU71RYL","emailAddress":"","name":"UpperCaseUserName","createDate":"2020-12-23T17:34:53Z","parentId":"917013789763"}' }


