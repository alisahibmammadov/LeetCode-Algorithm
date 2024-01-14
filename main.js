// var lengthOfLastWord = function (s) {
//   let array = s
//     .trim()
//     .split(" ")
//     .filter((item) => item !== "");
//   for (let i = 0; i < array.length; i++) {
//       return array[array.length - 1].length;
//   }
// };

// console.log(lengthOfLastWord("Hello World"));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     digits[i]++;

//     if (digits[i] === 10) {
//       digits[i] = 0;
//     }
//     else {
//       return digits;
//     }
//   }

//   digits.unshift(1);
//   return digits;
// };

// // Example usage:
// console.log(plusOne([1, 2, 9])); // Output: [1, 2, 4]
// console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
// console.log(plusOne([9])); // Output: [1, 0]
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var mySqrt = function(x) {
//     return Math.floor(Math.sqrt(x))
// };
// console.log(mySqrt(8));
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var climbStairs = function (n) {
//   if (n === 1) {
//     return 1;
//   }
//   const dp = new Array(n + 1);
//   dp[1] = 1;
//   dp[2] = 2;
//   for (let i = 3; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp;
// };
// console.log(climbStairs(2)); // Output: 2
// console.log(climbStairs(3)); // Output: 3
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var deleteDuplicates = function (nums) {
//   let uniqueArr = new Set();

//   for (let num of nums) {
//     if (uniqueArr.has(num)) {
//       return true;
//     }
//     uniqueArr.add(num);
//   }
//   return false;
// };
// console.log(deleteDuplicates([1, 2, 3, 3]));
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var moveZeroes = function (nums) {

//   let j = 0;
//   for (let i = 0; i <= nums.length; i++) {
//     if(nums[i] === 0){
//       j++
//     }
//   }
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if(nums[i] === 0 ){
//       nums.splice(i,1)
//     }
//   }
//   for (let i = 0; i < j; i++) {
//     nums.push(0)

//   }

//   return nums;
// };
// console.log(moveZeroes([0]));
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var isPalindrome = function (s) {
//   let str1 = s.replace(/[^a-zA-Z]/g, "").split("").join("").toLowerCase();
//   let str2 = s.replace(/[^a-zA-Z]/g, "").split("").reverse().join("").toLowerCase();

//   return str1 == str2 ? true : false;
// };
// console.log(isPalindrome("0P"));
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var majorityElement = function (nums) {
//   let obj = nums.reduce((acc, curr) => {
//     if (!acc[curr]) {
//       acc[curr] = 1;
//     } else {
//       acc[curr]++;
//     }
//     return acc;
//   }, {});
//   let max = Object.keys(obj).reduce((max, prop) => {
//     if (obj[prop] > obj[max]) {
//       return prop;
//     } else {
//       return max;
//     }
//   }, Object.keys(obj)[0]);
//   return max;
// };
// console.log(majorityElement([3, 2, 3]));
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// async function sleep(millis) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(millis);
//     }, millis);
//   });
// }
// console.log(sleep(1000));
// // let t = Date.now();
// // sleep(2000).then(() => {
// //   console.log(Date.now() - t); // 100
// // });
var singleNumber = function (nums) {
  let object = nums.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
  for (const key in object) {
    if (object[key] === 1) {
      return key
    }
  }
};
console.log(singleNumber([2, 2, 1]));
