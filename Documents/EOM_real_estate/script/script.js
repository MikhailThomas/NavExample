let myList = document.getElementById('plots');


let Lists = JSON.parse(localStorage.getItem('records')||'[]')

console.log(Lists);
function initiate() {
    myList.innerHTML = ''
    Lists.forEach(element=>{
        myList.innerHTML=``
    }
    )}
    initiate();