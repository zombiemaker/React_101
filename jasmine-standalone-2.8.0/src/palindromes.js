var palindromes = function(s) {
  var myStr = s.toLowerCase().match(/\w+/g).join('');
  return myStr == myStr.split('').reverse().join('') ? true : false;
}

module.exports = palindromes