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

data = {}
data['relacao'] = []
for i in range (len(lista_json)):	
	temp = lista_json[i]
	item = {"sala": temp[0], "disciplina" : temp[1]}
	data['relacao'].append(item)
print(data)

with open('last_file.json', 'w') as fp:
	json.dump(data, fp)
print('\n')

