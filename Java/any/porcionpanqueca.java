package arepitamaker;

import java.util.Scanner;

public class porcionador {

	public static void main(String[] args) {
		
		// Declaramos las variables que vamos a utilizar:
		int cn_harina;
		int mn_harina = 120; //Gramos de harina*
		int cn_leche;
		int mn_leche = 50; //Mililitros
		int cn_huevos;
		int mn_huevos = 1; //Porturas de gallina
		
		// Mensajes iniciales del programa:
		System.out.println("qlq mano");
		System.out.println("Ya te hago el cáculito...");
		System.out.println("¿Cuanta harina tenés? (en Gramos)");
		
		// Parametros para pedir la entrada de usuario
		Scanner userInput;
		userInput = new Scanner(System.in);
		
		// Cantidad de harina
		cn_harina = userInput.nextInt();
		//System.out.println("Entonces tienes " + cn_harina + "gr de Harina");
		
		// Cantidad de leche
		System.out.println("¿Cuanta leche tenés? en Mililitros");
		cn_leche = userInput.nextInt();
		//ystem.out.println("Entonces tienes " + cn_leche + "ml de Leche");
		
		// Cantidad de huevos
		System.out.println("¿Cuantos huevos tenés? en porturas");
		cn_huevos = userInput.nextInt();
		//System.out.println("Entonces tienes " + cn_huevos + " Porturas");
		
		// Ya tenemos los datos que necesitamos...
		// Ahora vamos a hacer el cáculo
		if (cn_harina < mn_harina || cn_leche < mn_leche || cn_huevos < mn_huevos) {
			System.out.println("Naiq no tenes suficiente");
		} else {
			
			// Convertimos las cantidades en porciones
			cn_harina = cn_harina / mn_harina;
			System.out.println("Tienes " + cn_harina + " porciones de harina");
			
			cn_leche = cn_leche / mn_leche;
			System.out.println("Tienes " + cn_leche + " porciones de leche");
			
			cn_huevos = cn_huevos / mn_huevos;
			System.out.println("Tienes " + cn_huevos + " posturas de gallina");
			
			// Buscamos el valor más pequeño
			int peque;
			if (cn_harina <= cn_leche && cn_harina <= cn_huevos) {
				peque = cn_harina;
			} else if (cn_leche <= cn_harina && cn_leche <= cn_huevos) {
				peque = cn_leche;
			} else {
				peque = cn_huevos;
			}
			
			// Cerramos el programa con los resultados arrojados
			System.out.println(" "); // Cada porción hace 2 huevos
			System.out.println("Puedes hacer " + peque*3 + " Panquecas");
			System.out.println(" ");
			System.out.println("Ah! Vas a necesitar " + peque*mn_harina + "gr de harina");
			System.out.println("Ah! Vas a necesitar " + peque*mn_leche + "gr de leche");
			System.out.println("Ah! Vas a necesitar " + peque*mn_huevos + " posturas de gallina");
			System.out.println(" ");
			System.out.println("Eso es todo, hasta la proximaaa...");
		}
			
	}

}
