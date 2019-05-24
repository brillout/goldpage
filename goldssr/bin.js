#!/usr/bin/env node

const {argv} = process;
console.log(argv);
if( false ) {
  require('./dev');
} else {
  require('./build');
}
