const linkList = {
  value: "zulqarnain",
  next: {
    value: "subtain",
    next: {
      value: "Abdul Rahman",
      next: null,
    },
  },
};

let head = linkList;
console.log(head);

let arr = [];

while(head !== null){
    arr.push(head.value)
    head = head.next
    console.log('after iteration ', head);
}
console.log(arr);
