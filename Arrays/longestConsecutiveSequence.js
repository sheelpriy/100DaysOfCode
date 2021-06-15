/* 
Q. Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let max = 0;
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) {
            let j = nums[i];
            while (set.has(j)) {
                j++
            }
            max = Math.max(max, j - nums[i])
        }
    }
    return max;
};

longestConsecutive([100,4,200,1,3,2]) //4
longestConsecutive([0,3,7,2,5,8,4,6,0,1]) //9
longestConsecutive([3]) //1
longestConsecutive([2, 88, 89]) //2