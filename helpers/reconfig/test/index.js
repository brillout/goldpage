const config = require('../');
const {ArrayAppend} = require('../');
const assert = require('assert');

config.newVal = {someProp: 42};
assert(config.newVal.someProp===42);

config.aList = ArrayAppend([123, 234]);
config.aList = ArrayAppend([432, 321]);
console.log(config.aList);
assert(config.aList.length===4);
assert(config.aList[0]=123);
assert(config.aList[1]=234);
assert(config.aList[2]=432);
assert(config.aList[3]=321);

const keys = Object.keys(config);
console.log(keys);
assert(keys.length===2);
assert(keys.includes('newVal'));
assert(keys.includes('aList'));
