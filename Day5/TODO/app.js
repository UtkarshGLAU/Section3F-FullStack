function ql() {
  let info1 = document.getElementById(info);
  let str = info.value;
  al(str);
  count++;
}
function ql1(params) {
  al(params);
}
var count = 0;
function al(str) {
  // console.log(str);
  let ol = document.getElementById("list");
  let li = document.createElement("li");
  li.innerText = str;
  ol.appendChild(li);
}
function de() {
  let ind = document.getElementById(index);
  delet(index.value - 1);
}
function delet(i) {
  if (i>=count) {
    console.log('ERROR');
  }
  else{
    let myList = document.getElementById("list");
  let arr = [];
  for (let index = count - 1; index > i; index--) {
    arr.push(myList.removeChild(myList.lastChild).innerText);
  }
  myList.removeChild(myList.lastChild);
  count--;
  // console.log(arr);

  for (let index = i; index < count; index++) {
    ql1(arr.pop());
  }
  }
  
}
