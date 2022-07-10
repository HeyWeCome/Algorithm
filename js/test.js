const midNum = function(sequence){
  let len = sequence.length;

  let sum = 0;
  const travel = (sequence) => {
    let arr = sequence.sort((a,b)=>a-b);
    let len = arr.length;
    if (len === 0) return 0;
    if (len === 1) return sequence[0];
    
    if(len%2 === 0) return (sequence[len/2]+sequence[len/2-1])/2;
    else return sequence[parseInt(len/2)];
  }

  let left = 0;
  let right = 1;

  while(right - left <= len) {
    let windowLen = right-left;
    for(let i = 0; i <= len-windowLen; i++){
      sum += travel(sequence.slice(i,i+windowLen));
    }
    right+=2;
  }
  return sum;
}

// const sequence = [2,3,1,4];
const sequence = [2,1,4,5,7,1];
console.log(midNum(sequence));