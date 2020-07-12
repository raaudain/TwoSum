function twoSum(num, array){
  const pairs = [];
  const table = [];

  for (let i = 0; i < array.length; i++){
    const currentNum = array[i];
    const counterpart = num - currentNum;

    if (table.indexOf(counterpart) !== -1){
      pairs.push([currentNum, counterpart]);
    }

    table.push(currentNum);
  }

  return pairs;
}


const arr = [1,6,4,5,3,3];

twoSum(7, arr)