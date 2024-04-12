const planEvent = (fn, num) => {
  if (typeof fn !== 'function' || typeof num !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
  return new Promise((resolve, reject) => {
    setTimeout(fn, num);
  });
};
export default planEvent;
