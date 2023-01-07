var majorityElement = function(nums) {
    let result = nums[0]
    const map = new Map()
nums.forEach((ele) =>{
    map.set(ele,0)
})
nums.forEach((ele) =>{
    let val = map.get(ele)
    map.set(ele,val+1)
})
let max = 1
map.forEach((value,key) => {
    if(max < value){
        result = key
        max = value
    }
})
return result
};
console.log(majorityElement([2,2,2,3,4,5,6,1,2]))