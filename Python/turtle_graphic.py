from turtle import *

print("De cuantos ciclos quieres el loop? (Que sea mayor a 100)")
usuario = int(input())

bgcolor('black')
speed(0)
hideturtle()
for i in range(usuario):
        color('red')
        circle(i)
        color('orange')
        circle(i*0.8)
        right(3)
        forward(3)
done()
