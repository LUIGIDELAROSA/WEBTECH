const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    imageView.style.border = 0;
}
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

const inputBoxs = document.getElementById("input-boxs");
const listContainers = document.getElementById("list-containers");

function addTasks(){
    if(inputBoxs.value === ''){
        alert("Write Something");
    }
    else{
        let h4 = document.createElement("h4");
        h4.innerHTML = inputBoxs.value;
        listContainers.appendChild(h4);
        let p = document.createElement("p");
        p.innerHTML = "\u00d7";
        h4.appendChild(p);
    }
    inputBoxs.value = "";
}
listContainers.addEventListener("click", function(a){
    if(a.target.tagName === "H4"){
        a.target.classList.toggle("checked");
    }
    else if(a.target.tagName === "P"){
        a.target.parentElement.remove();
    }
}, false);