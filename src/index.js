/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length;
  let count = 0;
  let n,m,k = 0;
for(let a = 0; a < length; a++){
   n = preferences[a]-1;
   if (n == a) continue;
   m = preferences[n]-1;
   if (n == m) continue;
   k = preferences[m]-1;
   if (k == m) continue;


   if (k == a) {
      count++
   }
}
return count/3;
}
