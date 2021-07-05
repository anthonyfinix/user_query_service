var nrc = require('node-run-cmd');
nrc.run('mongod --dbpath "C:\\Program Files\\MongoDB\\Server\\4.4\\data" --replSet rs0');
nrc.run('mongodb rs.initiate()')