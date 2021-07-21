/* 
So, idea of this approach is to implement multiplication digit by digit,
lesser significant digit to more significant
*/

const MAX = 1000;

function multiply(x, res, res_size) {

    // Initialize carry
    let carry = 0;

    // One by one multiply n with
    // individual digits of res[]
    for (let i = 0; i < res_size; i++) {
        let prod = res[i] * x + carry;
        // Store last digit of
        // 'prod' in res[]
        res[i] = prod % 10;
        // Put rest in carry
        carry = Math.floor(prod / 10);
    }

    // Put carry in res and
    // increase result size
    while (carry) {
        res[res_size] = carry % 10;
        carry = Math.floor(carry / 10);
        res_size++;
    }
    return res_size;
}

// This function finds
// power of a number x
function power(x, n) {
    //printing value "1" for power = 0
    if (n == 0) {
        return 1;
    }

    let res = new Array(MAX);
    let res_size = 0;
    let temp = x;

    // Initialize result
    while (temp != 0) {
        res[res_size++] = temp % 10;
        temp = Math.floor(temp / 10);
    }

    // Multiply x n times
    // (x^n = x*x*x....n times)
    for (let i = 2; i <= n; i++){
        res_size = multiply(x, res, res_size);
    }

    console.log(`${x}^${n}=`);
    console.log(res.reverse().join(''))
    
}


// Driver Code

let exponent = 100;
let base = 2;
power(base, exponent);