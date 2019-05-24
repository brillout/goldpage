#!/usr/bin/env node

const {argv} = process;
console.log(argv);
if( true ) {
  require('./dev');
} else {
  require('./build');
}
