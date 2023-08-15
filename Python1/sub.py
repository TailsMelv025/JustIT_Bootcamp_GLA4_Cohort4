"""
Subroutine is a sequence of instructions/code block to perform a specific task with an identifiable name
A subroutine does not have a return statement
A def keyword is used to define a subroutine, followed by the name of the subroutine
A subroutine is not executed unless it is invoked or called
"""

# syntax def Keyword subroutineName():
# def means define
# Similar to a function in JS


def userName():  # Define a subroutine called userName
    name = "Freddy"
    print(name)


userName()  # Call / Invoke the subroutine


def username():
    name = input("Enter your username: ")
    print(name)


username()

"""def addition():
    answer = 2+10
    print(f"The answer to 2+10 is {answer}")
addition()"""


def add():
    num1 = int(input("Enter the first number you want to be added: "))
    num2 = int(input("Enter the second number you want to be added: "))
    ans = num1 + num2
    print(f"{num1} + {num2} = {ans}")


add()


def multiply():
    num1 = int(input("Enter the first number you want to be multiply: "))
    num2 = int(input("Enter the second number you want to be multiply: "))
    ans = num1 * num2
    print(f"{num1} × {num2} = {ans}")


multiply()

numX = int(input("Enter your first number: "))
numY = int(input("Enter your second number: "))


def subtract():
    ans = numX - numY
    print(f"{numX} - {numY} = {ans}")


subtract()


def divide():
    ans = numX / numY
    print(f"{numX} ÷ {numY} = {ans}")


divide()


"""
In the subroutine definition, you pass in the parameter(placeholder)
In the subroutine call, you pass in the argument
"""


# define subroutine fName with parameter, parameterFname
def fName(parameterFname):
    # pass the parameter inside the print statement
    print(f"My first name is {parameterFname}")


"Method 1"
# in the subroutine call, pass in the argument that will pass into the parameterFname
fName("Bob")  # my first name is Bob

"Method 2"
# use the input to ask for the value that will be saved in the argFirstName variable
argFirstName = input("What is your first name? ")  # Melvin
# In the subroutine call, pass in the variable argFirstName as argument
fName(argFirstName)  # my first name is Melvin

"Method 3"
fName(input("Enter your first name: "))  # the input is passed in as an argument


def username():
    first_name = "Firstname"
    last_name = "last name"
    interests = "interests"
    print(
        f"Your first name is: {first_name}\nYour last name is: {last_name}\nYour interests include: {interests}"
    )


username()


def username(first_name, last_name, interests):
    print(
        f"Your first name is: {first_name}\nYour last name is: {last_name}\nYour interests include: {interests}"
    )


username("Melvin", "Osei", "Python")  # method 1

# method 2
argFName = input("What is your first name? ")
argLName = input("What is your last name? ")
argInterest = input("What are you interested in? ")
username(argFName, argLName, argInterest)

# method 3
username(
    input("Enter a first name: "),
    input("Enter a last name: "),
    input("Enter an interest: "),
)
