const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");//get notes from local storage
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);//store notes in local storage
    
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");//create p tag
    let img = document.createElement("img");//create img tag
    inputBox.className = "input-box";//add class to p tag
    inputBox.setAttribute("contenteditable", "true");//add attribute to p tag
    img.src = "images/delete.png";//set img src
    notesContainer.appendChild(inputBox).appendChild(img); //add img tag to p tag and p tag to notes container   
})

notesContainer.addEventListener("click",function (e) {
    if(e.target.tagName === "IMG"){//if the clicked element is img
       e.target.parentElement.remove();//remove the parent element of img
       updateStorage();
    }
    else if(e.target.tagName === "P"){//if the clicked element is p
        notes = document.querySelectorAll(".input-box");//get all p tags
        notes.forEach(nt => {
            nt.onkeyup = function(){//when user types
                updateStorage();
            }        
        })

    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
    