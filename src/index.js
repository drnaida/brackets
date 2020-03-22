module.exports = function check(str, bracketsConfig) {
  //Make from bracketsConfig array of brackets
  let bracketsArray = bracketsConfig.map(item => item.join(''));
  //Main part
  for (let i = 0; i < bracketsArray.length; i++) {
    if (str.includes(bracketsArray[i])) {
      str = str.replace(bracketsArray[i], '');
      i = -1;
    }
  }
  //Return true/false
  if (str) {
    return false;
  } else {
    return true;
  }
}
