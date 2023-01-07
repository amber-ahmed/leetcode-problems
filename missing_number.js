/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b) => a - b)
    let i 
    for( i = 0; i < nums.length; i++)
        if(i != nums[i])
            return i
    return i
};
console.log(missingNumber([0,3,1,4]))

//aproach 2
function missingNumber2(nums) {
    let sum = nums.length;
    for (let i = 0; i < nums.length; i++)
        sum += i - nums[i];
    return sum;
}
console.log(missingNumber2([0,2,1,4]))
