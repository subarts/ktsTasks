const removeAnagrams = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('INVALID_ARGUMENT');
  }
  if (!arr.every((a) => typeof a === 'string')) {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }
  let arr3: number[] = [];
  if (arr.length == 0) {
    return arr3;
  }
  let arr2 = arr.map((a) => a.split('').sort().join(''));

  for (let i = 0; i < arr.length; i++) {
    if (arr2.lastIndexOf(arr2[i]) === arr2.indexOf(arr2[i])) {
      arr3.push(arr[i]);
    }
  }

  return arr3;
};

export default removeAnagrams;
/* × Три слова, есть анаграммы (5 ms)
× Есть только анаграммы (1 ms)
× Массив c числами (1 ms)
× Только анаграммы
× Нет анаграммы, порядок слов остался тем же (1 ms)
× Несколько анаграмм (1 ms)
× Большой массив (1 ms)
 */
