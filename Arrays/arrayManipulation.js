/**  
Q. Starting with a 1-indexed array of zeros and a list of operations, 
for each operation add a value to each the array element between two given indices, inclusive.
 Once all operations have been performed, return the maximum value in the array.

@Example
Queries are interpreted as follows:

    a b k
    1 5 3
    4 8 7
    6 9 1
Add the values of  between the indices  and  inclusive:

index->	 1 2 3  4  5 6 7 8 9 10
    [0,0,0, 0, 0,0,0,0,0, 0]
    [3,3,3, 3, 3,0,0,0,0, 0]
    [3,3,3,10,10,7,7,7,0, 0]
    [3,3,3,10,10,8,8,8,1, 0]

    The largest value is  after all operations are performed.
**/

/* :TODO  optimize it  */

function arrayManipulation(n, queries) {
    // Write your code here
    let arr = new Array(n).fill(0);
    let l = queries.length - 1;
    let max = 0;
    while (l > -1) {
        let i = queries[l][0] - 1;
        let end = queries[l][1];
        let add = queries[l][2];

        for (i; i < end; i++) {
            arr[i] += add;
            max = Math.max(max, arr[i]);
        }
        l--;
    }
    return max;
}


const queries = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1]];

arrayManipulation(5,queries)