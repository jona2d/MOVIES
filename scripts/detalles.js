
const peliculasID = () => {
    const perro = new URLSearchParams(window.location.search).get("id");
    const idPeliculas = (mojito, id) => {
        return mojito.find((lagarto) => lagarto.id === id);
    };
    return idPeliculas(peliculas, perro);
};
let pelicula = peliculasID();
// Construir la estructura HTML utilizando plantillas de cadena
const detallesHTML = `
    <div class="flex gap-8 items-end ml-4">
        <img src="${pelicula.image}" alt="Imagen de ${pelicula.title}" class="w-[300px] h-[150px]">

        <article class="flex flex-col justify-start">
            <h2 class="text-2xl font-bold mb-4 text-center">${pelicula.title}</h2>
            <p class="text-lg italic mb-4 text-center">${pelicula.tagline}</p>
            <p class="mb-4 text-center">Géneros: ${pelicula.genres.join(', ')}</p>
            <p class="text-sm">${pelicula.overview}</p>
        </article>
    </div>
<div class="w-full flex flex-wrap justify-center items-center justify-around">
    <table class="mt-8 w-[400px] border-collapse border border-gray-200">
        <tbody>
            <tr>
                <td class="border border-gray-200 px-4 py-2 font-bold">Idioma Original</td>
                <td class="border border-gray-200 px-4 py-2">${pelicula.original_language}</td>
            </tr>
            <tr>
                <td class="border border-gray-200 px-4 py-2 font-bold">Fecha de Estreno</td>
                <td class="border border-gray-200 px-4 py-2">${pelicula.release_date}</td>
            </tr>
            <tr>
                <td class="border border-gray-200 px-4 py-2 font-bold">Duración</td>
                <td class="border border-gray-200 px-4 py-2">${pelicula.runtime} minutos</td>
            </tr>
            <tr>
                <td class="border border-gray-200 px-4 py-2 font-bold">Estado</td>
                <td class="border border-gray-200 px-4 py-2">${pelicula.status}</td>
            </tr>
        </tbody>
    </table>

    
            <table class="w-[400px] border-collapse border border-gray-200">
                <tbody>
                    <tr>
                        <td class="border border-gray-200 px-4 py-2 font-bold">Votación Promedio</td>
                        <td class="border border-gray-200 px-4 py-2">${pelicula.vote_average}</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-200 px-4 py-2 font-bold">Presupuesto</td>
                        <td class="border border-gray-200 px-4 py-2">${pelicula.budget}</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-200 px-4 py-2 font-bold">Ingresos</td>
                        <td class="border border-gray-200 px-4 py-2">${pelicula.revenue}</td>
                    </tr>
                </tbody>
            </table>
        
    </div>
`;
// Obtener el div de detalles y establecer su contenido HTML
const divDetalles = document.getElementById('DIVDETALLES');
divDetalles.innerHTML = detallesHTML;
