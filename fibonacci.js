/* 
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
119th =118th + 117th
nth = (n-1)th + (n-2)th;
ith = (i-1)th + (i-2)th;
*/
/* const fibo =[5,8];
for  (i=2; i <=10; i++){
    // nth = (n-1)th + (n-2)th;
    // ith = (i-1)th + (i-2)th;
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); */

// const fibo =[0,1];
// for (let i=2; i<=10; i++){
//     fibo[i] = fibo[i-1] + fibo [i-2];
// }
// console.log(fibo)

/* function fiboSeries(num){
    const fibo =[5,8];
    for(let i = 2; i<=num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fibod = fiboSeries(10);
console.log(fibod); */

//error handling

function fibonacci(num){
    if(typeof num != 'number'){
        return "please enter number";
    }
    if (num<1){
        return "please enter number  more than 1"
    }
    let fibos =[3,5];
    for(let i=2; i<num; i++){
        fibos[i] = fibos [i-1] + fibos[i-2]; 
    }
    return fibos;
}
const fibod = fibonacci(-23);
console.log(fibod);