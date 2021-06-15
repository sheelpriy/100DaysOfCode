/* 
Q. Given a binary array nums, return the maximum number of consecutive 1's in the array.


Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

*/

var findMaxConsecutiveOnes = function(nums) {
    let maxCount=0;
    let currentCount = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]===1){
            currentCount++;
             if(currentCount>maxCount){
                 maxCount = currentCount;
             }
        }else{
            currentCount =0;
        }
    }
    if(currentCount>maxCount){
        maxCount = currentCount;
    }
    return maxCount;
};


findMaxConsecutiveOnes([1,1,0,1,1,1]) // should output 3