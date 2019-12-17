'use strict';

const defaultOptions = {
  "shallow":       false,
  "react":         false,
  "es6": {
    "Map":         false,
    "Set":         false,
    "ArrayBuffer": false
  }
}

const getOptions = (userOptions) => {
  if (!userOptions || !(userOptions instanceof Object)) return defaultOptions

  if (typeof userOptions.es6 === 'boolean') {
    let val = userOptions.es6
    userOptions.es6 = {
      "Map":         val,
      "Set":         val,
      "ArrayBuffer": val
    }
  }

  return {...defaultOptions, ...userOptions}
}

const isBranchEqual = (a, b, options) => {
  return (options.shallow)
    ? (a === b)
    : isRootEqual(a, b, options)
}

const isRootEqual = (a, b, options) => {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!isBranchEqual(a[i], b[i], options)) return false;
      return true;
    }

    if (options.es6["Map"]) {
      if ((a instanceof Map) && (b instanceof Map)) {
        if (a.size !== b.size) return false;
        for (i of a.entries())
          if (!b.has(i[0])) return false;
        for (i of a.entries())
          if (!isBranchEqual(i[1], b.get(i[0]), options)) return false;
        return true;
      }
    }

    if (options.es6["Set"]) {
      if ((a instanceof Set) && (b instanceof Set)) {
        if (a.size !== b.size) return false;
        for (i of a.entries())
          if (!b.has(i[0])) return false;
        return true;
      }
    }

    if (options.es6["ArrayBuffer"]) {
      if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (a[i] !== b[i]) return false;
        return true;
      }
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (options.react && (key === '_owner') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!isBranchEqual(a[key], b[key], options)) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
}

module.exports = function equal(a, b, userOptions) {
  if (a === b) return true;

  const options = getOptions(userOptions)

  return isRootEqual(a, b, options)
};