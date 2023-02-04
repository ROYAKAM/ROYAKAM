			//Las funciones son un tipo de variable donde podemos almacenar formulas que podemos utilizar luego de una manera más fácil tan solo invocandola con el nombre
			let min = 1
			let max = 3
			function aleatorio(min, max) {
				return Math.floor(Math.random() * (max - min + 1) + min)}
			function eleccion(jugada) {
				let resultado = ""
				if(jugada == 1) {
					resultado = "Elegiste Piedra"
					} else if(jugada == 2) {
						resultado = "Elegiste Papel"
					} else if(jugada == 3) {
						resultado = "Elegiste Tijera"
					} else {
					alert("Tienes que elegir una opcion válida")
					}
					return resultado
				}
			// 1 es piedra, 2 es papel, 3 es tijera
			let jugador = 0
			let pc =  aleatorio(1,3)
			let triunfos = 0
			let perdidas = 0

			while (triunfos < 3 && perdidas < 3) {
				jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")

				alert("PC elige: " + pc)
				alert("Tu eliges: " + jugador)

				//Hagamos fucionar esta monda
				if(pc == jugador) {
					alert("EMPATE")
				} else if(jugador == 1 && pc == 3) {
					alert("VICTORIA")
					triunfos = triunfos + 1
				} else if(jugador == 2 && pc == 1) {
					alert("VICTORIA")
					triunfos = triunfos + 1
				} else if(jugador == 3 && pc == 2) {
					alert("VICTORIA")
					triunfos = triunfos + 1
				 } else {
					alert("PERDISTE")
					perdidas = perdidas + 1
				}
			}

			alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
