// Code your solutions in this file
const array = ['Lisa', 'Kaitlin', 'Jan'];
let num_arr = []
function writeCards(array, event) {
  for (let i = 0; i < array.length; i++) {
    num_arr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return num_arr

}
 
// function countDown(num) {
//   let i = num
//    while (i >= 0) {
//        console.log(i);
//        i -= 1
//    }
// }
function countDown( num ) {
  while ( num > 0 ) {
    console.log( num );
    num -= 1;
  }
  console.log( num );
}