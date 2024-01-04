//1.Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array
//print oddnumbers using  anonymous function

var odd = function (num) {
  let final = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 1) {
      final.push(num[i]);
    }
  }
  console.log(final);
};

var num = [1, 2, 3, 4, 5];
odd(num);

//b.Convert all the strings to title caps in a string array
// to title case using  anonymous function

let title = function (str) {
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase();
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
};

var str = ["haii", "good", "morning", "to", "all", "am", "vani."];

title(str);

//c.Sum of all numbers in an array
//sum of numbers using  anonymous function

let add = function (n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  console.log(sum);
};

var n = [2, 5, 9, 4, 6, 7, 3];
add(n);

//d.Return all the prime numbers in an array
//1. Using Anonymous fucntion.

var prime = function (a) {
  var res = [];
  for (i = 0; i < a.length; i++) {
    var count = 0;
    for (j = 1; j <= a[i]; j++) {
      if (a[i] % j === 0) {
        count++;
      }
    }
    if (count == 2) {
      res.push(a[i]);
    }
  }
  console.log(res);
};
prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]);

//e.Return all the palindromes in an array
//anonymous function

let palindrome = function (arr) {
  var N = arr.length;
  var out = [];
  for (let i = 0; i < arr.length; i++) {
    let final = arr[i];
    let str = final.split("").reverse().join("");
    if (str == arr[i]) out.push(arr[i]);
  }
  console.log(out);
};
var arr = ["abc", "mom", "dad", "madam", "teacher"];

palindrome(arr);

//f.Return median of two sorted arrays of the same size.
//anonymous function

let median = function (arr1, arr2) {
  let arr = [...arr1, ...arr2];

  arr.sort((a, b) => a - b);
  let len = arr.length;

  if (len % 2 !== 0) {
    let ans = arr[Math.round(len / 2) - 1];
    let final = ans;
  } else {
    ans = arr[Math.round(len / 2) - 1] + arr[Math.round(len / 2)];
    final = ans;
  }
  console.log(final);
};
var arr1 = [3, 2, 1, 4, 5];
var arr2 = [8, 6, 7, 9, 10];
median(arr1, arr2);

//g.Remove duplicates from an array
//Using anonymous function

var dup = function (arr) {
  var frequency = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]] = frequency[arr[i]] + 1;
    } else {
      frequency[arr[i]] = 1;
    }
  }

  let final = [];
  for (let x in frequency) {
    if (frequency[x] === 1) {
      final.push(x);
    }
  }

  console.log(final);
};
dup([1, 12, 11, 3, 4, 5, 12, 5, 15, 23, 4, 16, 12]);

//h.Rotate an array by k times
//Using anonymous function

let rotation = function (arr, n, d) {
  let p = 1;
  while (p <= k) {
    let last = arr[0];
    for (let i = 0; i < n - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[n - 1] = last;
    p++;
  }
  let out = [];
  for (let i = 0; i < n; i++) {
    out.push(arr[i]);
  }
  console.log(out);
};
var arr = [4, 5, 6, 1, 2, 3];
var n = arr.length;
var k = 3;

rotation(arr, n, k);
