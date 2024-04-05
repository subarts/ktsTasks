// @ts-nocheck

const patchArrays = (...arr): void => {
  Array.prototype.count = function () {
    return this.length;
  };
};

export default patchArrays;
