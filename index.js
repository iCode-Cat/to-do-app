// SELECT ELEMENTS HERE
let add = document.getElementById("add");
let main = document.querySelector(".main");
let input = document.getElementById("input");
let check = document.getElementById("check");
let taskBar = document.querySelectorAll("task-bar");
//ADD EVENT LISTENER

add.addEventListener("click", createTask);

    

    //FUNCTIONS HERE
function createTask(e){
    //CREATE ELEMENT
    if(input.value==""){
        input.style.backgroundColor="rgb(255, 24, 24)";
        setTimeout(() => {
            input.style.backgroundColor=" #17D2EB"
        }, 100);
        
        return
       
    }
const bar = document.createElement("div");
const btnParent = document.createElement("div");
const text = document.createElement("p");
const check = document.createElement("button")
const trash = document.createElement("button")
check.classList.add("check")
check.innerHTML='<i id="check" class="fas fa-check"></i>'
trash.classList.add("trash")
trash.innerHTML='<i id="delete" class="fas fa-trash"></i>'


    //ADD CLASS - ID;
    text.innerText=input.value.toUpperCase();
    bar.classList.add("task-bar")
    
    //CHECK BUTTON
    
    //TRASH BUTTON
    
    //APPEND CHILD
    
    
    bar.appendChild(text);
    btnParent.appendChild(check)
    btnParent.appendChild(trash)
    bar.appendChild(btnParent)
    main.appendChild(bar)
    input.value="";

    // CHECK STATUS HERE

    check.addEventListener("click", function(){
        if(check.classList[0]==="check"){
            bar.classList.toggle("checked")
        }
    })
    trash.addEventListener("click", function(){
        if(trash.classList[0]==="trash"){
            bar.classList.add("fall");
            bar.addEventListener("transitionend", function(){
                bar.remove();
            })
            
        }
    })
}

// CHECK 

// CHECK FUNTION
let date = document.getElementById("date");
date.innerHTML=new Date().toLocaleDateString();