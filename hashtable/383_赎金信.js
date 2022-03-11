/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const sTable = new Array(26).fill(0);
  // const tTable = {};

  ransomNote.split('').map((item) => {
    sTable[item.charCodeAt() - 'a'.charCodeAt()]++;
  })

  magazine.split('').map((item) => {
    if(sTable[item.charCodeAt() - 'a'.charCodeAt()] != 0){
      sTable[item.charCodeAt() - 'a'.charCodeAt()]--;
    }
  })

  for(let i = 0; i < sTable.length; i++){
    if(sTable[i] !== 0){
      return false;
    }
  }

  return true;
};


ransomNote = "aa", magazine = "ab"
console.log(canConstruct(ransomNote, magazine))