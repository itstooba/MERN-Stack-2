const user = {
    name :'lestrade',
    email : 'lestrade@mail.com',
    age : '21',
};
console.log(user);

console.log(user.name);
console.log(user['age']);

user.city = 'Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const smartphone = {
    brand : 'Samsung',
    model : 'galaxy s24 ultra',
    price : '125000',
    color : ['red','black','silver']
};
console.log(smartphone);
//access price of smartphone
// access 2nd color of smartphone

//aaccess price of the smartphone
console.log( smartphone.price);

// Access 2nd color
console.log( smartphone.color[1].toUpperCase());
smartphone.color[0] ='blue';
smartphone.color.splice(0,1,'blue');
console.log(smartphone);

// add a new color to end of colors array
smartphone.color.push('green');

console.log( smartphone);

const smartphoneArray = [
    {
        brand :'Samsung',
        model : 'galaxy s24 ultra',
        price : '89000',
        colors: ['red','black', 'silver']
    },
    {
         brand :'Apple',
        model : 'iphone 16 pro max',
        price : '12000',
        colors: ['black', 'silver']
    },
    {
         brand :'Soney',
        model : 'Xperia',
        price : '23000',
        colors: ['red','blue', 'silver']
    },
    {
         brand :'Oppo',
        model : 'Reno 8',
        price : '45000',
        colors: ['gray','black']

    },
    {
         brand :'Nokia',
        model : 'Lumia 310',
        price : '59000',
        colors: ['blue','black', 'silver']

    },
];

// access 2nd smartphone 
console .log(smartphone[1]);

//access 1st color of 3rd smartphone
console.log(smartphoneArray[2].colors[0]);

// update price of last smartphone
smartphoneArray[smartphoneArray.length-1].price = 80000;
console.log(smartphoneArray);

// create an array constaining brands of all smartphones
  const brands = smartphoneArray.map((phone) =>{
    return phone.brand;
});
console.log(brands);

// filter smartphone with price less than 50000
const budgetPhones = smartphoneArray.filter((phone) => {
    return phone.price < 50000   
});
console.log(budgetPhones);

const keyword = 'Samsung';
const searchResult = smartphoneArray.filter((phone) => {
    return phone.brand === keyword;
});
console.log(searchResult);




    
        

