// demoOS.js

const os = require('os');
console.log('Platform:', os.platform());


//const os = require('os');
console.log('CPU Architecture:', os.arch());

//const os = require('os');
console.log('Number of CPUs:', os.cpus().length);

//const os = require('os');
console.log('Total Memory:', os.totalmem());

//const os = require('os');
console.log('Free Memory:', os.freemem());

//const os = require('os');
console.log('Temporary Directory:', os.tmpdir());
