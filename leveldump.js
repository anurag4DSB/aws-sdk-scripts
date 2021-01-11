const leveldb = require('level');
const dump = require('./dump');

db = leveldb('../scality/vault/vault-db')

// dump(db);         // dump keys and values (same as dump.entries)
dump.keys(db);    // dump keys only
// dump.values(db);  // dump values only
 
// dump.allKeys(db);     // dump keys including all sublevels
// dump.allValues(db);   // dump values including all sublevels
// dump.allEntries(db);  // dump entries including all sublevels
