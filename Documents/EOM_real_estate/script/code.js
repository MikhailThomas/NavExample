const plots = [{
        id: 1,
        img: './images/apartment/apartment_1_br_1_mil.jpg',
        title: 'To Sale',
        descr: 'New Apartment Nice View',
        price: '$11,000/mo',
        beds: '3',
        bathroom: '3',
        parking: '1',
        size: '1789 Sq Ft',
    },
    {
        id: 2,
        img: './images/apartment/apartment_1_br_2_mil.jpg',
        title: '',
        descr: '',
        price: '',
        beds: '',
        bathroom: '',
        parking: '',
        size: '',
    },
    {
        id: 3,
        title: '',
        descr: '',
        price: '',
        beds: '',
        bathroom: '',
        parking: '',
        size: '',
    },
    {
        id: '4',
        title: '',
        descr: '',
        price: '',
        beds: '',
        bathroom: '',
        parking: '',
        size: '',
    },
    {
        id: '5',
        title: '',
        descr: '',
        price: '',
        beds: '',
        bathroom: '',
        parking: '',
        size: '',
    },
    {
        id: '6',
        title: '',
        descr: '',
        price: '',
        beds: '',
        bathroom: '',
        parking: '',
        size: '',
    },
    {
        id: '7',
        title: '',
        descr: '',
        price: '',
        beds: '',
        bathroom: '',
        parking: '',
        size: '',
    },
    {
        id: '8',
        title: '',
        descr: '',
        price: '',
        beds: '',
        bathroom: '',
        parking: '',
        size: '',
    },
    {
        id: '9',
        title: '',
        descr: '',
        price: '',
        beds: '',
        bathroom: '',
        parking: '',
        size: '',
    },
    {
        id: 10,
        title: '',
        descr: '',
        price: '',
        beds: '',
        bathroom: '',
        parking: '',
        size: '',
    },
]


// let myList = document.getElementById('plots');


// let Lists = JSON.parse(localStorage.getItem('records') || '[]')

let allPlots = document.getElementById('plotLists');
let newPlots = JSON.parse(localStorage.getItem("records")) ?
JSON.parse(localStorage.getItem("records")) : [];



  function initiate() {
    const container = document.getElementById('plotLists');
    plots.forEach(element => {
        container.innerHTML += `
        <!-- apartment -->
            <div class="col-md-6 justify-content-center">
            <div style= "background: url(${element.img}); background-size:cover; background-repeat:no-repeat" class ="card my-2">
            <div id="coverHover">
            </div>
            <div class = "card-body">
            <div class ="row justify-content-center align-items-end h-100">
            <div class ="col-md-6">
            <button id="btn" class="text-white rounded">${element.title}</button>
            <h5 class="text-white">${element.descr}</h5>
            <h6 class="fw-bold text-white">${element.price}</h6>
            <div class="d-flex gap-3">
            <h6 class="text-white"><i class="bi bi-rulers"></i>${element.size}</h6>
            <h6 class="text-white"><i class="fa-solid fa-bed"></i>${element.beds}</h6>
            <h6 class="text-white"><i class="fa-solid fa-bath"></i>${element.bathroom}</h6>
            <h6 class="text-white"><i class="fa-solid fa-car"></i>${element.parking}</h6>
            </div>
            </div>
            </div>
            </div>
            `
    })
}
initiate();