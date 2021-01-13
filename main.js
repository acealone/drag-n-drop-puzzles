const puzzles = document.querySelectorAll('.puzzle');
const empties = document.querySelectorAll(".empty");

for(const puzzle of puzzles){
    puzzle.addEventListener("dragstart", dragStart);
    puzzle.addEventListener("dragend", dragEnd);
}

for(const empty of empties){
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}


function dragStart(){
    setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd(){
    this.className = "puzzle";
}

function dragOver(e){
e.preventDefault();

}

function dragEnter(e){
e.preventDefault();
this.className += " hovered"
}

function dragLeave(){
this.className = "empty";
    
}
function dragDrop(){
this.className = "empty";
const hold = document.querySelector(".invisible");
if(this.children.length < 1){
this.append(hold);}

}