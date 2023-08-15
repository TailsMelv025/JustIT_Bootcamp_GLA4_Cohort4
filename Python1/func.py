"""
"""


def addition():
    num1 = int(input("Enter first number: "))  # value inputted and stored in num1
    num2 = int(input("Enter second number: "))  # value inputted and stored in num1
    answer = num1 + num2  # num1 and num2 values added and answer stores the value
    return (
        answer  # return stops the function running and outputs to value held in answer
    )


sum = addition()  # 3 + 2 = 5
print(sum)


def userName():  # define a subroutine called userName
    fullName = input("Enter your name: ")
    address = input("Enter your city: ")
    interest = input("Enter an interest: ")
    return f"My name is {fullName}, my address is {address}, and I am interested in {interest}"


call1 = userName()

print(call1)


def username(fullName, address, interest):
    return f"My name is {fullName}, my address is {address}, and I am interested in {interest}"


printUsername = username(
    input("Enter full name: "), input("Enter city: "), input("Enter interest: ")
)
print(printUsername)
