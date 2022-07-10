/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = [];

  /**
   * 
   * @param {string} soure 
   * @param {number} start 
   * @param {string} newStr 
   * @returns 
   */
  const insertStr = (soure, start, newStr) => {
    return soure.slice(0, start) + newStr + soure.slice(start);
  }

  /**
   * 判断字符串是否为合法的IP地址
   * 1. 以0开头的数字不合法
   * 2. 段落里面有非正整数字符不合法
   * 3. 大于255不合法
   * @param {string} s 
   * @param {number} start 
   * @param {number} end 
   */
  const isValid = (s, start, end) => {
    if (start > end) return false;

    if (s[start] === '0' && start !== end) return false;

    let num = 0;
    for (let i = start; i <= end; i++) {
      if (s[i] > '9' || s[i] < '0') return false;

      num = num*10 + (s[i]-'0');
      if (num > 255) return false;
    }

    return true;
  }

  /**
   * 
   * @param {string} s 字符串
   * @param {number} startIndex 搜索的起始位置 
   * @param {number} pointNum 打点的个数
   */
  const travel = (s, startIndex, pointNum) => {
    // 如果逗号数量为3，分割结束
    if (pointNum === 3) {
      // 判断第四段是否为合法的字符串，合法的话就把 S 放进结果集中
      if (isValid(s, startIndex, s.length-1)) {
        result.push(s);
      }
    }

    // 单层执行逻辑
    for (let i = startIndex; i < s.length; i++) {
      // 首先判断 [startIndex, i] 这个区间内的字符串是否符合规范
      if (isValid(s, startIndex, i)) {
        // 在 i 后面加上一个 .
        s = insertStr(s, i+1, '.');
        pointNum++;
        travel(s, i+2, pointNum);
        pointNum--;
        s = s.substring(0,i+1) + s.substring(i+2);
      }
    }
  }

  travel(s,0,0);
  return result;
};