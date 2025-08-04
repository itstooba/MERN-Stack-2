function addNum(a,b){
    c = a+b;
    console.log(c);
}

addNum(45,456);




const getAvg = function(x,y,z){
    const avg = (x+y+z)/3;
    console.log(avg);
}

getAvg(345,6732,234)



const factorial = (n) => {
    let f = 1;
    for(let i =1; i <=n; i++){
        f = f * i;
    }
    return f;
};

const fact = factorial(5);
console.log(fact);




const returnMultiple = () => {
    return [234,678,3456]
};
const[one,two,three] = returnMultiple();
console.log(two);

