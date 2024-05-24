let data = [10, 25, 35, 40, 55];

let index = 2;
let newElm = 30;

for (let i = data.length - 1; i >= 0; i--) {
  if (i >= index) {
    data[i + 1] = data[i];
    if (i == index) {
      data[i] = newElm;
    }
  }
}

console.log(data);
