    const plots = [{
            id: 1,
            img: './images/apartment/apartment_1_br_1_mil.jpg',
            title: 'For Sale',
            Location: 'Ottery',
            Price: 'R1 000,000',
            Type: 'Apartment',
            Bedroom: '1',
            bathroom: '2',
            parking: '2',
            size: '1789 m²',
        },
        {
            id: 2,
            img: './images/apartment/apartment_1_br_2_mil.jpg',
            title: 'For sale',
            Location: 'Fairways',
            Price: 'R2 000,000',
            Type: 'Apartment',
            Bedroom: '1',
            bathroom: '2',
            parking: '2',
            size: '1800 m²',
        },
        {
            id: 3,
            img: './images/apartment/apartment_2_br_3_mil.jpg',
            title: 'For sale',
            Location: 'Ottery',
            Price: 'R3 000,000',
            Type: 'Apartment',
            Bedroom: '2',
            bathroom: '1',
            parking: '2',
            size: '3500 m²',
        },
        {
            id: 4,
            img: './images/apartment/apartment_3_br_3_mil.jpg',
            title: 'For sale',
            Location: 'Fairways',
            Price: 'R3 000,000',
            Type: 'Apartment',
            Bedroom: '3',
            bathroom: '2',
            parking: '4',
            size: '3690 m²',
        },
        {
            id: 5,
            img: './images/apartment/apartment_3_br_3_mil.webp',
            title: 'For sale',
            Location: 'Ottery',
            Price: 'R3 000,000',
            Type: 'Apartment',
            Bedroom: '3',
            bathroom: '4',
            parking: '2',
            size: '3560 m²',
        },
        {
            id: 6,
            img: './images/house/house_1_br_2_mil.jpg',
            title: 'For sale',
            Location: 'Fairways',
            Price: 'R2 000,000',
            Type: 'House',
            Bedroom: '1',
            bathroom: '1',
            parking: '1',
            size: '2450 m²',
        },
        {
            id: 7,
            img: './images/house/house_1_br_3_mil.jpg',
            title: 'For sale',
            Location: 'Ottery',
            Price: 'R3 000,00',
            Type: 'House',
            Bedroom: '1',
            bathroom: '3',
            parking: '3',
            size: '3400 m²',
        },
        {
            id: 8,
            img: './images/house/house_2_br_1_mil.jpg',
            title: 'For sale',
            Location: 'Fairways',
            Price: '1 000,000',
            Type: 'House',
            Bedroom: '2',
            bathroom: '2',
            parking: '2',
            size: '1908 m²',
        },
        {
            id: 9,
            img: './images/house/house_2_br_2_mil.jpg',
            title: 'For sale',
            Location: 'Ottery',
            Price: 'R2 000,000',
            Type: 'House',
            Bedroom: '2',
            bathroom: '2',
            parking: '2',
            size: '2340 m²',
        },
        {
            id: 10,
            img: './images/house/house_3_br_3_mil.jpg',
            title: 'For sale',
            Location: 'Fairways',
            Price: 'R3 000,000',
            Type: 'House',
            Bedroom: '3',
            bathroom: '5',
            parking: '4',
            size: '3890 m²',
        },
    ]

    let allPlots = document.getElementById('tablePlot');
    let newPlots = JSON.parse(localStorage.getItem("records")) ?
        JSON.parse(localStorage.getItem("records")) : plots;

    function initiate(plot) {
        const plotContainer = document.getElementById('tablePlot');
        plotContainer.innerHTML = '';
        plot.forEach((e) => {
            plotContainer.innerHTML += `
                        <tr>
                        <th scope="row">${e.id}</th>
                        <td><img src="${e.img}" alt="img"></td>
                        <td>${e.Location}</td>
                        <td>${e.Price}</td>
                        <td>${e.Type}</td>
                        <td>${e.Bedroom}</td>
                        <td>${e.bathroom}</td>
                        <td>${e.parking}</td>
                        <td><button class="btn"><i class="bi bi-gear"></i></button></td>
                        <td><button class="btn"><i class="bi bi-trash3" onclick="remove(${e.id})"></i></button></td>
                        </tr>
        `
        });
    }

    initiate(newPlots);
    function remove(id){
        newPlots.splice(id-1,1);
        newPlots.forEach((Element,index)=>{
            Element.id=index+1;
        })
        initiate(newPlots);
    }
    

    function filteredType(e) {
        const Type = e.target.value;
        if (Type === "all") {
            return initiate(newPlots);
        }
        const filtered = newPlots.filter((plots) => {
            return plots.Type === Type
        });

        return initiate(filtered);
    }
    // ------------------------------
    function filteredLocation(e) {
        const Location = e.target.value;
        if (Location === "all") {
            return initiate(newPlots);
        }
        console.log(filteredLocation);
        const filtered = newPlots.filter((plot) => {
            return plot.Location === Location
        });

        return initiate(filtered);
    }
    // ------------------------------
    function Bedroom(e) {
        const Bedroom = e.target.value;
        if (Bedroom === "all") {
            return initiate(newPlots);
        }
        const filtered = newPlots.filter((plot) => {
            return plot.Bedroom == Bedroom
        });

        return initiate(filtered);
    }
    // -----------------------------------
    function Price(e) {
        const Price = e.target.value;
        if (Price === "all") {
            return initiate(newPlots);
        }
        const filtered = newPlots.filter((plot) => {
            return plot.Price === Price
        });

        return initiate(filtered);
    }