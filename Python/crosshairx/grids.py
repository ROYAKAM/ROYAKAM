from tkinter import *

root = Tk()

# Creando el widget
myLabel = Label(root, text="Hola mundo").grid(row=0, column=0)
myLabel1 = Label(root, text="Mi nombre es Moisés").grid(row=0, column=1)
myLabel2 = Label(root, text="Tengo 22 años")
myLabel3 = Label(root, text="Estoy aprendiendo a programar")

# Muestra el contenido dentro de la ventana
#myLabel.grid(row=0, column=0)
#myLabel1.grid(row=1, column=0)
myLabel2.grid(row=1, column=0)
myLabel3.grid(row=1, column=1)

root.mainloop()
