const friends = ['Raju','Ramu','Kaliya','Pinki','Chutki'];
for(let i = 0; i<friends.length; i++){
    console.log(friends[i]);
}

for(let f of friends){
    console.log(f);
}

console.log('---for each functions---');
friends.forEach((a,b) =>{
    console.log(a,b);
}
);

// print every element multiplied by 2
const nums = [4,7,9,1,3,2];
nums.forEach((n) => {console.log(n*2);})

// print only even numbers//

nums.forEach((n) => {
    if(n % 2 === 0){
        console.log(n);
    }
});

