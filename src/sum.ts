const sum = (...args: any[]) => {
  /*   if (typeof args !== 'object') {
    throw new Error('INVALID_ARGUMENT');
  }
 */
  if (args.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  let result = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
    result += args[i];
  }
  return result;
};

export default sum;
/* function sum(...args: number[]): number {
       
  let result = 0;
  for (let i = 0; i < args.length; i++) {
      result+= args[i];
  }
  return result;
}
const numbers = [1, 3, 5, 7, 9] as const;

console.log(num); // 25 */
