/* 
Q. Given two sorted arrays, the task is to merge them in a sorted manner.

Example: 
Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8} 
Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}

this solution is in Time complexcity of O(n+m)
and with (n+m) auxilary space. 
we can optimize it further. 
*/

function mergeSortedArrays(arr1, arr2){
    let n = arr1.length;
    let m = arr2.length;
    let i=j=0;
    let arr = [];
    while(i<n || j <m){
        if(arr1[i] <= arr2[j]){
            arr.push(arr1[i]);
            i++
        }else{
            arr.push(arr2[j]);
            j++
        }
    }

    return arr;
}

const result  = mergeSortedArrays([1, 3, 4, 5], [2, 4, 6, 8])
console.log(result);