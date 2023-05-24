//absorcion de api para las hamburguesas


const traebugers = async () => {
    const respuesta = await fetch('https://646abfc17d3c1cae4ce2bf06.mockapi.io/H1Z1/Hamburguesas');
    const hamburguesas = await respuesta.json();
    //console.log(hamburguesas)
    return hamburguesas;
}


const mostrarBurga = (data, elementoPadre, dataDelay) => {
    const box = document.createElement("div")
    box.className = "box"
    box.setAttribute("data-aos", "fade-up")
    box.setAttribute("data-aos-delay", dataDelay)
    elementoPadre.appendChild(box)


    const img = document.createElement("img")
    img.src = data.imagen
    box.appendChild(img)

    const content = document.createElement("div");
    content.className = "content";
    box.appendChild(content);

    const stars = document.createElement("div");
    stars.className = "stars";
    content.appendChild(stars);

    console.log(data.estrellas);

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("i")
        if (i + 1  > data.estrellas) star.className = "far fa-star";
        else star.className = "fas fa-star";
        stars.appendChild(star);
    }

    const title = document.createElement("h3");
    title.innerText = data.nombres;
    content.appendChild(title);

    const price = document.createElement("div");
    price.className = "price";
    price.innerText = data.precio;
    content.appendChild(price);

    const buyButton = document.createElement("a");
    buyButton.className = "btn";
    buyButton.innerText = "Comprar";

}

const generarburguer = async () => {
    const padre = document.getElementById("burgacontainer");
    const delayInicial = 150;
    const burguerz = await traebugers();

    for (let i = 0; i < burguerz.length; i++) {
        const delayActual = delayInicial * (i + 1);
        const burgaActual = burguerz[i];
        mostrarBurga(burgaActual, padre, delayActual)

    }
}
generarburguer();