/* 
Q. An array is a type of data structure that stores elements of the same type in a contiguous block of memory.
 In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as  or .
Reverse an array of integers.

Example
Arr = [1, 2, 3]
Return [3, 2, 1]
Function Description
Complete the function reverseArray in the editor below.
reverseArray has the following parameter(s):
int A[n]: the array to reverse
*/


function reverseArray(a) {
     let j = a.length-1;
     let i=0;
     while(j>i){
         a[j]= a[i]+ a[j];
         a[i]= a[j]-a[i];
         a[j] = a[j]-a[i]
         j--;
         i++;
     }
     return a;
}

reverseArray([1, 2, 3, 4, 5, 6])