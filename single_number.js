const arr = [4,1,2,1,2]
const map = new Map()

arr.forEach((ele) =>{
    map.set(ele,0)
})
arr.forEach((ele) =>{
    let val = map.get(ele)
    map.set(ele,val+1)
})


map.forEach (function(value, key) {
    if(value == 1)
        single = key
  })


console.log(single)