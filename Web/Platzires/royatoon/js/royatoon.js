let rotateElement = document.getElementById("rotate-scroll");

window.addEventListener("scroll", function() {
  let scroll = window.pageYOffset;
  rotateElement.style.transform = `rotate(${scroll-300}deg)`;
});

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

const sectionReiniciar = document.getElementById('reiniciar')

const BotonMascotaJugador = document.getElementById('seleccionar-mascota')

const BotonFuego = document.getElementById('boton-fuego')

const BotonAgua = document.getElementById('boton-agua')

const BotonAire = document.getElementById('boton-aire')

const botonReiniciar = document.getElementById('boton-reiniciar')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')

const spanVidasEnemigo = document.getElementById('vidas-enemigo')


const SectionMensajes = document.getElementById('resultado')

const ataquesDelJugador = document.getElementById('ataques-del-jugador')

const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedortarjetas = document.getElementById('contenedortarjetas')


let mascotas = []
let AtaqueJugador
let ElementoEnemigo
let OpcionDeMascotas
let inputZUKO
let inputTOPH
let inputTENZU
let vidasJugador = 3
let vidasEnemigo = 3

class Avatar {
	constructor(nombre, foto, vida) {
		this.nombre = nombre;
		this.foto = foto;
		this.vida = vida;
        this.ataques = []
	}
}

let Zuko = new Avatar('Zuko','./assets/zuko.jpg','5');

let Toph = new Avatar('Toph','./assets/toph.png','5')

let Tenzu = new Avatar('Tenzu', './assets/tenzu.jpg', '5')

Zuko.ataques.push(
    { nombre: 'awita', id: 'boton-agua' },
    { nombre: 'candela', id: 'boton-fuego' },
    { nombre: 'candela', id: 'boton-fuego' },
    { nombre: 'candela', id: 'boton-fuego' },
    { nombre: 'piedra', id: 'boton-tierra' },
)

Toph.ataques.push(
    { nombre: 'awita', id: 'boton-agua' },
    { nombre: 'candela', id: 'boton-fuego' },
    { nombre: 'piedra', id: 'boton-tierra' },
    { nombre: 'piedra', id: 'boton-tierra' },
    { nombre: 'piedra', id: 'boton-tierra' },
)

Tenzu.ataques.push(
    { nombre: 'awita', id: 'boton-agua' },
    { nombre: 'awita', id: 'boton-agua' },
    { nombre: 'awita', id: 'boton-agua' },
    { nombre: 'candela', id: 'boton-fuego' },
    { nombre: 'piedra', id: 'boton-tierra' },
)

mascotas.push(Zuko,Toph,Tenzu)


function IniciarJuego() {
	sectionSeleccionarAtaque.style.display = 'none'

	mascotas.forEach((Avatar) => {
		OpcionDeMascotas = `
			<input type="radio" name="mascota" id=${Avatar.nombre} />
			<label class="tarjeta-de-royatoon" for=${Avatar.nombre}>
				<p>${Avatar.nombre}</p>
				<img src=${Avatar.foto} alt=${Avatar.nombre}>
			</label>
			`;

		contenedortarjetas.innerHTML += OpcionDeMascotas

		inputZUKO = document.getElementById('Zuko')
		inputTOPH = document.getElementById('Toph')
		inputTENZU = document.getElementById('Tenzu')

	})

	sectionReiniciar.style.display = 'none'

	BotonMascotaJugador.addEventListener('click', SeleccionarMascotaJugador)

	BotonFuego.addEventListener('click',AtaqueFuego)
	BotonAgua.addEventListener('click',AtaqueAgua)
	BotonAire.addEventListener('click',AtaqueAire)

	botonReiniciar.addEventListener('click', reiniciarJuego)
}

function SeleccionarMascotaJugador() {

		//let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota'
		//sectionSeleccionarMascota.style.display = 'none'

		//let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
		sectionSeleccionarAtaque.style.display = 'flex'

		if (inputZUKO.checked) {
			spanMascotaJugador.innerHTML = inputZUKO.id
		} else if (inputTOPH.checked) {
				spanMascotaJugador.innerHTML = inputTOPH.id
		} else if (inputTENZU.checked) {
				spanMascotaJugador.innerHTML = inputTOPH.id
		} else {
				alert("Haz una selección primero")
		}
	SeleccionarMascotaEnemigo()
	}


function SeleccionarMascotaEnemigo() {
	let AtaqueAleatorio = aleatorio(0,mascotas.length -1)

	spanMascotaEnemigo.innerHTML + mascotas[AtaqueAleatorio].nombre

//	if (AtaqueAleatorio === 1) {
//			//ZUKO
//			spanMascotaEnemigo.innerHTML = 'ZUKO'
//	} else if (AtaqueAleatorio === 2) {
//			// TOPH
//			spanMascotaEnemigo.innerHTML = 'TOPH'
//	} else if (AtaqueAleatorio === 3) {
//			// TENZU
//			spanMascotaEnemigo.innerHTML = 'TENZU'
//	}
	CrearMensaje()
}

function AtaqueFuego() {
	AtaqueJugador = 'FUEGO'
	ElementoEnemigoAleatorio()
}

function AtaqueAgua() {
	AtaqueJugador = 'AGUA'
	ElementoEnemigoAleatorio()
}

function AtaqueAire() {
	AtaqueJugador = 'AIRE'
	ElementoEnemigoAleatorio()
}

function ElementoEnemigoAleatorio() {
	let ElementoAleatorio = aleatorio(1,3)

	if (ElementoAleatorio === 1) {
		ElementoEnemigo = 'FUEGO'
	} else if (ElementoAleatorio === 2) {
		ElementoEnemigo = 'AGUA'
	} else {
		ElementoEnemigo = 'AIRE'
	}
	Combate()
}


//let spanMascotaEnemigo = document.getElementById('ataque-jugador')

function Combate() {

	//Hagamos fucionar esta monda
	if(ElementoEnemigo === AtaqueJugador) {
		CrearMensaje("EMPATE")
	} else if(AtaqueJugador === "AGUA" && ElementoEnemigo === "FUEGO") {
		CrearMensaje("VICTORIA")
		vidasEnemigo--
		spanVidasEnemigo.innerHTML = vidasEnemigo

	} else if(AtaqueJugador === "AIRE" && ElementoEnemigo === "AGUA") {
		CrearMensaje("VICTORIA")
		vidasEnemigo--
		spanVidasEnemigo.innerHTML = vidasEnemigo

	} else if(AtaqueJugador === "FUEGO" && ElementoEnemigo === "AIRE") {
		CrearMensaje("VICTORIA")
		vidasEnemigo--
		spanVidasEnemigo.innerHTML = vidasEnemigo

	} else {
		CrearMensaje("PERDISTE")
		vidasJugador--
		spanVidasJugador.innerHTML = vidasJugador
	}

	//Revisamos las vidas para determinar quien ganó
	RevisarVidas()
}

function RevisarVidas() {
	if (vidasEnemigo === 0) {
		CrearMensajeFinal("HAS GANADO")
	} else if (vidasJugador === 0) {
		CrearMensajeFinal("HAS PERDIDO")
	}
}

function CrearMensaje(Resultado) {

	let nuevoAtaqueDelJugador = document.createElement('p')
	let nuevoAtaqueDelEnemigo = document.createElement('p')

	SectionMensajes.innerHTML = Resultado
	nuevoAtaqueDelJugador.innerHTML = AtaqueJugador
	nuevoAtaqueDelEnemigo.innerHTML = ElementoEnemigo

	let Parrafo = document.createElement('p')
	Parrafo.innerHTML = 'Haz atacado con ' + AtaqueJugador + ' y el enemigo con ' + ElementoEnemigo + ' ' + Resultado

	ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
	ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function CrearMensajeFinal(resultadofinal) {
	let SectionMensajes = document.getElementById('mensajes')

	SectionMensajes.innerHTML = resultadofinal

	//let Parrafo = document.createElement('p')
	//Parrafo.innerHTML = resultadofinal
	//SectionMensajes.appendChild(Parrafo)

	//let BotonFuego = document.getElementById('boton-fuego')
	BotonFuego.disabled = true
	//let BotonAgua = document.getElementById('boton-agua')
	BotonAgua.disabled = true
	//let BotonAire = document.getElementById('boton-aire')
	BotonAire.disabled = true

	//let sectionReiniciar = document.getElementById('reiniciar')
	sectionReiniciar.style.display = 'block'


}

function reiniciarJuego() {
	location.reload()
}

function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)}

window.addEventListener('load', IniciarJuego)
