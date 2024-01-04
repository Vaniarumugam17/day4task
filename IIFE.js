//a.Print odd numbers in an array
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
