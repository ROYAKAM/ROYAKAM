from tkinter import *

root = Tk()
root.title("Calculadora")

# Tema de colores
fondoBotones = "gray"
fuenteColor = "orange"


texto = Entry(width=15, fg=fuenteColor, bg=fondoBotones, borderwidth="10")
texto.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

texto.insert(0, "")


# La funcionalidad de la calculadora
def accion(numero):
        #texto.delete(0, END)
        #texto.insert(0, numero)
        actual = texto.get()
        texto.delete(0, END)
        texto.insert(0, str(actual) + str(numero))
        return

def limpiar():
        texto.delete(0, END)

def suma():
        primerNumero = texto.get()
        global pNum
        global funcionalidad
        funcionalidad = "suma"

        pNum = int(primerNumero)
        texto.delete(0, END)

def resta():
        primerNumero = texto.get()
        global pNum
        global funcionalidad
        funcionalidad = "resta"

        pNum = int(primerNumero)
        texto.delete(0, END)

def multiplicar():
        primerNumero = texto.get()
        global pNum
        global funcionalidad
        funcionalidad = "multiplica"

        pNum = int(primerNumero)
        texto.delete(0, END)

def dividir():
        primerNumero = texto.get()
        global pNum
        global funcionalidad
        funcionalidad = "divide"

        pNum = int(primerNumero)
        texto.delete(0, END)
        
def igual():
        segundoNumero = texto.get()
        texto.delete(0, END)

        if funcionalidad == "suma":
                texto.insert(0, pNum + int(segundoNumero))
 
        if funcionalidad == "resta":
                texto.insert(0, pNum - int(segundoNumero))
                
        if funcionalidad == "multiplica":
                texto.insert(0, pNum * int(segundoNumero))
                
        if funcionalidad == "divide":
                texto.insert(0, pNum / int(segundoNumero))
                               
# Le decimos cuales son los botones
boton1 = Button(root, text="1", padx=20, pady=20, command=lambda: accion(1), bg=fondoBotones, fg=fuenteColor)
boton2 = Button(root, text="2", padx=20, pady=20, command=lambda: accion(2), bg=fondoBotones, fg=fuenteColor)
boton3 = Button(root, text="3", padx=20, pady=20, command=lambda: accion(3), bg=fondoBotones, fg=fuenteColor)
boton4 = Button(root, text="4", padx=20, pady=20, command=lambda: accion(4), bg=fondoBotones, fg=fuenteColor)
boton5 = Button(root, text="5", padx=20, pady=20, command=lambda: accion(5), bg=fondoBotones, fg=fuenteColor)
boton6 = Button(root, text="6", padx=20, pady=20, command=lambda: accion(6), bg=fondoBotones, fg=fuenteColor)
boton7 = Button(root, text="7", padx=20, pady=20, command=lambda: accion(7), bg=fondoBotones, fg=fuenteColor)
boton8 = Button(root, text="8", padx=20, pady=20, command=lambda: accion(8), bg=fondoBotones, fg=fuenteColor)
boton9 = Button(root, text="9", padx=20, pady=20, command=lambda: accion(9), bg=fondoBotones, fg=fuenteColor)
boton0 = Button(root, text="0", padx=20, pady=20, command=lambda: accion(0), bg=fondoBotones, fg=fuenteColor)
botonSuma = Button(root, text="+", padx=20, pady=20, command=lambda: suma(), bg=fondoBotones, fg=fuenteColor)
botonResta = Button(root, text="-", padx=20, pady=20, command=lambda: resta(), bg=fondoBotones, fg=fuenteColor)
botonMultiplicar = Button(root, text="*", padx=20, pady=20, command=lambda: multiplicar(), bg=fondoBotones, fg=fuenteColor)
botonDividir = Button(root, text="/", padx=20, pady=20, command=lambda: dividir(), bg=fondoBotones, fg=fuenteColor)
botonIgual = Button(root, text="=", padx=20, pady=20, command=lambda: igual(), bg=fondoBotones, fg=fuenteColor)
botonLimpiar = Button(root, text="C", padx=20, pady=20, command=lambda: limpiar(), bg=fondoBotones, fg=fuenteColor)

# Los colocamos en la pantalla
boton1.grid(row=3 , column=0)
boton2.grid(row=3 , column=1)
boton3.grid(row=3 , column=2)

boton4.grid(row=2 , column=0)
boton5.grid(row=2 , column=1)
boton6.grid(row=2 , column=2)

boton7.grid(row=1 , column=0)
boton8.grid(row=1 , column=1)
boton9.grid(row=1 , column=2)

boton0.grid(row=4 , column=0)
botonIgual.grid(row=4 , column=2)
botonLimpiar.grid(row=4 , column=1)

botonSuma.grid(row=1 , column=4)
botonResta.grid(row=2 , column=4)
botonMultiplicar.grid(row=3 , column=4)
botonDividir.grid(row=4 , column=4)

#miBoton = Button(root, text="Ingresar", padx=100, pady=50, command=lambda: accion(), fg="red", bg="#A4A4A4")


root.mainloop()
