const plots = [{
        id: 1,
        img: './images/apartment/apartment_1_br_1_mil.jpg',
        title: 'For Sale',
        descr: 'New Apartment Nice View',
        price: 'R1 000,000/mo',
        beds: '1',
        bathroom: '2',
        parking: '2',
        size: '1789 Sq Ft',
    },
    {
        id: 2,
        img: './images/apartment/apartment_1_br_2_mil.jpg',
        title: 'For sale',
        descr: '',
        price: 'R2 000,000',
        beds: '1',
        bathroom: '2',
        parking: '2',
        size: '',
    },
    {
        id: 3,
        img: './images/apartment/apartment_2_br_3_mil.jpg',
        title: 'For sale',
        descr: '',
        price: 'R3 000,000',
        beds: '2',
        bathroom: '1',
        parking: '2',
        size: '',
    },
    {
        id: 4,
        img:'./images/apartment/apartment_3_br_3_mil.jpg',
        title: 'For sale',
        descr: '',
        price: 'R3 000,000',
        beds: '3',
        bathroom: '2',
        parking: '4',
        size: '',
    },
    {
        id: 5,
        img:'./images/apartment/apartment_3_br_3_mil.webp',
        title: 'For sale',
        descr: '',
        price: 'R3 000,000',
        beds: '3',
        bathroom: '4',
        parking: '2',
        size: '',
    },
    {
        id: 6,
        img:'./images/house/house_1_br_2_mil.jpg',
        title: 'For sale',
        descr: '',
        price: 'R2 000,000',
        beds: '1',
        bathroom: '1',
        parking: '1',
        size: '',
    },
    {
        id: 7,
        img:'./images/house/house_1_br_3_mil.jpg',
        title: 'For sale',
        descr: '',
        price: 'R3 000,00',
        beds: '1',
        bathroom: '3',
        parking: '3',
        size: '',
    },
    {
        id: 8,
        img:'./images/house/house_2_br_1_mil.jpg',
        title: 'For sale',
        descr: '',
        price: '1 000,000',
        beds: '2',
        bathroom: '2',
        parking: '2',
        size: '',
    },
    {
        id: 9,
        img:'./images/house/house_2_br_2_mil.jpg',
        title: 'For sale',
        descr: '',
        price: 'R2 000,000',
        beds: '2',
        bathroom: '2',
        parking: '2',
        size: '',
    },
    {
        id: 10,
        img:'./images/house/house_3_br_3_mil.jpg',
        title: 'For sale',
        descr: '',
        price: 'R3 000,000',
        beds: '3',
        bathroom: '5',
        parking: '4',
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