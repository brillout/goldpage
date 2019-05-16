const assert = require('reassert');

const config_object_interface = {};
const config = new Proxy(config_object_interface, {get, set});

const arrayKey = Symbol();

module.exports = {config, reconfig: config, AppendArray};

function AppendArray(array) {
  if( this.constructor!==AppendArray ) {
    return new AppendArray(array);
  }
  this[arrayKey] = array;
//Object.defineProperty(this, arrayKey, {value: array, enumerable: false});
  return this;
}

function get(config_object_interface, prop) {
  return config_object_interface[prop];
}

function set(config_object_interface, prop, value) {
  if( value.constructor!==AppendArray ) {
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
