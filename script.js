const habilidades = [
    {programa: "Rhino 7", valor: "80"},
    {programa: "Keyshot", valor: "80"},
    {programa: "Figma", valor: "90"},
    {programa: "Fusion 360", valor: "70"},
    {programa: "MediBang Paint Pro", valor: "60"},
    {programa: "Illustrator", valor: "50"}
];

const donde = document.querySelector("#aqui");

habilidades.forEach((h) => {
    donde.innerHTML += `
        <tr>
            <td class="w-25">${h.programa}</td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 5">
                    <rect width="${h.valor}" height="10" fill="white"/> 
                </svg>
            </td>
        </tr>`;
});

// Portafolio
const portfolio = document.querySelector("#porotito");

async function datos(raw) {
    try {
        let consulta = await fetch(raw);
        let trabajos = await consulta.json();
        console.log(trabajos);
        
        trabajos.forEach((trabajo) => {
            portfolio.innerHTML += `
                <div class="col">
                    <div class="card shadow-sm h-100">
                        <img src="${trabajo.photo}" class="card-img-top" alt="${trabajo.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${trabajo.title}</h5>
                            <p class="flex-grow-1">${trabajo.description}</p>
                            <div class="d-flex justify-content-between align-items-center mt-auto">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">${trabajo.category}</button>
                                </div>
                                <span class="date-badge">${trabajo.date}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

datos("https://raw.githubusercontent.com/rosi2701/decimaClase/refs/heads/main/datos.json");



