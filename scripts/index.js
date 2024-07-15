// //voy a crear el div que va a servir como contenedor de las tarjetas

// //capture el main en mi html
// let capturarMainAbout = document.getElementById('main-about')
// console.log(capturarMainAbout);

// // ahora voy a crear un div
// let DIV = document.createElement('div')

// //ahora le voy agregar una clase a este div que cree
// DIV.classList.add('div-contenedor')
// DIV.classList.add('flex', 'flex-wrap', 'w-[100%]', 'bg-[#D2CCFF]', 'justify-center');

// //ahora le voy a meter el hijo que yo mismo cree a "main"
// capturarMainAbout.appendChild(DIV)


// function crearCARDS(imagen, tagline, titulo, descripcion) {
//     let card = `<article class="flex flex-col items-center m-4 w-[250px] border border-solid border-white p-4 rounded-lg shadow-lg shadow-gray-500">
//         <img class= "w-[100%]" h-[300px] src="${imagen}" alt="">
//         <h4 class= "font-bold">${titulo}</h4>
//         <h3 class= "font-bold">${tagline}</h3>
//         <p>${descripcion}</p>
//     </article>`
//     return card;
// }

// function inyectarCARDSaDIV(arrayDePeliculas) {
//     let imprimirTARJETA = "";
//     for (const pelicula of peliculas) {
//         imprimirTARJETA += crearCARDS(pelicula.image, pelicula.tagline, pelicula.title, pelicula.overview);

//     }
//     DIV.innerHTML = imprimirTARJETA;
//     return imprimirTARJETA;
// }


// // //Mostrar las cards con los datos pedidos en el div "#contenedor".
// let inyectarTarjetas = inyectarCARDSaDIV(peliculas);
// console.log(inyectarTarjetas);
// DIV.innerHTML += inyectarTarjetas;


// //ejercicio MOVIES
// //capture el input y el select
// let select = document.getElementById('select');
// let input = document.getElementById('input');


// const crearSelect = (movies) => {
//     const listaGeneros = (movies) => {
//         let listaGeneross = [...new Set(movies.flatMap(movies => movies.genres))].toSorted();
//         return listaGeneross;

//     }
//     const lista = listaGeneros(movies);
//     lista.forEach(generos => {
//         select.innerHTML += `<option value="${generos}">${generos}</option>`;
//     });


// };

// crearSelect(peliculas);

// //hacer los filtros
// const aplicarFiltros = () => {
//     const genero = select.value;
//     const texto = input.value.toLowerCase();
    
//     const peliculasFiltradas = peliculas.filter((pelicula) => {
//         const matchesGenre = genero === "all" || pelicula.genres.includes(genero);
//         const matchesSearchTerm = pelicula.title.toLowerCase().includes(texto);
    
//         return matchesGenre && matchesSearchTerm;
//     });
//     console.log(peliculasFiltradas);
    
//     DIV.innerHTML = inyectarCARDSaDIV(peliculasFiltradas);
// }

// select.addEventListener('change', aplicarFiltros) 
// input.addEventListener('input', aplicarFiltros)


// Captura el main en el HTML
let capturarMainAbout = document.getElementById('main-about');
console.log(capturarMainAbout);

// Crea el contenedor DIV para las tarjetas
let DIV = document.createElement('div');
DIV.classList.add('div-contenedor', 'flex', 'flex-wrap', 'w-[100%]', 'bg-[#D2CCFF]', 'justify-center');
capturarMainAbout.appendChild(DIV);

// Función para crear las tarjetas de películas
function crearCARDS(imagen, tagline, titulo, descripcion,id) {
    let card = `<article class="flex flex-col items-center m-4 w-[250px] border border-solid border-white p-4 rounded-lg shadow-lg shadow-gray-500">
        <a href="./detalles.html?id=${id}"><img class="w-[100%]" src="${imagen}" alt="${titulo}">
        <h4 class="font-bold">${titulo}</h4>
        <h3 class="font-bold">${tagline}</h3>
        <p>${descripcion}</p></a>
    </article>`;
    return card;
}

// Función para inyectar las tarjetas al DIV
function inyectarCARDSaDIV(arrayDePeliculas) {
    let imprimirTARJETA = "";
    for (const pelicula of arrayDePeliculas) { // Usar arrayDePeliculas en lugar de peliculas
        imprimirTARJETA += crearCARDS(pelicula.image, pelicula.tagline, pelicula.title, pelicula.overview,pelicula.id);
    }
    DIV.innerHTML = imprimirTARJETA;
}

// Función para crear y actualizar el menú desplegable de géneros
const crearSelect = (movies) => {
    const listaGeneros = (movies) => {
        // Obtener todos los géneros únicos y ordenarlos alfabéticamente
        let listaGeneross = [...new Set(movies.flatMap(movie => movie.genres))].sort();
        return listaGeneross;
    };   
    
    const lista = listaGeneros(movies);
    select.innerHTML += ""; // Limpiar opciones anteriores
    lista.forEach(genero => {
        select.innerHTML += `<option value="${genero}">${genero}</option>`;
    });
};
// console.log(listaGeneross);

// Función para aplicar los filtros y mostrar las películas filtradas
const aplicarFiltros = () => {
    const genero = select.value;
    const texto = input.value.toLowerCase();

    const peliculasFiltradas = peliculas.filter((pelicula) => {
        const matchesGenre = genero === "all" || pelicula.genres.includes(genero);
        const matchesSearchTerm = pelicula.title.toLowerCase().includes(texto);

        return matchesGenre && matchesSearchTerm;
    });

    inyectarCARDSaDIV(peliculasFiltradas);
};

// Eventos para aplicar filtros al cambiar el select o ingresar texto
select.addEventListener('change', aplicarFiltros);
input.addEventListener('input', aplicarFiltros);

// Llamar a crearSelect inicialmente para llenar el select con géneros
crearSelect(peliculas);

// Mostrar todas las tarjetas de películas inicialmente
inyectarCARDSaDIV(peliculas);

