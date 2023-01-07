var intToRoman = function(num) {
    if (num <= 0) {
        return "Given number cannot be converted to roman";
    }
    let chars = [
        "I",
        "IV",
        "V",
        "IX",
        "X",
        "XL",
        "L",
        "XC",
        "C",
        "CD",
        "D",
        "CM",
        "M",
    ];
    let nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let romanNum = "";
    let i = 12;
    while (num > 0) {
        let res = Math.trunc(num / nums[i]);
        num = Math.trunc(num % nums[i]);
        while (res--) {
            romanNum += chars[i];
        }
        i--;
    }
    return romanNum;
};