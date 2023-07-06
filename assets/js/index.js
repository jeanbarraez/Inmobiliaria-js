const propiedades = [
  {
    nombre: "Casa en condominio",
    descripcion: "Buena ubicacion geografia, ha pasos del metro",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLOsvHDmHDUgtLEzRPQ08vOrU6IoC_oOVdQ&usqp=CAU",
    cuartos: 2,
    metros: 97,
    id: 2,
  },
  {
    nombre: "Casa de campo",
    descripcion: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    cuartos: 2,
    metros: 170,
    id: 1,
  },

  {
    nombre: "Casa en el centro",
    descripcion:
      "metros,conexiones,mall,locomocion y muchas cosas mas, cerca de ti",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa82OqYPkBGW18GCQCxJG31y1_Jb24A542zAK2enFKr2RB8c5RcPhU-KlARY45v_ZfYmI&usqp=CAU",
    cuartos: 3,
    metros: 120,
    id: 3,
  },
  {
    nombre: "Casa rodante",
    descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    cuartos: 1,
    metros: 6,
    id: 4,
  },
  {
    nombre: "Departamento",
    descripcion:
      "Desde las alturas todo se ve mejora 15 minutos del centro de la ciudad, facil acceso",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KWjjI_s9KH2xJDBfopT35fYd9tAM7sU7cRsLsoGh3emkMcNALygMWbZAjJp0m7btyEY&usqp=CAU",
    cuartos: 3,
    metros: 140,
    id: 5,
  },
  {
    nombre: "Departamento",
    descripcion:
      "Comodo Apto en el centro de la ciudad , pocos metros de plaza de arma ",
    src: "https://img10.naventcdn.com/avisos/11/00/90/05/26/04/720x532/1023944111.jpg",
    cuartos: 2,
    metros: 76,
    id: 6,
  },
];

//se llama a todos los inputs para convertirlo en array
let entrar = Array.from(document.querySelectorAll("main input")); //contedor

let total = document.querySelector("#total");
let inmuebles = document.querySelector("#propiedad");
let buscar = document.querySelector("#buscar");
let borrar = document.querySelector("#borrar");

function casa(propiedades) {
  total.innerHTML = propiedades.length; //tamano del arreglo
  inmuebles.innerHTML = ""; //limpiar la lista para que no se duplique
  for (let inmueble of propiedades) {//recorre cada objeto dentro del array
    let divPropiedad = document.createElement("div"); //se crea un elemento
    divPropiedad.classList.add("item"); //se crea una clase para llamarla del css
    divPropiedad.innerHTML = `
    <article>
      <div class ="imagen">
        <img src="${inmueble.src}" alt="${inmueble.nombre}"/> 
      </div>
      <section>
        <h5>${inmueble.nombre}</h5>
        <h6>${inmueble.descripcion}<h5>
        <div class ="parrafo">
          <p id="habitacion"> Cuartos : ${inmueble.cuartos}</p>
          <p id="medida"> Metros : ${inmueble.metros}</p>
        </div>
        <p> id : ${inmueble.id}</p>
        <a href="#"><button id="boton">Ver más</button></a>
     </section>
   </article>`;

    inmuebles.appendChild(divPropiedad); //agrega un elemento al final de lista
  }
}

casa(propiedades);
let filtrar_viviendas = () => {
  let [{ value: cant }, { value: desde }, { value: hasta }] = entrar;
  if (!desde || !hasta || !cant) {
    alert("Por favor Introduce los valores solicitados");
    return false;
  }
  const filtrarProp = propiedades.filter(
    (filtrar) =>
      filtrar.metros >= desde &&
      filtrar.metros <= hasta &&
      filtrar.cuartos == cant
  );

  casa(filtrarProp);
};

buscar.addEventListener("click", filtrar_viviendas);

let limpiar_inputs = () => {
  entrar.forEach((input) => (input.value = " "));
  casa(propiedades);
};

borrar.addEventListener("click", limpiar_inputs);

/*for (let inmueble of propiedades) {
  const viviendas = document.querySelector(".propiedad");

  const template = `
    
    <article class="propi">
      <div class ="imagen">
        <img src="${inmueble.src}"/> 
      </div>
      <section>
        <h5>${inmueble.nombre}</h5>
        <h6>${inmueble.descripcion}<h5>
        <div class ="parrafo">
          <p id="habitacion"> Cuartos : ${inmueble.cuartos}</p>
          <p id="medida"> Metros : ${inmueble.metros}</p>
        </div>
        <p> id : ${inmueble.id}</p>
        <a href="#"><button id="boton">Ver más</button></a>
     </section>
    </article>`;

  viviendas.innerHTML += template;
}*/
