var romanToInt = function(s) {
    let num = 0;
    let charValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < s.length; i++) {
        let ch = charValues[s[i]];
        if (i + 1 < s.length) {
            let next = charValues[s[i + 1]];
            if (ch >= next) {
                num += ch;
            } else {
                num -= ch;
            }
        } else {
            num += ch;
        }
    }
    return num;
};