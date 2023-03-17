const URL_API = 'https://63823c6a281f14ffefa3ab9b.mockapi.io/users/';
let inBuscar = document.getElementById("inputGet1Id");
let resultadosDiv = document.getElementById("results");
let nombre = document.getElementById("inputPostNombre");
let apellido = document.getElementById("inputPostApellido");
let inModificar = document.getElementById("inputPutId");
let putNombre = document.getElementById("inputPutNombre");
let putApellido = document.getElementById("inputPutApellido");
let inBorrar = document.getElementById("inputDelete");
let usersArray = [];
let contenidoResultado = '';


function sacarDisabled(button) {
    button.removeAttribute("disabled");
}

// Lista
function listar(datos) {
    resultadosDiv.innerHTML = "";
    usersArray = datos;
    for (let user of usersArray) {
        let userInfo = document.createElement("div");
        userInfo.classList.add("m-1");
        contenidoResultado = `
      <p>ID: ${user.id}</p>
      <p>Name: ${user.name}</p>
      <p>Lastname: ${user.lastname}</p>
     `;
        userInfo.innerHTML = contenidoResultado;
        resultadosDiv.appendChild(userInfo);
    }
}

//Listado y obtener los datos según ID
document.getElementById("btnGet1").addEventListener('click', function () {
    resultadosDiv.innerHTML = "";
    if (inBuscar.value.length === 0) {
        fetch(URL_API)
            .then(respuesta => respuesta.json())
            .then(function (datos) {
                listar(datos);
            })
    } else {

        let resultadoDeObtener = obtener(inBuscar.value);
        console.log(resultadoDeObtener);
        resultadoDeObtener.then(datos => console.log(datos));
        resultadoDeObtener.then(function (datos) {
            let userInfo = document.createElement("div");
            userInfo.classList.add("m-1");
            contenidoResultado = `
                      <p>ID: ${datos.id}</p>
                      <p>Name: ${datos.name}</p>
                      <p>Lastname: ${datos.lastname}</p>
                     `;
            userInfo.innerHTML = contenidoResultado;
            resultadosDiv.appendChild(userInfo);
        });
    }
});

// POST - Agregar nuevo usuario
document.getElementById("btnPost").addEventListener('click', function (e) {
    resultadosDiv.innerHTML = "";
    if (nombre.value.length > 0 & apellido.value.length > 0) {

        async function agregar() {
            await fetch(URL_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": nombre.value,
                    "lastname": apellido.value
                })
            });
            let respuesta = await fetch(URL_API);
            let datos = await respuesta.json();
            return datos;
        }
        let nuevoListado = agregar();
        console.log(nuevoListado);
        nuevoListado.then(function (datos) {
            listar(datos);
        })
    }

});

//PUT
// Cuando se agrega el Id en el input se obtienen los datos
inModificar.addEventListener("input", function () {

    if (inModificar.value.length > 0) {

        sacarDisabled(document.getElementById("btnPut"));
        //document.getElementById("btnPut").removeAttribute("disabled");

        async function obtener(id) {
            let respuesta = await fetch(URL_API + id);
            let datos = await respuesta.json();
            return datos;
        }

        let resultadoDeObtener = obtener(inModificar.value);

        console.log(resultadoDeObtener);

        resultadoDeObtener.then(function (datos) {
            putNombre.value = datos.name;
            putApellido.value = datos.lastname;
        })
    } else {

    }
})

// Guardar datos modificados
document.getElementById("btnSendChanges").addEventListener("click", function () {
    async function obtener(id) {
        await fetch(URL_API + id, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "name": putNombre.value,
                "lastname": putApellido.value
            })
        });
        let respuesta = await fetch(URL_API);
        let datos = await respuesta.json();
        return datos;
    }

    let resultadoModificado = obtener(inModificar.value);
    console.log(resultadoModificado);
    resultadoModificado.then(function (datos) {
        listar(datos);
    })

})


// Delete 
document.getElementById("btnDelete").addEventListener("click", function() {
        async function borrar(id) {
            await fetch(URL_API + id, {
                method: "DELETE",
            });
            let respuesta = await fetch(URL_API);
            let datos = await respuesta.json();
            return datos;
        }
        let resultadosNuevaLista = borrar(inBorrar.value);
        console.log(resultadosNuevaLista);
        resultadosNuevaLista.then(function (datos) {
            listar(datos);
        });
    })


// habilitar botones

inBorrar.addEventListener('input',function(){
    if(inBorrar.value.length > 0){
        sacarDisabled(document.getElementById("btnDelete"));
    } 
})

nombre,apellido.addEventListener('input', function(){
    if (nombre.value.length > 0 & apellido.value.length > 0){
        sacarDisabled(document.getElementById("btnPost"));
    }
})

// Me faltó el cartel