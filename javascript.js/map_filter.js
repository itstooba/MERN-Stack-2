const nums = [4,8,9,1,2,7];

const nums2 = nums.map((a) =>{
    return a*2;

});
console.log(nums2);

const names = ['Ramu', 'Raju','Kaliya','Pinki'];
console.log('abcd'.toUpperCase());
const upperNames = names.map((n) => {
    return n.toUpperCase();

});
console.log(upperNames);
const prices = [345,670,1200,5600,750,999];
const gst = prices.map((n) => {
   return n*1.18;

})

console.log(gst);
const prices2 = ['₹340.48','₹99.999','₹123.8','₹89.92','₹12.7'];
const newprices =  prices2.map((n) => {
   return parseInt(n.slice(1))

});
console.log(newprices);


//filter//
//[4,8,9,1,3,2,7]//
const evennums = nums.filter((n) =>{
   return n % 2 === 0

});
console.log(evennums);
const prices3 = [400,3500,7500,4200,600]
const filterd_price = prices3.filter((a) => {
   return a > 2000 && a < 5000 

})
console.log(filterd_price);

//['Ramu','Raju','Kaliya'];
const names_filter = names.filter((a) => {
   return a.length >=5  
})
console.log(names_filter);




 



 

 




