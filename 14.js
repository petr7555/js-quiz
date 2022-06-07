(function() {
    var a = b = 3;
})();


console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

/** Explanation: **/

/**
 * `b` is a global variable, like `foo`:
 */

foo = "123";
console.log(foo);

/**
 * The return value of the assignment is returned and stored in a local variable `a`, like `bar`.
 */

(function() {
    var bar = 456;
})();
console.log("bar defined? " + (typeof bar !== 'undefined'));

/**
 * Bonus: hoisting
 */
console.log("baz " + baz);
var baz = 789;

// ReferenceError: apple is not defined
// console.log(apple);

// ReferenceError: Cannot access 'apple' before initialization
// console.log(banana);
const banana = 147;
