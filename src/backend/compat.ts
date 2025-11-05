import util from 'util';

// Node 24 removed some util helpers (like util.isDate). Some old
// dependencies (nedb) still call util.isDate and will crash. Provide
// a small compatible shim if it's missing.
const u = util as unknown as any;

if (typeof u.isDate !== 'function') {
  u.isDate = function (v: unknown): boolean {
    return Object.prototype.toString.call(v) === '[object Date]';
  };
}

if (typeof u.isRegExp !== 'function') {
  u.isRegExp = function (v: unknown): boolean {
    return Object.prototype.toString.call(v) === '[object RegExp]';
  };
}

if (typeof u.isError !== 'function') {
  u.isError = function (v: unknown): boolean {
    return v instanceof Error;
  };
}

if (typeof u.isArray !== 'function') {
  u.isArray = Array.isArray;
}
