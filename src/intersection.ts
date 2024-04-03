const intersection = (...args) => {
  if (args.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  const arr1 = args[0];
  const arr2 = args[1];
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error('INVALID_ARGUMENT');
  }

  if (arr1.length == 0 || arr2.length == 0) {
    return [];
  }

  if (
    !arr1.every((a) => typeof a === 'number') ||
    !arr2.every((a) => typeof a === 'number')
  ) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }
  let arr3: any[] = [];
  for (let i = 0; i < arr1.length; i++) {
    {
      if (arr2.includes(arr1[i])) {
        arr3.push(arr1[i]);
      }
    }
  }
  let arr4 = new Set(arr3);

  return Array.from(arr4);
};

export default intersection;
