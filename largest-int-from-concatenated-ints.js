module.exports = function (xs) {
  xs.sort((a,b) => {
    const str1 =a.toString() + b.toString();
    const str2 = b.toString() + a.toString();
    return str2.localeCompare(str1)
  });
  return parseInt(xs.join(''));
}