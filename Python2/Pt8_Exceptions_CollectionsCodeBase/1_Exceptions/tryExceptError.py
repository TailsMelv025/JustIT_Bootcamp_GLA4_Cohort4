try:  # try to execute the code below
    num1 = int(input("Enter first number: "))
    num2 = int(input("Enter second number: "))
    total = num1 + num2
    print(f"{num1} + {num2} = {total}")
    # ValueError

except:  # execute only when the code in the try block results in an error
    print("Only enter numbers in numerical form")
