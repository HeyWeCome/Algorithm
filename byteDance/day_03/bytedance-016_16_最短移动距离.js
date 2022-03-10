// TODO: 我是垃圾 不会做
const solution = (nodeNum, squirrelNum, rooms, squirrelPosition) => {
  squirrelPosition.forEach(element => {
    rooms[element-1]--;
  });

  const sum = rooms.reduce( (acr, cur) => {
    return acr+cur;
  })

  
}

let nodeNum = 5, squirrelNum = 4;
let rooms = [0, 0, 4, 1, 1];
let squirrelPosition = [5, 4, 2, 2];

solution(nodeNum, squirrelNum, rooms, squirrelPosition);