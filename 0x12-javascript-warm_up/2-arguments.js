#!/usr/bin/node
//script that prints a message depending of the number of arguments passed

const { argv } = require('process');
if (argv[2] === undefined) { console.log('No argument'); } else { console.log(argv[2]); }


/*if (process.argv.length === 2) {
  console.log('No argument');
} else if (process.argv.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}*/
