let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

function copyProperties(obj1, obj2) {
  let count = 0;

  for (let key in obj1) {
    obj2[key] = obj1[key];
    count += 1;
  }

  return count;
}