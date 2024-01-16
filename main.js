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
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var singleNumber = function (nums) {
//   let object = nums.reduce((acc, curr) => {
//     if (!acc[curr]) {
//       acc[curr] = 1;
//     } else {
//       acc[curr] += 1;
//     }
//     return acc;
//   }, {});
//   for (const key in object) {
//     if (object[key] === 1) {
//       return key
//     }
//   }
// };
// console.log(singleNumber([2, 2, 1]));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var findFinalValue = function (nums, original) {
//   let newArr = nums.sort((a, b) => a - b);
//   let k = 0;
//   let num = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === original) {
//       k++;
//       num = newArr[i] * 2;
//     } else {
//       if (newArr[i] === num) {
//         num = newArr[i] * 2;
//       }
//     }
//   }

//   return k === 0 ? original : num;
// };
// console.log(findFinalValue([8, 19, 4, 2, 15, 3], 2));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var isPalindrome = function (s) {
//   let regex = /[^a-zA-Z0-9^]/g;
//   let str1 = s
//     .replace(regex, "")
//     .split("")
//     .join("")
//     .toLowerCase();
//   let str2 = s
//     .replace(regex, "")
//     .split("")
//     .reverse()
//     .join("")
//     .toLowerCase();

//   return str1 == str2 ? true : false;
// };
// console.log(isPalindrome("A man, a plan, a canal -- Panama"));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var hammingWeight = function (n) {
//   const arr = n.toString(2);
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "1") {
//       j++;
//     }
//   }
//   return j

// };
// console.log(hammingWeight(00000000000000000000000000000101011));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var sortColors = function (nums) {
//   let arr = nums.sort((a,b)=>a-b)
//   return arr;
// };
// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var singleNumber = function(nums) {
//     const obj = nums.reduce((acc,curr)=>{
//       if(!acc[curr]){
//         acc[curr] = 1
//       }else{
//         acc[curr]+=1
//       }
//       return acc
//     },{})
//     for (const key in obj) {
//      if(obj[key] === 1){
//       return key
//      }
//     }
// };
// console.log(singleNumber([0,1,0,1,0,1,99]));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var maximumGap = function (nums) {
//   let setArray = [...new Set(nums)];
//   if (setArray.length < 2) {
//     return 0;
//   }

//   let arr = [];
//   let sorted = setArray.sort((a, b) => a - b);
//   for (let i = 0; i < sorted.length - 1; i++) {
//     arr.push(sorted[i + 1] - sorted[i]);
//   }
//   arr = arr.sort((a,b)=>a-b)
//   return arr[arr.length - 1];
// };
// console.log(maximumGap([15252,16764,27963,7817,26155,20757,3478,22602,20404,6739,16790,10588,16521,6644,20880,15632,27078,25463,20124,15728,30042,16604,17223,4388,23646,32683,23688,12439,30630,3895,7926,22101,32406,21540,31799,3768,26679,21799,23740]));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var intersection = function (nums1, nums2) {
  let setArray1 = [...new Set(nums1)];
  let setArray2 = [...new Set(nums2)];
  let num = [];
  if (setArray1.length > setArray2.length) {
    for (let i = 0; i < setArray1.length; i++) {
      if (setArray2.includes(setArray1[i])) {
         num.push(setArray1[i])
      }
    }
  } else {
    for (let i = 0; i < setArray2.length; i++) {
      if (setArray1.includes(setArray2[i])) {
         num.push(setArray2[i]);
      }
    }
  }
  return num;
};
console.log(intersection([1, 2], [2, 2, 4, 3, 6, 2, 1, 2, 4, 5]));
