/* 
Q. find the path with minimum cost, move allowed are up, left, and up-left diagnoally

Example:
[
    [31, 100, 65, 12, 18],
    [10, 13, 47, 157, 6],
    [100, 113, 174, 11, 33],
    [88, 124, 41, 20, 140],
    [99, 32, 111, 41, 20]
]

if a person starts from (2, 2) to reach the start (0, 0)
174->13->31 = 218
if a person starts from (3, 3) to reach the start (0, 0)
20->11->47->13->31 = 122

*/

const matrix = [
    [31,  100, 65,  12,  18],
    [10,  13,  47,  157,  6],
    [100, 113, 174, 11,  33],
    [88,  124, 41,  20, 140],
    [99,  32,  111, 41,  20]
]

// naive approach  with exponential time complexcity 
function findMinCost(matrix, m, n){
    // console.count('normal')
    if(!matrix.length){
        return;
    }
    if(m<0 || n<0){
        return Infinity
    }
    if(m===0 && n===0){
        return matrix[m][n]
    }
    return matrix[m][n] + Math.min(findMinCost(matrix, m-1, n), findMinCost(matrix, m, n-1), findMinCost(matrix, m-1, n-1))
}


/* 
we can optimise this solution with memoization, 
so that we don't have to recalculate the already calculated cost of given path
*/

var memo={};
function findMinCostMemo(matrix, m, n){
    // console.count('memo')
    if(memo[`${m}:${n}`]){
        return memo[`${m}:${n}`];
    }
    if(!matrix.length){
        return;
    }
    if(m<0 || n<0){
        return Infinity
    }
    if(m===0 && n===0){
        return matrix[m][n]
    }
    memo[`${m-1}:${n}`] = findMinCostMemo(matrix, m-1, n);
    memo[`${m}:${n-1}`] = findMinCostMemo(matrix, m, n-1);
    memo[`${m-1}:${n-1}`] = findMinCostMemo(matrix, m-1, n-1);

    memo[`${m}:${n}`] =  matrix[m][n] + Math.min(memo[`${m-1}:${n}`], memo[`${m}:${n-1}`], memo[`${m-1}:${n-1}`])
    return memo[`${m}:${n}`];
}

function compare(){
    console.time('normal');
    console.log('min cost',findMinCost(matrix, 3, 3))
    console.timeEnd('normal')
    console.time('memo');
    console.log('min cost',findMinCostMemo(matrix, 3, 3))
    console.timeEnd('memo')
}

compare();