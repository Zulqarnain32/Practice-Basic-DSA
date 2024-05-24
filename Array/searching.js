let data = [10,20,30,40,50,60,70]

let item = 40;

for(let i = 0; i < data.length; i++){
    console.log(i);
    if(data[i] == item){
        console.log(i);
        break;
    }
}   