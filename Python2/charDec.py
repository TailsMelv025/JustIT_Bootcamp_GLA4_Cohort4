# OBJECTIVE: Use chr() and ord() to perform ASCII conversion
# chr(97): takes in decimal number and returns its character equivalent
# ord("a"): takes in a character and returns its character decimal equivalent

# TODO 1 - Predict, run, and investigate the use of ord()
aChar = input("Enter a character: ")
convertChar = ord(aChar)  # ord("a/b/c/d")
print(convertChar)

# TODO 2 - Modify the code above to ask for an integer value, then use the chr() to return its character equivalent
aValue = int(input("Enter a number: "))
convertValue = chr(aValue)
print(convertValue)


def alphabets():  # created the function alphabets
    alphabetList = []  # create an empty list
    for letters in range(65, 123):
        alphabetList.append(
            chr(letters)
        )  # converts numbers to letters then add/append them to
    return alphabetList


print(alphabets())
