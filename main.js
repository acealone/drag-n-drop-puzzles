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
    if(this.children.length < 1) {
        this.append(hold);
        if (checkWin()) {
            alert('YOU WON!');
        }
    }

}

function checkWin() {
    const first = document.querySelector('.first');
    const second = document.querySelector('.second');
    const fourth = document.querySelector('.fourth');
    const fifth = document.querySelector('.fifth');
    const sixth = document.querySelector('.sixth');
    const seventh = document.querySelector('.seventh');
    const eighth = document.querySelector('.eighth');
    const ninth = document.querySelector('.ninth');
    const firstContainer = document.querySelector('#first');
    const secondContainer = document.querySelector('#second');
    const fourthContainer = document.querySelector('#fourth');
    const fifthContainer = document.querySelector('#fifth');
    const sixthContainer = document.querySelector('#sixth');
    const seventhContainer = document.querySelector('#seventh');
    const eighthContainer = document.querySelector('#eighth');
    const ninthContainer = document.querySelector('#ninth');
    return firstContainer.contains(first)
        && secondContainer.contains(second)
        && fourthContainer.contains(fourth)
        && fifthContainer.contains(fifth)
        && sixthContainer.contains(sixth)
        && seventhContainer.contains(seventh)
        && eighthContainer.contains(eighth)
        && ninthContainer.contains(ninth);

}