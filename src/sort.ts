const sort = (str) => {
  if (typeof str !== 'string') {
    throw new Error('INVALID_ARGUMENT');
  }
  str = str.toLowerCase();
  if (str.length < 2) {
    return str;
  }
  if (str.search(' ') == -1) {
    return str.split('').sort().join('');
  }
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split('').sort().join('');
  }
  return str.sort((a, b) => a.length - b.length).join(' ');
};

export default sort;
