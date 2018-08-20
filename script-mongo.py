import os
nova_lista =[]
sem_espaco = []
limpo = []

file = open('listadisc.txt', 'r')
lista = file.readlines()

for i in range(len(lista)):
	x = lista[i].split(" ")
	nova_lista.append(x)

new_file = open('newlista.txt', 'r++')
for i in range(len(nova_lista)):
	if(nova_lista[0][1] == "Sala"):
		x = nova_lista[i][0]
		limpo.append(x)
		new_file.write(x+'\n')






#comec a a percorrer o arquivo
# lista[x][2] == 'sala'
# ele vai encontrar um \r\n
# vai ter as materias
# ele vai enconrar um \rzn