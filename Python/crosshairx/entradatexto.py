from tkinter import *

root = Tk()

texto = Entry(width=100, fg="red", bg="#A4A4A4", borderwidth="10")
texto.pack()
texto.insert(0, "Mi nombre es")

def accion():
        hola = "Señor " + texto.get()
        miForma = Label(root, text=hola)
        #miForma = Label(root, text="Loco " + texto.get())
        miForma.pack()

miBoton = Button(root, text="Ingresar", padx=100, pady=50, command=accion, fg="red", bg="#A4A4A4")
miBoton.pack()

root.mainloop()
