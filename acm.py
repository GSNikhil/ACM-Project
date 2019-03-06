from firebase import firebase
firebase = firebase.FirebaseApplication('https://acm-project-840d0.firebaseio.com', None)
x = firebase.get('/x', None)
y = firebase.get('/y', None)
#print(x)
#print('----------------')
#print(y)

#coordinates = [x, y]
#print(coordinates[0][0], coordinates[1][0])

x_file = open("./x.txt", "w")
x_str = '\n'.join(str(e) for e in x)
x_file.write(x_str)
x_file.close()

y_file = open("./y.txt", "w")
y_str = '\n'.join(str(e) for e in y)
y_file.write(y_str) 
y_file.close()
