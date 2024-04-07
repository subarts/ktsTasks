const getNumberProps = (obj) => {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj == null) {
    throw new Error('INVALID_ARGUMENT');
  }
  const arr: string[] = [];
  let args = Object.keys(obj);
  for (let i = 0; i < args.length; i++) {
    if (Object.prototype.toString.call(obj[args[i]]) === '[object Object]') {
      Object.assign(obj, obj[args[i]]);
      args = args.concat(Object.keys(obj[args[i]]));
      delete obj[args[i]];
    }
    if (Number.isFinite(obj[args[i]])) {
      arr.push(args[i]);
    }
  }
  return arr.sort();
};

export default getNumberProps;
