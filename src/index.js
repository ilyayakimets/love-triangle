/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length;
  let count = 0;
  let result = 0;
for(let a = 1; a < length; a++){
   if(a=preferences[a+1]){
      count++;
   }
}
return count;
};
