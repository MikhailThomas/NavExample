let red = document.getElementById("RColor");
let green = document.getElementById("GColor");
let blue = document.getElementById("BColor");

let result = document.getElementById("Result");
let button = document.getElementById("addRecord");

button.addEventListener('click', () =>{
    let RCode = red.value.slice(0,2).toString(16);
    let GCode = green.value.slice(0,2).toString(16);
    let BCode = blue.value.slice(0,2).toString(16);
    switch(RCode){
        case '0':
            RCode = '00';
        break; 
    }
    switch(GCode){
        case '0':
            GCode = '00';
        break; 
    }
    switch(BCode){
        case '0':
            BCode = '00';
            break; 
        }
        let newHex = `#${RCode}${GCode}${BCode}`;
        document.body.style.backgroundColor = newHex;
    list.push({
        name: document.getElementById('name').value,
        color: newHex
    });
});

(function loadData() {
    console.table(list);
})();

let list = JSON.parse(localStorage.getItem('addRecords')) ? JSON.parse(localStorage.getItem('addRecords')) : [{
    name: '',
    newHex: '',
}];