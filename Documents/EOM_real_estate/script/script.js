let allPlots = document.getElementById('plotLists');
let newPlots = JSON.parse(localStorage.getItem("records")) ?
JSON.parse(localStorage.getItem("records")) : plots;

console.log(Lists);
function initiate() {
    myList.innerHTML = ''
    Lists.forEach(element=>{
        myList.innerHTML=``
    }
    )}
    initiate();