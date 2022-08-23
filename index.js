let nombreUsuario
let edadUsuario
let deporteElegido
let horarioElegido

alert("Bienvenido al gestor de horas de Multideportes, Espacio deportivo")
nombreUsuario = prompt("Ingrese su nombre y Apellido")
    alert("Bienvenido" + " " + nombreUsuario)

edadUsuario = parseInt(prompt("Ingrese su edad"))

if(edadUsuario >=18){
    alert("Eres mayor de edad, a continuación podras elegir el deporte")
} else{
    alert("No puedes sacar turno por que eres menor de edad")
}

deporteElegido = prompt("¿Tu deporte es Futbol5, Tenis o Padel?")    
if(deporteElegido === "Futbol5")
alert("Elegiste Futbol5")
else if(deporteElegido === "Tenis")
    alert("Elegiste Tenis")
else if(deporteElegido === "Padel")
    alert("Elegiste Padel")
else{
    deporteElegido = prompt("Tienes que elegir un deporte valido")
}

    alert("Ahora indica el horario que necesitas")

horarioElegido = prompt("Horarios disponibles. 19 hs , 20 hs, 21hs, 22 hs, 23hs")
while(horarioElegido != "ESC"){
    switch(horarioElegido){
        case "19hs":
            alert("Elegiste 19 hs")
            break
        case "20hs":
            alert("Elegiste 20 hs")
            break
        case "21hs":
            alert("Elegiste 21 hs")
            break
        case "22hs":
            alert("Elegiste 22 hs")
            break
        case "23hs":
            alert("Elegiste 23 hs")
            break
        default:
            alert("No elegiste un horario disponible")
            break
    }
    horarioElegido = prompt("Ingresa el horario que necesitas")
}

/*if(horarioElegido === "19hs")
    alert("Elegiste el horario de las 19 hs.")
else if(horarioElegido === "20hs")
    alert("Elegiste el horario de las 20 hs.")
else if(horarioElegido === "21hs")
    alert("Elegiste el horario de las 21 hs.")
else if(horarioElegido === "22hs")
    alert("Elegiste el horario de las 22 hs.")
else if(horarioElegido === "23hs")
    alert("Elegiste el horario de las 23 hs.")*/



alert(nombreUsuario + " " + "Elegiste" + " " + deporteElegido + " " + "en el horario de las" + " " + horarioElegido)






