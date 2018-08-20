import json
file = open('newlista.txt', 'r')
i = 0
lista = file.readlines()
new_lista = []
sala = lista[0]
new_file = open('testefinal.txt', 'r+')

for i in range(1, len(lista)):
	if(lista[i] == '\r\n' or lista[i] == '\n'):
		continue
	else:	
		if(('CFH' in lista[i])): #se a proxima for sala, altera sala atual
			sala = lista[i]
			x = sala + '' + lista[i]

			new_lista.append(x)
			#new_file.writelines(x)
		else:
			x = sala +'' + lista[i]
			new_lista.append(x)
			#new_file.write(x)

lista_json = []
for i in range(len(new_lista)):
	word = new_lista[i].split('\n')
	if(('CFH' in word[0]) and ('CFH' in word[1])):
		print('DUPLICADA')
	else:
		lista_json.append(word[:2])

print('Len antiga: ', len(new_lista))

data = {'posicao' : []}

for i in range (len(lista_json)):
	temp = lista_json[i]
	data.get('posicao').insert({'Sala': temp[0], 'Disciplina': temp[1]})
print(data)

with open('last_file.json', 'w') as fp:
	json.dump(data, fp)
print('\n')

