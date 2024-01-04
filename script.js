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

//print odd num using IIFE

var num1 = [1, 2, 3, 4, 5];
var final1 = [];
(function () {
  for (var i = 0; i < num1.length; i++) {
    if (num1[i] % 2 == 1) {
      final1.push(num1[i]);
    }
  }
  console.log(final1);
})(num1);

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

//to title case using IIFE

var str1 = ["haii", "good", "morning", "to", "all", "am", "vani."];

(function () {
  for (var i = 0; i < str1.length; i++) {
    str1[i] = str1[i].toLowerCase();
    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
  }
  console.log(str1.join(" "));
})(str1);

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

//sum of numbers using IIFE
var n = [4, 6, 9, 8, 5, 7, 6];
(function () {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  console.log(sum);
})(n);

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

//Using IIFE

(function (a1) {
  var res1 = [];
  for (i = 0; i < a1.length; i++) {
    count1 = 0;
    for (j = 1; j <= a1[i]; j++) {
      if (a1[i] % j === 0) {
        count1++;
      }
    }

    if (count1 == 2) {
      res1.push(a1[i]);
    }
  }
  console.log(res1);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]);

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

//IIFE function

(function () {
  var arr1 = ["abc", "mom", "dad", "madam", "teacher"];
  var N1 = arr1.length;
  var out = [];
  for (let i = 0; i < arr1.length; i++) {
    let final = arr1[i];
    let str = final.split("").reverse().join("");
    if (str == arr1[i]) out.push(arr1[i]);
  }
  console.log(out);
})();

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

//Return median of two sorted array using IIFE

var arr1 = [3, 2, 1, 4, 5];
var arr2 = [8, 6, 7, 9, 10];
(function () {
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
})(arr1, arr2);

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

//Using IIFE

(function (arr) {
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
})([1, 2, 3, 4, 4, 5, 6, 7, 5, 7, 15, 18, 17, 20, 15, 6, 17]);

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

//Using IIFE

var arr = [4, 5, 6, 1, 2, 3];
var n = arr.length;
var k = 3;

(function (arr, n, k) {
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
})(arr, n, k);

//2.Do the below programs in arrow functions.
//a.Print odd numbers in an array

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let odd1 = numberArray.filter((x) => {
  return x % 2 !== 0;
});
console.log(odd1);

//b.Convert all the strings to title caps in a string array

let str2 = ["haii", "good", "morning", "to", "all", "am", "vani."];

let strCaps = str2.map((item) => {
  return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
});
console.log(strCaps.join(" "));

//c.Sum of all numbers in an array

var arr = [1, 2, 3, 4, 5, 6];
const add1 = arr.reduce((a, b) => a + b);
console.log([add1]);

//d.Return all the prime numbers in an array

let prime1 = (arr) => {
  return arr.filter((n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  });
};
console.log(prime1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//e.Return all the palindromes in an array

var arr = ["abc", "mom", "dad", "madam", "teacher"];
arr = arr.filter((s) => {
  let len = s.length;
  for (var i = 0; i < len / 2; i++) {
    if (s[i] == s[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(arr);
