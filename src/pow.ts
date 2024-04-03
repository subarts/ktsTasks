const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
  return a ** b;
}

const pow = curry(sum);
export default pow;
/* const curry=(func)=> {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}
function sum(a, b) {
  return a ** b;
}

let pow = curry(sum);
 */
