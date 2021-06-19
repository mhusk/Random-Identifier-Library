/**
 * This will create a random identifier using a combination of letters and numbers.
 * @param {int} length - how long you want for an identifier
 */
function RandomIdentifier(length){
  var id = [];
  var alphabet = genCharArray('a','z');
  for (let i = 0; i < parseInt(length); i++) {
    if(i%2 == 0){
      id.push(alphabet[RandomNumberGenerator(0,25)])
    } else{
      id.push(RandomNumberGenerator(0,9))
    }
  } 
  return id.join('')
}




/**
 * Will create a random number number in between the min and max
 * @param {number} min - lower bound
 * @param {number} max - upper bound
 */
function RandomNumberGenerator_(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function genCharArray_(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

