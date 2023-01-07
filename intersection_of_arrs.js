let  nums1 = [3,1,2], nums2 = [1,1]
let res = []
let map = new Map()
nums1.forEach((ele) => {
    map.set(ele,0)
})
nums1.forEach((ele) => {
    let val = map.get(ele)
    map.set(ele,val + 1)
})
nums2.forEach((ele) => {
    if (map.get(ele) > 0){
        let val =  map.get(ele)
        map.set(val--); 
        res.push(ele);
    }
})
console.log(res)