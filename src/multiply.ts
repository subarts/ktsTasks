const multiply = (func) => {
  return function curried(...args) {
    if (typeof args[0] !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    if (args.length >= func.length) {
      if (typeof args[1] !== 'number') {
        throw new Error('INVALID_ARGUMENT');
      }
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};

function func(a, b) {
  return a * b;
}

const multi = multiply(func);

export default multi;
