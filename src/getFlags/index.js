/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
 

 let newArr = [];
 
  for ( let item of arr) {
      newArr.push(...item.flags);
  }
  
  return newArr;


};


const result = getFlags([{flags: [1, 2, 3]}, {flags: [4, 5, 6]}, {flags: [7, 8, 9]}]);
console.log(result);

export default getFlags;
