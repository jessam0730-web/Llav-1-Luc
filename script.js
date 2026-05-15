// Base de datos de letras (puedes ampliarla)
const lyricsDatabase = {
    'ENAMORADISIMO': "Si tuviera el poder de cambiar a mi antojo la historia\nVolvería a escribirla para llenar mi memoria\nCon todas esas canciones que siempre me hacen soñar\nViviría la gloria, no volvería nunca más\n\nEstar colado por ti es facilísimo\nY me tienes ya enamoradísimo\nSolo tú, nadie más, eres el máximo\nEstar como un flan en continuo temblor\nNo sé ni quién soy\nSuperenamoradísimo\n\nCada día es igual, un continuo rodar de la noria (girando en un carrusel)\nPreso en este espiral que confunde deseo y realidad (cada dos por tres)\nEspero que den las 4 (mi corazón)\nPara irte a buscar (muere de amor)\nY, de la mano, cruzar corriendo la ciudad\n\nEstar colado por ti es facilísimo\nY me tienes ya enamoradísimo\nSolo tú, nadie más, eres el máximo\nEstar como un flan en continuo temblor\nYa no sé ni quién soy, le acelero y no doy\nPie con bola, qué horror, tengo histérico el corazón\n\nEres la pimienta y la sal\nCada día me dominas más\n\nEstar colado por ti es facilísimo\nY me tienes ya enamoradísimo\nSolo tú, nadie más, eres el máximo\nEstar como un flan en continuo temblor\n\nEstar colado por ti es facilísimo\nY me tienes ya enamoradísimo\nSolo tú, nadie más, eres el máximo\nEstar como un flan en continuo temblor\nNo sé ni quién soy\nSuperenamoradísimo\n\n",
    'Canción 2': "Letra de la segunda canción...\nVerso 1\nCoro...",
    'Canción 3': "Letra de la tercera canción...\nVerso 1\nCoro..."
};

function goToSong(name, youtubeId) {
    const detailView = document.getElementById('song-detail');
    const content = document.getElementById('detail-content');

    // Construimos el contenido dinámicamente
    content.innerHTML = `
        <h1 style="margin: 20px 0;">${name}</h1>
        <div class="video-container">
            <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/${youtubeId}?origin=${window.location.origin}" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h3>Letra</h3>
        <p class="lyrics">${lyricsDatabase[name] || "Letra no disponible."}</p>
    `;

    // Animamos la entrada de la vista
    detailView.classList.add('active');
}

function closeDetail() {
    const detailView = document.getElementById('song-detail');
    detailView.classList.remove('active');
    
    // Limpiamos el video para que deje de sonar al cerrar
    document.getElementById('detail-content').innerHTML = "";
}