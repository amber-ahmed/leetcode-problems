var maxIceCream = function(costs, coins) {
    costs.sort(function(a, b){return a - b});
    let leftCoins = coins;
    let count = 0;
    for(let i = 0; i < costs.length; i++){
        if(0 <= (leftCoins - costs[i])){
            leftCoins = leftCoins - costs[i]
            count++
        }
        else
            return count
    }
    return count
};