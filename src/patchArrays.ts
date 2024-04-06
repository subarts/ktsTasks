// @ts-nocheck

const patchArrays = (...arr): void => {
  Array.prototype.count = function () {
    return this.length;
  };
  Array.prototype.insert = function (index, elem) {
    if (typeof index !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    } else if (index > this.length) {
      this.push(elem);
      return this;
    } else if (index <= 0) {
      this.unshift(elem);
      return this;
    }
    this.splice(index, 0, elem);
    return this;
  };

  Array.prototype.remove = function (elem) {
    if (this.indexOf(elem) !== -1) {
      this.splice(this.indexOf(elem), 1);
      return this;
    }

    return this;
  };
};

export default patchArrays;
