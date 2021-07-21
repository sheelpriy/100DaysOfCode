function isPrimeNumber(n){
    // if n is not divisible except n or 1 , it prime
    let isPrime=true;
    for(let i =2; i<=Math.sqrt(n); i++){
        if(n%i===0){
            isPrime= false;
            break;
        }
    }
    return isPrime;
}

console.log('12345', isPrimeNumber(12345));
console.log('123', isPrimeNumber(123));
console.log('97', isPrimeNumber(97));
console.log('45', isPrimeNumber(45));
console.log('77331793', isPrimeNumber(77331793));


const primeNumbers = [2, 3];
function findNthPrimeNumber(n){
    const l = primeNumbers.length;
    let nTh=0;
    if(primeNumbers[n-1]){
        nTh= primeNumbers[n-1];
        return nTh;
    }else{
        for(let i= primeNumbers[l-1]+2; i<Infinity;){
            if(isPrimeNumber(i)){
                primeNumbers.push(i);
                if(primeNumbers.length ===n){
                    nTh= primeNumbers[primeNumbers.length-1];
                    break;
                }
            }
            i+=2;
        }
    }    
    return nTh;
}
console.time('5th')
console.log('5th', findNthPrimeNumber(5))
console.timeEnd('5th')
console.time('15th')
console.log('15th', findNthPrimeNumber(15))
console.timeEnd('15th')
console.time('9th')
console.log('9th', findNthPrimeNumber(9))
console.timeEnd('9th')
console.time('51th')
console.log('51th', findNthPrimeNumber(51))
console.timeEnd('51th')
console.time('45th')
console.log('45th', findNthPrimeNumber(45))
console.timeEnd('45th')
console.log( findNthPrimeNumber(5))



/* 
=====================
 */
function isPrimeNumber(n){
    let isPrime=true;
    for(let i =2; i<=Math.sqrt(n); i++){
        if(n%i===0){
            isPrime= false;
            break;
        }
    }
    return isPrime;
}

const primeNumbers = [2, 3];

function findNthPrimeNumber(n){
    const l = primeNumbers.length;
    let nTh=0;
    if(primeNumbers[n-1]){
        nTh= primeNumbers[n-1];
        return nTh;
    }else{
        for(let i= primeNumbers[l-1]+2; i<Infinity;){
            if(isPrimeNumber(i)){
                primeNumbers.push(i);
                if(primeNumbers.length ===n){
                    nTh= primeNumbers[primeNumbers.length-1];
                    break;
                }
            }
            i+=2;
        }
    }    
    return nTh;
}
function waiter(number, q) {
    // Write your code here
    let answers = [];
    let A=[];
    let B = [];
    for(let i=0; i<=q; i++){
        const prime = findNthPrimeNumber(i);
        while(numbers.length){
            let top= numbers.pop();
            if(top % prime){
                A.push(top);
            }else{
                B.push(top)
            }
        }
        while(B.length){
            answer.push(B.pop())
        }
        numbers = A;
        A=[];
    }
    while(A){
        answers.push(A.pop())
    }
    return answers;
}
/* 
=====================
 */




