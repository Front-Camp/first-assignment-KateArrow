/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
	let result=[];
    let i=str.length
  
  while(i){
		result.push(str[i])
		i--;
  }

	return result.join('');

};

export default turnMeBaby;


