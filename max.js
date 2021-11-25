const business = 450;
const minister = 350;
const army =600;
//math apply
// const maximum = Math.max(business,minister);
// console.log(maximum);

//compare2
// if(business>minister){
//     console.log('bussiness person is bigger');
// }
// else {
//     console.log('minister is bigger ');
// }

//compare3
// 

// compare 2 using function

// function findLargest(first,second){
//     if(first>second){
//         return first;
//     }
//     else {
//         return second;
//     }
// }

// var myFirst =10;
// var mySecond =12;
// var max = findLargest(myFirst,mySecond);
// console.log(max);

// compare 3 using function
// function findLargest(first,second,third){
//     if(first>second && first>third){
//         return first;
//     }
//     else if(second> first && second>third){
//         return second;
//     }
//     else{
//         return third;
//     }
// }

// var myFirst =10;
// var mySecond =12;
// var myThird = 13;
// var max = findLargest(myFirst,mySecond,myThird);
// console.log(max);

// compare 3 using function for minimum
// function findLargest(first,second,third){
//     if(first<second && first<third){
//         return first;
//     }
//     else if(second< first && second<third){
//         return second;
//     }
//     else{
//         return third;
//     }
// }

// var myFirst =10;
// var mySecond =12;
// var myThird = 13;
// var min = findLargest(myFirst,mySecond,myThird);
// console.log(min);

// compare 2 using function for min

function findLargest(first,second){
    if(first<second) {
        return first;
    }
    else{
        return second;
    }
}

var myFirst =10;
var mySecond =12;
var min = findLargest(myFirst,mySecond);
console.log(min);