function calculateArithmetic(a,b, arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a, b);
    return ans;
}

function sum(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

const value = calculateArithmetic(1,2, sum);
console.log(value);