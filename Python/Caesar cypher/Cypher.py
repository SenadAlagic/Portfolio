print("Welcome to the Cryptor")
text=input("What do you need to crypt? ")
shift=int(input("Shift by..? "))

newValue=""
for i in text:
    print("ord(i): ",ord(i))
    print("char: ", chr(ord(i)))
    newValue=newValue+chr(ord(i)+shift)

print(newValue)
    
