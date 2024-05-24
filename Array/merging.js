//* merging using for loop
// const data1 = [10,20,30,40]
// const data2 = [50,60,70,80]

// const mergedArray = []

// for(let i = 0; i < data1.length; i++){
//     mergedArray[i] = data1[i]
// }

// for(let i = 0; i < data2.length; i++){
//     mergedArray[data1.length+i] = data2[i]
// }

// console.log(mergedArray);


//* merging using while loop
const data1 = [60,2,130,40]
const data2 = [50,6,70,3]

const mergedArray = []

let i = 0;
let j = 0;

while(i < data1.length){
    mergedArray[i] = data1[i]
    i++;
}

while(j < data2.length){
    mergedArray[data1.length+j] = data2[j]
    j++;
}

console.log(mergedArray);

let sortedArray = mergedArray.sort((a,b) => {
    return a-b
})
console.log(sortedArray);