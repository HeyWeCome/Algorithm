/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const s = "anagram";
// const t = "nagaram";
var isAnagram = function(s, t) {
  const sTable = new Array(26).fill(0);
  // const tTable = {};

  s.split('').map((item) => {
    sTable[item.charCodeAt() - 'a'.charCodeAt()]++;
  })

  t.split('').map((item) => {
    sTable[item.charCodeAt() - 'a'.charCodeAt()]--;
  })

  for(let i = 0; i < sTable.length; i++){
    if(sTable[i] !== 0){
      return false;
    }
  }

  return true;
};

/**
 * 383 赎金信
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

/**
 * 49 字母异位词分组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const record = new Map();

  strs.forEach( item => {
    let value = item.split('').sort().join('');
    if( record.has(value)) {
      record.get(value).push(item);
    } else {
      record.set(value, [].concat(item));
    }
  })

  return Array.from(record.values());
};

/**
 * leetcode 438
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const s = "abab", p = "ab";
var findAnagrams = function(s, p) {
  let right = p.length;
  let left = 0;
  const aCode = 'a'.charCodeAt();
  const result = new Array();
  const pTable = new Array(26).fill(0);

  p.split('').forEach(element => {
    pTable[element.charCodeAt() - aCode]++;
  });
  let compared = pTable.toString();

  while(left < s.length-right+1) {
    let sTable = new Array(26).fill(0);

    for(let i = left; i < left+right; i++) {
      sTable[s[i].charCodeAt() - aCode]++;
    }

    if(compared == sTable.toString()){
      result.push(left);
    }
    left++;
  }

  return result;
};

findAnagrams(s, p);