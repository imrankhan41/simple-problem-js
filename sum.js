// const numbers = [44, 23, 34, 32, 54, 5, 78];
// let sum =0;
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
   
//     sum = sum + element;
    
// }
// console.log(sum);

function arrayTotal(number){
    let sum =0 ;
    for (let i =0; i<number.length; i++){
        let element = number[i];
        sum = sum + element ;
    }
    return sum;
}
var myNumber = [44, 23, 34, 32, 54, 5, 78];
var result = arrayTotal(myNumber);
console.log(result);