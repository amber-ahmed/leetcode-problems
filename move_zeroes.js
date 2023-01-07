let nums = [1,0,1]
let j = 1, i = 0
while(j < nums.length){
    if(nums[i] == 0 && nums[j] != 0){
        let temp=nums[i];
        nums[i]=nums[j];
        nums[j]=temp;
        i++
        j++
     }else if(nums[i] == 0 && nums[j] == 0)
        j++
    else{
        i++
        j++
    }
}

console.log(nums)

