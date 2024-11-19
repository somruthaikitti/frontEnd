function editColorText() {
    document.getElementById("title").style.color="red";
}

function hideText() {
    if (document.getElementById("title").classList.contains("hide")) {
        document.getElementById("title").classList.remove("hide");
    } else {
        document.getElementById("title").classList.add("hide");
    }
}

document.getElementById("HideBTN").addEventListener("click",editColorText)

function addElement() {
    let newElement = document.createElement("p")
    newElement.innerHTML = "New Element"
    document.getElementById("results").appendChild(newElement)    
}
document.getElementById("addElement").addEventListener("click",addElement)

function addElementInput() {
    let newElement = document.createElement("p")
    newElement.innerHTML = document.getElementById("todo").value
    document.getElementById("results").appendChild(newElement)
    document.getElementById("todo").value = ""
}
document.getElementById("addElementInput").addEventListener("click",addElementInput)