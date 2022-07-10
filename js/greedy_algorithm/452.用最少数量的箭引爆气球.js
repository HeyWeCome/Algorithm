/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length === 0) return 0;

  points.sort((a,b) => {
    if (b[0] !== a[0]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
  })

  let result = 1;
  for (let i = 1; i < points.length; i++) {
    if ( points[i][0] > points[i-1][1]){
      result++;
    }
    else {
      points[i][1] = Math.min(points[i-1][1], points[i][1]);
    }
  }

  return result;
};

points = [[10,16],[2,8],[1,6],[7,12]];
points = [[1,2],[3,4],[5,6],[7,8]];
points = [[1,2],[2,3],[3,4],[4,5]];
console.log(findMinArrowShots(points));