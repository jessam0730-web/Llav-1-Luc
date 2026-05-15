// Base de datos de letras (puedes ampliarla)
const lyricsDatabase = {
    'ENAMORADISIMO': "Si tuviera el poder de cambiar a mi antojo la historia\nVolvería a escribirla para llenar mi memoria\nCon todas esas canciones que siempre me hacen soñar\nViviría la gloria, no volvería nunca más\n\nEstar colado por ti es facilísimo\nY me tienes ya enamoradísimo\nSolo tú, nadie más, eres el máximo\nEstar como un flan en continuo temblor\nNo sé ni quién soy\nSuperenamoradísimo\n\nCada día es igual, un continuo rodar de la noria (girando en un carrusel)\nPreso en este espiral que confunde deseo y realidad (cada dos por tres)\nEspero que den las 4 (mi corazón)\nPara irte a buscar (muere de amor)\nY, de la mano, cruzar corriendo la ciudad\n\nEstar colado por ti es facilísimo\nY me tienes ya enamoradísimo\nSolo tú, nadie más, eres el máximo\nEstar como un flan en continuo temblor\nYa no sé ni quién soy, le acelero y no doy\nPie con bola, qué horror, tengo histérico el corazón\n\nEres la pimienta y la sal\nCada día me dominas más\n\nEstar colado por ti es facilísimo\nY me tienes ya enamoradísimo\nSolo tú, nadie más, eres el máximo\nEstar como un flan en continuo temblor\n\nEstar colado por ti es facilísimo\nY me tienes ya enamoradísimo\nSolo tú, nadie más, eres el máximo\nEstar como un flan en continuo temblor\nNo sé ni quién soy\nSuperenamoradísimo\n\n",
    'UN PUÑADO DE HUMO': "Llevo en los bolsillos\nchicles de fresa y limon\nmi amuleto de la buena suerte\ny el dinero necesario\npara que por fin podamos\nentre palomita y palomita\ndescubrir que nos interesa poco el cine\nno hay un film mejor\nque el que haremos hoy a dos\nen la ultima fila ella y yo\ndonde hay nuestra edad\nun sitio mejor para sonar\nPor amor cabemos los dos\ndentro de un punado de humo\nsolo por amor\nhay brillo de charol\nen mis ojos cada vez me gusta mas\nCon un vestidito nuevo\ntacos y carmin\nesas piernas llenas de peligro\nla sonrisa enorme\ngrande el beso que me da, resisto\nestoy a las puertas del infierno\nque sera, que la miran y ardo a fuego lento\nen el contraluz del cine a cara o cruz\nsabra que la quiero de verdad\ngrande cada dia mas\nlo nuestro no se puede parar\nPor amor cabemos los dos...\nEn los ojos al ponerse el sol\nPor amor cabemos los dos...\nEn mis ojos cada vez la quiero mas ...\n\n",
    'BESOS QUE MATAN': "Hey! fiesta en el aire\ncanción de primavera en la ciudad\nduerme la siesta\nbajo el tibio sol de media tarde\ncon una sonrisa, genial\nque hasta me tiemblan las rodillas\nno se me quita,\nde la piel, la miel de tus caricias\nCuerpo de infierno, besos que matan\nmi alimento son tus miradas\nvivo en un hormiguero gracias a ti\nflor de veneno, besos que matan\nno te tengo y todo me falta\nmuero si pienso que todo tiene un fin\n\nSe que en esta vida\nla luz es del color de quien la mira\nmientras me trates bien\nme vas a tener pa´ti solita\n\nCuerpo de infireno, besos que matan\nmi alimento son tus miradas\nvivo en un hormiguero gracias a ti\nflor de veneno, besos que matan\nno te tengo y todo me falta\nmuero si pienso que no me amas no\n\nVoy a ser quien de la cara esta vez\nsolo por saber que se siente ver\ncontra la pared a quien hoy pone red a mis sueños\n\nCuerpo de infierno, besos que matan...\n\n",
    'SELLADO CON UN BESO': "No puedes decirme que el verano termino\nQue te vas\nAcabas de hundirme,\n¿Como me voy a levantar?\nSi no se pensar sin ti\n\nMedio segundo separados\nParece una eternidad\nTodo el otono y el invierno\nNo lo vamos a superar\n\nEra para siempre\nSin parentesis nuestro amor\nSellado con un beso\nGrabado en un corazon\nCon tu nombre y el mi­o\nEn medio del malecon\n\nSonando en voz alta\nJusto donde rompe el mar,\nCada noche\nHaci­amos planes, que jamas se cumpliran\nComo duele recordar\nCada palmera, cada ola, cada grano de arena\nQue hay en esta playa\nSon testigos para toda la eternidad\nEra para siempre\nSin parentesis nuestro amor\nSellado con un beso\nGrabado en un corazon\nCon tu nombre y el mi­o\nEn medio del malecon\n\nQuedate,\nQue si es cierto que la fe mueve montanas\nQuedate, amor quedate\nEstando juntos no nos pararan\n\nEra para siempre\nSin parentesis nuestro amor\nEra transparente\nLimpio como un rayo de sol\nEra diferente\nSin parentesis nuestro amor\nSellado con un beso\nGrabado en un corazon\nCon tu nombre y el mi­o\nEn medio del malecon\n\n",
    'TRECE AÑOS': "",
    'COMO DECIRLE QUE LA QUIERO': "",
    'LA PUERTA DE LA ESCUELA': "",
    'NIÑOS DE LA CALLE': "",
    'CANTARÉ PARA TI': "",
    'DONDE DA LA VUELTA EL AIRE': "",
    'UN PUÑADO DE HUMO (VERSION ACUSTICA)': "Llevo en los bolsillos\nchicles de fresa y limon\nmi amuleto de la buena suerte\ny el dinero necesario\npara que por fin podamos\nentre palomita y palomita\ndescubrir que nos interesa poco el cine\nno hay un film mejor\nque el que haremos hoy a dos\nen la ultima fila ella y yo\ndonde hay nuestra edad\nun sitio mejor para sonar\nPor amor cabemos los dos\ndentro de un punado de humo\nsolo por amor\nhay brillo de charol\nen mis ojos cada vez me gusta mas\nCon un vestidito nuevo\ntacos y carmin\nesas piernas llenas de peligro\nla sonrisa enorme\ngrande el beso que me da, resisto\nestoy a las puertas del infierno\nque sera, que la miran y ardo a fuego lento\nen el contraluz del cine a cara o cruz\nsabra que la quiero de verdad\ngrande cada dia mas\nlo nuestro no se puede parar\nPor amor cabemos los dos...\nEn los ojos al ponerse el sol\nPor amor cabemos los dos...\nEn mis ojos cada vez la quiero mas ...\n\n",
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
