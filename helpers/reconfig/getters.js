const assert_usage = require('reassert/usage');

module.exports = {
    transparentGetter,
    arrayGetter,
};

// TODO-LATER - show usage error when trying to access a missing config
//  - tell the user what is the plugin that defines the getter

function transparentGetter(prop) {
    return {
        prop,
        getter: configParts => {
            return findLast(configParts, prop);
        },
    };
}

function findLast(configParts, prop) {
    for(let i=configParts.length-1; i>=0; i--) {
        const configPart = configParts[i];
        if( prop in configPart ) {
            return configPart[prop];
        }
    }
}

function arrayGetter(prop) {
    return {
        prop,
        getter: configParts => {
            const array = [];
            configParts.forEach(configPart => {
                if(prop in configPart) {
                    const conf = configPart[prop];
                    assert_usage(
                      conf.length>=0 && !(conf instanceof Function),
                      {conf, prop},
                      configPart.$name,
                    );
                    array.push(...configPart[prop]);
                }
            });
            return array;
        },
    };
}
