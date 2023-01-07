let numRows = 5
let triangle = new Array(numRows)
for(let i = 0; i < numRows; i++)
    triangle[i] = new Array(i + 1)
for(let i = 0; i < triangle.length; i++)
    for(let j = 0; j < triangle[i].length; j++)
        if(j == 0 || j == i)
            triangle[i][j] = 1
        else
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]

console.log(triangle)