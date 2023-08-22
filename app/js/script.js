
const yesBox = document.createElement("button")
function search(event){
    if(event.key=="Enter"){
        let name = document.getElementById("nameBox").value;
        document.getElementById("nameBox").remove();
        document.getElementById("welcome").textContent = "Hi, " + name + ". Ready to start exploring?";
        yesBox.className = "btn"
        yesBox.innerText = "Let's Go!"
        document.getElementById("yeah").appendChild(yesBox);
    }
}

yesBox.addEventListener('click', renderMap)

function renderMap(){
    window.location.href = "../../html/mapPage.html"
}

function backFunc() {
    renderMap();
}






