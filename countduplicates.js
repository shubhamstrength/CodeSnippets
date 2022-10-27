/*
 * Input - Array eg. [1,2,4,3,2]
 * Output - [{1:1}, {2:2}, {4:1}, {3:1}]
*/
function countDuplicates(arr) {
  const m = new Map();
  for (let i = 0; i < arr.length; i++) {
    let num = m.get(arr[i]) || 0;
    m.set(arr[i], num + 1);
  }
  return m;
}
