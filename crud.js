"use strict";

let cars = [
    {
        marca: "Mercedez",
        modelo: "Clase 4",
        ano: 1986,
        color: "rojo",
        precio: 65000,
        url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fed%2F0e%2F5b%2Fed0e5b95ff3551e0da12c2f19a2966e7.jpg&f=1&nofb=1",

    },

    {

        marca: "Ferrari",
        modelo: "F8",
        ano: 2021,
        color: "Amarillo",
        precio: 120000,
        url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thedrive.com%2Fcontent%2F2020%2F08%2FIMG_1359.jpg%3Fquality%3D85%26width%3D1440%26quality%3D70&f=1&nofb=1",

    },


    {

        marca: "Maserati",
        modelo: "Levante",
        ano: 2021,
        color: "negro",
        precio: 120000,
        url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaseratiecuador.com%2Fstock%2Fwp-content%2Fuploads%2F2020%2F04%2Fmaserati-levante-GRIS-1.jpg&f=1&nofb=1",

    }
];

// Aqui van la clase que conecta el formulario//
const auto = document.getElementById("Container-cars");
showCars();
//Aqui van los inputs//

const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const ano = document.getElementById("año");
const color = document.getElementById("color");
const precio = document.getElementById("precio");
const foto = document.getElementById("foto");
// Aqui van los botones //

const buttonActualizar=  document.getElementById("button-actualizar");
const buttonCancelar =  document.getElementById("button-cancelar");
const buttonEditar = document.getElementById("button-editar");
const buttonelimitar = document.getElementById("button-eliminar");
const buttonAgregar = document.getElementById("button-agregar");

//Excepciones//
let updateIndex = 0;
buttonAgregar.addEventListener("click", function(event){
    event.preventDefault();
});


//Funciones//

function showCars(){
    auto.innerHTML ="";
    for (let i = 0; i< cars.length; i++) {
        auto.innerHTML += `<div class="card">
                <div class="img">
 
                    <img src="${cars[i].url}"
                        alt="Mercedez">

                </div>
                <div class="information">

                    <table>
                        <tr>
                            <td>Marca:</td>
                            <td>${cars[i].marca}</td>
                        </tr>

                        <tr>
                            <td>Modelo:</td>
                            <td>${cars[i].modelo}</td>
                        </tr>

                        <tr>
                            <td>Año:</td>
                            <td>${cars[i].ano}</td>
                        </tr>

                        <tr>
                            <td>Color:</td>
                            <td>${cars[i].color}</td>
                        </tr>

                        <tr>
                            <td>Precio:</td>
                            <td>${cars[i].precio}</td>
                        </tr>


                        <tr>
                        <td>
                            
                            <button id="button-editar" onclick = "updatecatch(${i})">Editar</button>
                            <button id="button-eliminar" onclick ="deletecar(${i})">Eliminar</button>

                        </td>
                        </tr>
                    
                    </table>
                    
                    

                </div>
            </div>`
    }
        
    


};

function creative(){
     if (marca.value != '' && modelo.value != '' && color.value != '' && ano.value != '' && precio.value != '' && foto.value != '') {
        cars.push ({    
        marca: marca.value,
        modelo: modelo.value,
        ano: ano.value,
        color: color.value,
        precio: precio.value,
        url: foto.value
        });

        clear();
        showCars();

            }else{
        alert('Es necesario llenar todos los campos');
    }   
        
};

function clear(){
    marca.value = "";
    modelo.value = "";
    color.value = "";
    precio.value = "";
    foto.value = "";
    ano.value = "";
};

function updatecatch(index) {
    marca.value = cars[index].marca;
    modelo.value = cars[index].modelo;
    color.value = cars[index].color;
    precio.value = cars[index].precio;
    foto.value = cars[index].url;
    ano.value = cars[index].ano; 


    buttonAgregar.classList.toggle("d-none");
    buttonActualizar.classList.remove("d-none");
    buttonCancelar.classList.remove("d-none");

    updateIndex = index;
}


function updatecar(){
    
    cars[updateIndex].marca = marca.value;
    cars[updateIndex].modelo = modelo.value;
    cars[updateIndex].color = color.value;
    cars[updateIndex].precio = precio.value;
    cars[updateIndex].url = foto.value;
    cars[updateIndex].ano = ano.value;
    
    clear();
    showCars();
    buttonAgregar.classList.remove("d-none");
    buttonActualizar.classList.toggle("d-none");
    buttonCancelar.classList.toggle("d-none");
}


function cancelar(){
    buttonAgregar.classList.remove("d-none");
    buttonActualizar.classList.toggle("d-none");
    buttonCancelar.classList.toggle("d-none");

    clear();
}

function deletecar(index){

    cars.splice(index, 1);
    clear();
    showCars();

}


