/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array should be [5,6,7,8,9]
    Use loops and arrays to achieve the goal. 
*/

console.log("");
console.log("Task: A");
console.log("");

function customizeArray(n, m) {
    let product = [];
    for (let i = n; i < m; i++) {
        product.push(i);
    }
    return product;
}

const taskA = customizeArray(5, 10);
console.log(taskA)



/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task a.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/

console.log("");
console.log("Task: B");
console.log("");

const num1 = customizeArray(5, 11);
const num2 = customizeArray(8, 23);

function combineArrays(arr1, arr2) {
    let tmp = arr1;
    for(let i = 0; i < arr2.length; i++) {
        if (!tmp.includes(arr2[i])) {
            tmp.push(arr2[i]);
        }
    }
    let product = tmp.sort((a, b) => a - b);
    return product;
}

let taskB = combineArrays(num1, num2);
console.log(taskB);

/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet a encrypted text and a shift value. 
    The message is encrypted using a cesar cipher https://en.wikipedia.org/wiki/Caesar_cipher 
    Create a function that 
    - Takes three parameters message, alphabet and shift 
    - Creates the key based on the alphabet and the shift value. 
    - decrypts and returns the message.
    Use arrays and for loops. 
*/

console.log("");
console.log("Task: C");
console.log("");

const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
const message = "ckrr jutk"
let shift = 6



/* -----------------------------------------------------------------------------
    Task: D

    You are given a list of numbers.
    Write a function that takes the list and a target sum as input parameters
    The function is then to figure out what two numbers in the list that summed makes the provided sum.

    Example:
    [3,2,6,9]
    target 9
    -> [3,6]

*/

console.log("");
console.log("Task: D");
console.log("");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;



/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as input and returns the number of digits in that number. 
    123 -> 3
    2 -> 1
    42693 -> 5
*/

console.log("");
console.log("Task: E");
console.log("");

function countDigits(number) {
    let product = String(number);
    return product.length; 
}

const taskE1 = countDigits(123);
const taskE2 = countDigits(3);
const taskE3 = countDigits(42693);

console.log(taskE1);
console.log(taskE2);
console.log(taskE3);
console.log("");