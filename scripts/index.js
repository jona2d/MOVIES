//voy a crear el div que va a servir como contenedor de las tarjetas

//capture el main en mi html
let capturarMainAbout = document.getElementById('main-about')
console.log(capturarMainAbout);

// ahora voy a crear un div
let crearDIV = document.createElement('div')

//ahora le voy agregar una clase a este div que cree
crearDIV.classList.add('div-contenedor')
crearDIV.classList.add('flex', 'flex-wrap', 'w-[100%]', 'bg-[#D2CCFF]', 'justify-center');

//ahora le voy a meter el hijo que yo mismo cree a "main"
capturarMainAbout.appendChild(crearDIV)


function crearCARDS(imagen,tagline,titulo,descripcion){
    let card = `<article class="flex flex-col items-center m-4 w-[250px] border border-solid border-white p-4 rounded-lg shadow-lg shadow-gray-500">
        <img class= "w-[100%]" h-[300px] src="${imagen}" alt="">
        <h4 class= "font-bold">${titulo}</h4>
        <h3 class= "font-bold">${tagline}</h3>
        <p>${descripcion}</p>
    </article>`

    return card;
}

function inyectarCARDSaDIV(arrayDePeliculas){
    let imprimirTARJETA ="";
    for (const pelicula of peliculas) {
        imprimirTARJETA += crearCARDS(pelicula.image,pelicula.tagline,pelicula.title,pelicula.overview);

    }
    return imprimirTARJETA;
}


// //Mostrar las cards con los datos pedidos en el div "#contenedor".
let inyectarTarjetas = inyectarCARDSaDIV(peliculas);
console.log(inyectarTarjetas);
crearDIV.innerHTML += inyectarTarjetas;