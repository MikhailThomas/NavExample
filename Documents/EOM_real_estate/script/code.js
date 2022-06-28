let myList = document.getElementById('plots');


let Lists = JSON.parse(localStorage.getItem('records')||'[]')

console.log(Lists);
function initiate() {
    myList.innerHTML = ''
    Lists.forEach(element=>{
        myList.innerHTML=`
        <!-- apartment -->
        <div>
            <img src="./images/apartment/apartment_1_br_1_mil.jpg" alt="">
            <i class="bi bi-rulers"></i>
            <i class="fa-solid fa-bed"></i>
            <i class="fa-solid fa-bath"></i>
            <i class="fa-solid fa-car"></i>
        </div>
        <div>
            <img src="./images/apartment/apartment_1_br_2_mil.jpg" alt="">
        </div>
        <div>
            <img src="./images/apartment/apartment_2_br_3_mil.jpg" alt="">
        </div>
        <div>
            <img src="./images/apartment/apartment_3_br_3_mil.jpg" alt="">
        </div>
        <div>
            <img src="./images/apartment/apartment_3_br_3_mil.webp" alt="">
        </div>
        <!-- house -->
        <div>
            <img src="./images/house/house_1_br_2_mil.jpg" alt="">
        </div>
        <div>
            <img src="./images/house/house_2_br_1_mil.jpg" alt="">
        </div>
        <div>
            <img src="./images/house/house_2_br_2_mil.jpg" alt="">
        </div>
        <div>
            <img src="./images/house/house_3_br_3_mil.jpg" alt="">
        </div>
        <div>
            <img src="./images/house/house_1_br_3_mil.jpg" alt="">
        </div>`
    }
)}
initiate();