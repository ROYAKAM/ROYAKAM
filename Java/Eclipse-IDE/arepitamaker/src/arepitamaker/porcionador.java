package arepitamaker;

import java.util.Scanner;

public class porcionador {

	public static void main(String[] args) {
		
		// Declaramos las variables que vamos a utilizar:
		int cn_harina;
		int mn_harina = 120; //Gramos de harina*
		int cn_agua;
		int mn_agua = 100; //Mililitros
		int cn_aceite;
		int mn_aceite = 50; //Mililitros
		
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
		
		// Cantidad de agua
		System.out.println("¿Cuanta agua tenés? en Mililitros");
		cn_agua = userInput.nextInt();
		//ystem.out.println("Entonces tienes " + cn_agua + "ml de Agua");
		
		// Cantidad de aceite
		System.out.println("¿Cuanto aceite te queda? en Mililitros");
		cn_aceite = userInput.nextInt();
		//System.out.println("Entonces tienes " + cn_aceite + "ml de Aceite");
		
		// Ya tenemos los datos que necesitamos...
		// Ahora vamos a hacer el cáculo
		if (cn_harina < mn_harina || cn_agua < mn_agua || cn_aceite < mn_aceite) {
			System.out.println("Naiq no tenes suficiente");
		} else {
			
			// Convertimos las cantidades en porciones
			cn_harina = cn_harina / mn_harina;
			System.out.println("Tienes " + cn_harina + " porciones de harina");
			
			cn_agua = cn_agua / mn_agua;
			System.out.println("Tienes " + cn_agua + " porciones de agua");
			
			cn_aceite = cn_aceite / mn_aceite;
			System.out.println("Tienes " + cn_aceite + " porciones de aceite");
			
			// Buscamos el valor más pequeño
			int peque;
			if (cn_harina <= cn_agua && cn_harina <= cn_aceite) {
				peque = cn_harina;
			} else if (cn_agua <= cn_harina && cn_agua <= cn_aceite) {
				peque = cn_agua;
			} else {
				peque = cn_aceite;
			}
			
			// Cerramos el programa con los resultados arrojados
			System.out.println(" "); // Cada porción hace 2 arepitas
			System.out.println("Puedes hacer " + peque*2 + " Arepitas");
			System.out.println(" ");
			System.out.println("Ah! Vas a necesitar " + peque*mn_harina + "gr de harina");
			System.out.println("Ah! Vas a necesitar " + peque*mn_agua + "gr de agua");
			System.out.println("Ah! Vas a necesitar " + peque*mn_aceite + "gr de aceite");
			System.out.println(" ");
			System.out.println("Eso es todo adios...");
		}
			
	}

}
