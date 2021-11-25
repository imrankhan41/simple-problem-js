// const fibo =[0,1];
// for(let i=2;i<5; i++){
//     fibo[i] = fibo[i-1 ]+ fibo[i-2];
// }

// console.log(fibo);
// function fibo(num){
//     const fibo =[0,1];
//     for(let i=2;i<num; i++){
//     fibo[i] = fibo[i-1 ]+ fibo[i-2];
// }
// return fibo;
// }
// const myNum =6;
// const fibos = fibo(myNum);
// console.log(fibos);
// function fibo(num){
//     if (typeof num != "myNum"){
//         return "please enter num";
//     }
//     if (num<1){
//         return "please enter greater than 1"
//     }
//     const fibo =[0,1];
//     for(let i=2;i<num; i++){
//     fibo[i] = fibo[i-1 ]+ fibo[i-2];
// }
// return fibo;
// }
// const myNum ="0";
// const fibos = fibo(myNum);
// console.log(fibos);

// function fibo(n){
//     if(n==0){
//         return 0;
//     }
//     if(n==1){
//         return 1;
//     }
//     return fibo(n-1) + fibo(n-2);
// }
// const fibos = fibo(6);
// console.log(fibos);



// function fibo(n){
//     if(n==0){
//         return [0];
//     }
//     if(n==1){
//         return [0,1];
//     }
//     const fibos = fibo(n-1);
//     fibos[n] =fibos[n-1]+fibos[n-2];
//     return fibos;
// }
// const fibos1 = fibo(6);
// console.log(fibos1);
const selected =[];
for(let i=0; i<15 ; i++){
    const picked = Math.round(Math.random()*100);
    if(selected.indexOf(picked) ==-1){
        selected.push(picked);
    }
    else{
        console.log(selected,picked);
    }
    
}
console.log(selected);