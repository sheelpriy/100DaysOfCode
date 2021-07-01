function power(x, n) {    
    let temp;
     
    if (n == 0)
        return 1;
         
    temp = power(x, parseInt(n / 2));
 
    if (n % 2 == 0)
        return temp * temp;
    else
    {
        if (n > 0)
            return x * temp * temp;
        else
            return (temp * temp) / x;
    }
    
};

const result  = power(2, 50);
console.log(result);