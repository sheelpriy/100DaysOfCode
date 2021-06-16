/* 
Q. It is New Year's Day and people are in line for the Wonderland rollercoaster ride.
Each person wears a sticker indicating their initial position in the queue from  to . 
Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. 
One person can bribe at most two others.
Determine the minimum number of bribes that took place to get to a given queue order. 
Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

Example:
[2, 1, 5, 3, 4] -> 3
[2, 5, 1, 3, 4] -> Too chaotic
*/


function minimumBribes(q) {
    let bribeCount = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            console.log('Too chaotic');
            return;
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) bribeCount++;
        }
    }
    console.log(bribeCount)
}