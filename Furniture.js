let doc = document.body;
let bedroom = doc.querySelector('.Items-List.Bedroom')
let kitchen = doc.querySelector('.Items-List.Kitchen')
let living = doc.querySelector('.Items-List.Liv')
filterBedroom = ()=>{
    bedroom.style.display = 'grid';
    kitchen.style.display = 'none';
    living.style.display = 'none';
}
filterKitchen = ()=>{
    bedroom.style.display = 'none';
    kitchen.style.display = 'grid';
    living.style.display = 'none';
}
filterLiving = ()=>{
    bedroom.style.display = 'none';
    kitchen.style.display = 'none';
    living.style.display = 'grid';
}