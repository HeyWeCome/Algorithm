const readline = require('readline');
const rl = readline.createInterface({
　　input: process.stdin,
　　output: process.stdout
});

//单行输入
rl.on('line',function(data){
　　var result= data.split(' '); //获取第一行的内容，存为数组
　　console.log(result);
})