/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = [];
  const path = [];
  const len = s.length;

  // 判断一个字符串是否为回文串
  const judge = (s,l,r) => {
    for (let i = l, j = r; i < j; i++, j--) {
      if(s[i] !== s[j]) return false;
    }
    return true;
  }

  // 切割字符串
  const travel = (currentIndex) => {
    // 终止条件
    if (currentIndex >= len){
      result.push(Array.from(path));
      return;
    }

    // 切割
    for (let i = currentIndex; i < len; i++) {
      if (!judge(s,currentIndex,i)) continue;
      path.push(s.substring(currentIndex, i+1));
      travel(i+1);
      path.pop();
    }
  }

  travel(0);
  return result;
};

s = "aab";
console.log(partition(s));