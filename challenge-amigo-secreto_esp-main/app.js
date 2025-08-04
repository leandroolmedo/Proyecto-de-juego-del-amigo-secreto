

/* 
este es el arreglo en el cual se van a guardar los nombres de los participantes
*/
let amigos = [];


 

/*esta funcion vacia el imput una vez ingresado el nombre, primero se declara
la variable valorcaja la cual llama al input mediante el id "amigo" y luego 
le dise que el valor de caja va a se ""(nada) */
function limpiarcaja(){
  let valorCaja = document.getElementById("amigo");
   valorCaja.value = " ";

}

/* esta funcion se encarga de realizar todo el proceso del ingreso de los participantes.
pero su funcion principal es que cuando algien ponga un nombre en el imput y aprete el boton
se guarde el nombre en el valor amigos y lo muestre en consola.
Para eso declaramos una nueva variable "nombreAmigo" la cual llama al valor del input "amigo"
Luego se crea un if el cual tiene como primer condicion comparar si la variable "nombreAmigo"
es igual a " "(es decir vacia), si es haci lanzar una alerta, con el fin de decirle al usuario
que ponga un nombre.
Cuando si "nombreAmigo" no esta vacio se pasa al else donde mediante el metodo push se
agrega el la variable nombre amigo (es decir el nombre) al arreglo, y lo muestra en 
consola mediante un console.log.
Ademas de eso cuando se guarda el valor se ejecutan las funciones de limpiar la caja y
agregar lista
 */
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    console.log(nombreAmigo);
    if(nombreAmigo == ""){
        alert("porfavor pone un nombre")
    }else{
        amigos.push(nombreAmigo);
        console.log(amigos)
        limpiarcaja();
        agregarLista();
    };

};  


/*
Esta funcion llama a la lista <ul> y la coloca en la variable "listaAmigos",
luego se utiliza innerHTML para limpiar de cualquier elemento dejandolo vacio (" ")
para luego realizar un for en donde declaramos la variable i y le damos un valor inicial
de 0, luego mencionamos funcionara mientras "i" sea menor que el valor que devuelve el arreglo
ademas de eso ponemos un contador.
mientras se den esas condiciones se van a ir agregando los nombres de los participantes a la
lista y van a ir apareciendo en pantalla
*/


function agregarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = " "
     for (let i = 0; i < amigos.length; i++ ){
         listaAmigos.innerHTML += `<li> ${amigos[i]} </li>`;
     };


};



/* 
la funcion sortear amigos se encarga de elegir entre los participantes un ganador
en primer lugar creamos un if el cual tiene como condicion que "amigos sea igual a 0"
mientras eso se de te dara un aviso que no agregaste a nadie
luego con un else declaramos la variante "numeroGanador" la cual contiene el nombre
aleatorio del arreglo, consegimos ese numero utilizando Math.random el cual nos dara
el numero de una posicion en el arreglo, teniendo como limite para elegir hasta el valor
maximo que tengamos en el arreglo.
luego utilizamos Math.floor para asegurarnos que el valor que nos de sea entero sino no
coinsidira con las posiciones. y el valor que se de quedara en la llave "[]" como si nosotros
llamaramos a esa variable.
Luego declaramos la variable "avisoGanador" con la cual llamaremos al elemento "<ul>" con
el id = "resultado", luego mediante innerHTML agregaremos un a la variable "numeroGanador"
a una lista, logrando que se vea el resultado en pantalla
*/

function sortearAmigo(){
    if(amigos == 0){
        alert("todavia no agregaste amigos");
    }else{
        let numeroGanador = amigos[Math.floor(Math.random()*amigos.length)];
        let avisoGanador = document.getElementById("resultado");
        avisoGanador.innerHTML += `<li> ${numeroGanador} </li>`;

    }
};








