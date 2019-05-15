//const reconfig = require('./reconfig');

const assert = require('reassert');

const config_object_interface = {};
const config = new Proxy(config_object_interface, {get, set});

const arrayKey = Symbol();

module.exports = config;

Object.defineProperty(module.exports, 'ArrayAppend', {value: ArrayAppend});
/*
Object.assign(
  module.exports,
  {ArrayAppend}
);
*/

function ArrayAppend(array) {
  if( this.constructor!==ArrayAppend ) {
    return new ArrayAppend(array);
  }
  this[arrayKey] = array;
//Object.defineProperty(this, arrayKey, {value: array, enumerable: false});
  return this;
}

function get(config_object_interface, prop) {
  return config_object_interface[prop];
}

function set(config_object_interface, prop, value) {
  if( value.constructor!==ArrayAppend ) {
    config_object_interface[prop] = value;
  } else {
    const array = value[arrayKey];
    assert.usage(array.constructor===Array);
    config_object_interface[prop] = config_object_interface[prop] || [];
    assert.internal(config_object_interface[prop].constructor===Array);
    config_object_interface[prop].push(...array);
  }
  return true;
}
