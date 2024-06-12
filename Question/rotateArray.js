const rotateArray = (array) => {
    let rotateCount = 3;
    // for(let i = 1; i <= rotateCount; i++){
    //     let rem = array[array.length-1]
    //     array.pop()
    //     array.unshift(rem)
    // }
    let firstElms = array.slice(0,array.length-rotateCount)
    let lastElms = array.slice(array.length-rotateCount)

    return lastElms.concat(firstElms)
}

const array = [1,2,3,4,5,6,7]

const result = rotateArray(array)
console.log(result);