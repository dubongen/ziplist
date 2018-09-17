const test = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function ziplist (list, list2){
  const total = [];
  for (let i = 0; i < list.length; i++){
    total.push(list[i], list2[i]);
  }

  return total;

}

console.log(ziplist(test, test2));

function ziplistSimpleWay(list, list2){
  const zip = _.zip(list, list2);
  return _.flatten(zip);
}

console.log(ziplistSimpleWay(test,test2));