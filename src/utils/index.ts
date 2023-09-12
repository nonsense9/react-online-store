export const splitArrayInPieces = (array: Filters[], n: number) => {
  const [...arr] = array;
  const res = [];
  while (arr.length) {
    res.push(arr.splice(0, n));
  }
  return res;
};


export const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}
