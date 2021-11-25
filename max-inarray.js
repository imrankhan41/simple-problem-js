// function largestElement(numbers){
//     let largest = numbers[0];
//     for(let i=0; i<numbers.length;i++){
//         const element = numbers[i];
//     if(element > largest){
//         largest= element;
//     }
// }
//     return largest;
// }

// // const ages = [12,54,2,34,32,75,12];
// // const oldest = largestElement(ages);

// const oldest1 = largestElement([-12,-6,17]);
// console.log(oldest1);


// //lragest in array
// function largeArray(number){
//  let largest = number[0];
//     for(let i =0; i<number.length;i++){
//         const element = number[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }

// const myNumber = [12,13,14,15,18,14,15];
// const output = largeArray(myNumber);
// console.log(output);


// small in array

// function smallArray(number){
//     let smallest = number[0];
//        for(let i =0; i<number.length;i++){
//            const element = number[i];
//            if(element <= smallest){
//                smallest = element;
//            }
//        }
//        return smallest;
//    }
   
//    const my1Number = [12,13,14,15,18,14,15];
//    const output1 = smallArray(my1Number);
//    console.log(output1);

   function smallArray(numbers){
       let smallest =numbers[0];
       for(let i =0; i < numbers.length;i++){
           const element = numbers[i];
           if(element<smallest){
               smallest = element;
           }
       }
       return smallest;
   }
   var my2num = [14,18,19,21,8,41];
   var result = smallArray(my2num);
   console.log(result);