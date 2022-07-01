const plots = [{
        id: 1,
        img: './images/apartment/apartment_1_br_1_mil.jpg',
        title: 'For Sale',
        Location:'Ottery',
        Price: 'R1 000,000',
        Type:'Apartment',
        Bedroom: '1 Bedroom',
        bathroom: '2',
        parking: '2',
        size: '1789 m²',
    },
    {
        id: 2,
        img: './images/apartment/apartment_1_br_2_mil.jpg',
        title: 'For sale',
        Location:'Fairways',
        Price: 'R2 000,000',
        Type:'Apartment',
        Bedroom: '1 Bedroom',
        bathroom: '2',
        parking: '2',
        size: '1800 m²',
    },
    {
        id: 3,
        img: './images/apartment/apartment_2_br_3_mil.jpg',
        title: 'For sale',
        Location:'Ottery',
        Price: 'R3 000,000',
        Type:'Apartment',
        Bedroom: '2 Bedroom',
        bathroom: '1',
        parking: '2',
        size: '3500 m²',
    },
    {
        id: 4,
        img:'./images/apartment/apartment_3_br_3_mil.jpg',
        title: 'For sale',
        Location:'Fairways',
        Price: 'R3 000,000',
        Type:'Apartment',
        Bedroom: '3 Bedroom',
        bathroom: '2',
        parking: '4',
        size: '3690 m²',
    },
    {
        id: 5,
        img:'./images/apartment/apartment_3_br_3_mil.webp',
        title: 'For sale',
        Location:'Ottery',
        Price: 'R3 000,000',
        Type:'Apartment',
        Bedroom: '3 Bedroom',
        bathroom: '4',
        parking: '2',
        size: '3560 m²',
    },
    {
        id: 6,
        img:'./images/house/house_1_br_2_mil.jpg',
        title: 'For sale',
        Location:'Fairways',
        Price: 'R2 000,000',
        Type:'House',
        Bedroom: '1 Bedroom',
        bathroom: '1',
        parking: '1',
        size: '2450 m²',
    },
    {
        id: 7,
        img:'./images/house/house_1_br_3_mil.jpg',
        title: 'For sale',
        Location:'Ottery',
        Price: 'R3 000,00',
        Type:'House',
        Bedroom: '1 Bedroom',
        bathroom: '3',
        parking: '3',
        size: '3400 m²',
    },
    {
        id: 8,
        img:'./images/house/house_2_br_1_mil.jpg',
        title: 'For sale',
        Location:'Fairways',
        Price: '1 000,000',
        Type:'House',
        Bedroom: '2 Bedroom',
        bathroom: '2',
        parking: '2',
        size: '1908 m²',
    },
    {
        id: 9,
        img:'./images/house/house_2_br_2_mil.jpg',
        title: 'For sale',
        Location:'Ottery',
        Price: 'R2 000,000',
        Type:'House',
        Bedroom: '2 Bedroom',
        bathroom: '2',
        parking: '2',
        size: '2340 m²',
    },
    {
        id: 10,
        img:'./images/house/house_3_br_3_mil.jpg',
        title: 'For sale',
        Location:'Fairways',
        Price: 'R3 000,000',
        Type:'House',
        Bedroom: '3 Bedroom',
        bathroom: '5',
        parking: '4',
        size: '3890 m²',
    },
]
// --------------------------------
let allPlots = document.getElementById('plotLists');
let newPlots = JSON.parse(localStorage.getItem("records")) ?
JSON.parse(localStorage.getItem("records")) : plots;
// -------------------------------
  function initiate(plot) {
    const container = document.getElementById('plotLists');
    container.innerHTML ='';
    plot.forEach(element => {
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
            <h5 class="text-white">${element.Location}</h5>
            <h5 class="text-white">${element.Type}</h5>
            <h6 class="fw-bold text-white">${element.Price}</h6>
            <div class="d-flex gap-3">
            <h6 class="text-white"><i class="bi bi-rulers"></i>${element.size}</h6>
            <h6 class="text-white"><i class="fa-solid fa-bed"></i>${element.Bedroom}</h6>
            <h6 class="text-white"><i class="fa-solid fa-bath"></i>${element.bathroom}</h6>
            <h6 class="text-white"><i class="fa-solid fa-car"></i>${element.parking}</h6>
            </div>
            </div>
            </div>
            </div>
            `
    })
}

initiate(newPlots);
// -----------------------------------
function filteredType(e) {
    const type = e.target.value;
    if (type === "all") {
      return initiate(newPlots);
    }
    const filtered = newPlots.filter((property) =>{
        return property.Type === type
    } );
    
    return initiate(filtered);
  }
// ------------------------------
  function filteredLocation(e) {
    const location = e.target.value;
    if (location === "all") {
      return initiate(newPlots);
    }
    console.log(filteredLocation)
    const filtered = newPlots.filter((property) =>{
        return property.Location === location
    } );
    
    return initiate(filtered);
  }
// ------------------------------
  function filteredBedroom(e) {
    const bedroom = e.target.value;
    if (bedroom === "all") {
      return initiate(newPlots);
    }
    const filtered = newPlots.filter((property) =>{
        return property.Bedroom === bedroom
    } );
    
    return initiate(filtered);
  }
// -----------------------------------
  function filteredPrice(e) {
    const price = e.target.value;
    if (price === "all") {
      return initiate(newPlots);
    }
    const filtered = newPlots.filter((property) =>{
        return property.Price === price
    } );
    
    return initiate(filtered);
  }
  
