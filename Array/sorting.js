let array = [2,6,8,1,4,9,15,13,11,5]
let sortedArray = []
for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
       if(array[i] > array[j]){
        console.log(array[i],array[j]);
        array[i] = array[j]
       }
    }
}
console.log(sortedArray);