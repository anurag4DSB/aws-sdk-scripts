{ header:
   { alg: 'RS256',
     typ: 'JWT',
     kid: 'YQiEriINpb46uWjCDePHuC3DBgdfP35rUi9RDkY06d8' },
  payload:
   { exp: 1598896721,
     iat: 1598896421,
     jti: '899b98df-6bd6-4e0b-a78d-c165d111c250',
     iss: 'http://localhost:8080/auth/realms/API-KEYCLOAK',
     aud: 'account',
     sub: 'eb49d392-f3d9-4102-98c1-71417ab245d9',
     typ: 'Bearer',
     azp: 'api-STS',
     session_state: '45e88bb2-af60-44cc-8535-ce4917281f3b',
     acr: '1',
     'allowed-origins': [ 'http://localhost:8800' ],
     realm_access: { roles: [Array] },
     resource_access: { account: [Object] },
     scope: 'profile email',
     email_verified: true,
     name: 'administrator',
     preferred_username: 'administrator',
     given_name: 'administrator',
     email: 'admin@keycloak.local' },
  signature:
   'Z1O9WlZy3EifGmpGkZMdloA8om8IJo7Pps9cLmsN-NoZ2NWDJ8s49G1cxZ8yo5W7AMaXQOI_nPB5gTQe7nnc9_iZwRkTbUYYx95mw-7lUEi1mpQndBgdFSi_Uo5p_4AE7IM04ZOWXEdB8ZlhFfqDUZBSCu_6me78RyGoWYT1c5CqvaxXbw2rBgwTHeynamZxRWKAcxZ0unSDvYWEF3LQwWcfUrlyW73QyWNorq0oKszCyFwC8a7tZkI9hNzv3cHK6jZTRcq3pHFsteFTUQ-CtVmWe-jAjjIIiN_oY-g9okSYvocJMGccpvetp6wOaZf8bX3nu6Trt1gcvtCpqt5TQQ' 
}