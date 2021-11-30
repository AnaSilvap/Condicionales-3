velocidad=Number(prompt("la velocidad inicial es?(m/s2))"))
posicion=Number(prompt("A que distancia desea hacer llegar el proyectil? (m)"))
let t=(0-velocidad)/(0-9.8)
let desplazamiento=(velocidad*t)-((9.8*t*t)/2)
if (desplazamiento >= posicion) {
    Respuesta= "el proyectil logra llegar a la altura deseada"
} else{
    Respuesta= "el proyectil no logra llegar a la altura deseada"
}
document.getElementById("Respuesta").innerHTML=Respuesta