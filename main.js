const gatos = [
    {
      name: "Rodolfo",
      shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "http://www.placekitten.com/400"
    },
  
    {
      name: "Muzzarella",
      shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "http://www.placekitten.com/500"
    },
  
    {
      name: "Artilugia",
      shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "http://www.placekitten.com/600"
    },
  
    {
      name: "Wosito",
      shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "http://www.placekitten.com/700"
    },
  
    {
      name: "Calamardo",
      shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
      longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
      img: "http://www.placekitten.com/700"
    },
    
  ]


  let avisos = ""

  for (let i = 0; i < gatos.length; i++) {
    avisos += `
    <div class="avisos">
        <div><img class="fotos" src=${gatos[i].img} alt=${gatos[i].name}></div>
        <div class="textoavisos">
        <h2>${gatos[i].name}</h2>
        <p>${gatos[i].shortDesc}</p>
        <button class="boton">Ver mas</button>
        </div>
    </div>`;

}

const seccionGatitos = document.getElementById("gatitos")

seccionGatitos.innerHTML = avisos;


//a partir de aca, modal

const listaDeGatitos = document.getElementsByClassName("avisos")
const listaDeBotones = document.getElementsByClassName("boton")
const contenedorModal = document.querySelector("#contenedorModal")


for (let i = 0; i < listaDeBotones.length; i++) {
    listaDeBotones[i].onclick = () => {
    
    contenedorModal.innerHTML = 
        `
        <div id="mymodal" class="modal nomostrar">
            <div class="modalcontent">
                <h2>${gatos[i].name}</h2>
                <div><img class="fotosmodal" src="${gatos[i].img}"></div>
                <p>${gatos[i].longDesc}</p>
                <div><button id="cerrarModal">Cerrar Modal</button></div>
            </div>
        </div>
`
const modal = document.getElementById("mymodal")

modal.classList.remove("nomostrar")

const botonCerrarModal = document.getElementById("cerrarModal")
botonCerrarModal.onclick = () => {
   modal.classList.add("nomostrar")
} 

}
}

