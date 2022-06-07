var array1 = "sean".split('');
// reverses in place and returns the reversed array
var array2 = array1.reverse();
var array3 = "brown".split('');
// appends the array as a single element
array2.push(array3);
// returns the last element (same as `at` in this case)
console.log("First array is " + array1.slice(-1));
console.log("Second array is " + array2.slice(-1));