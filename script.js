let colorBoxContainer = document.getElementsByClassName("box_container");
let colorBox = document.getElementsByClassName("item");
let dragColorItem = null;

for (let x of colorBox) {
  x.ondragstart = dragStart;
  x.ondragend = dragEnd;
}

function dragStart() {
  dragColorItem = this;
  setTimeout(() => (this.style.display = "none"), 0);
}

function dragEnd() {
  dragColorItem = null;
  setTimeout(() => (this.style.display = "block"), 0);
}

for (let i of colorBoxContainer) {
  i.ondragover = dragOver;
  i.ondragenter = dragEnter;
  i.ondragleave = dragLeave;
  i.ondrop = Drop;
}

function dragOver(e) {
  e.preventDefault();
  this.style.border = "2px solid lightblue";
}

function dragEnter(e) {
  e.preventDefault();
  this.style.border = "1px solid red";
}

function dragLeave() {
  this.style.border = "1px solid #ada1a1";
}

function Drop(e) {
  let classNamesList = [];
  for (let i = 0; i < this.childNodes.length; i++) {
    let class_names = this.childNodes[i].className;
    if (class_names) {
      let getClass = class_names.split(" ")[1];
      classNamesList.push(getClass);
    }
  }
  let draggableItem = dragColorItem.classList[1];
  if (!classNamesList.includes(draggableItem)) {
    this.append(dragColorItem);
  }
  this.style.border = "1px solid #ada1a1";
}
