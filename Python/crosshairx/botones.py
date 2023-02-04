from tkinter import *

root = Tk()

def accion():
        miForma = Label(root, text="Ejecución exitosa")
        miForma.pack()

miBoton = Button(root, text="Botoncito", padx=100, pady=50, command=accion, fg="red", bg="#A4A4A4")
miBoton.pack()

root.mainloop()
