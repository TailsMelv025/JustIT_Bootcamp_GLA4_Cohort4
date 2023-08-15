from time import sleep

# Use a for loop when the number of iteration is known
# (How many times you want / going to do something for)
# A for loop also controls the flow of execution in a program

# Iteration means to repeat in programming

name = "Melvin"
for letter in name:
    print(letter)

# for variableName in range:
#   method(numberOfIterations)

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
#         [0, 1, 2, 3, 4, 5, 6, 7] - index values
for number in numbers:
    print(number)  # number is the index value
#    print(numbers[number])  # access the data instead of the index


for findNumber in range(10):  # we specify the number of interations
    print(findNumber)  # returns: 0 - 9

sleep(6)  # Delay execution for a given number of seconds
print("Two values")
"Modify the code to pass in a second value in the praces as parameters and comment your"
# range(startNumber, stopNumber, step)
for findNumber in range(1, 6, 2):
    print(findNumber)  # returns: 1, 3, 5

"Modify the code above to countdown"
sleep(6)
print("Countdown")
for findNumber in range(5, -1, -1):
    print(findNumber)  # returns: 5, 4, 3, 2, 1, 0


highscore = [125, 63, 35, 12]
for counter in range(len(highscore)):
    print(highscore[counter])

usersList = ["Anna", "Paul", "Joe", "Jane", "Anne", "Pauline", "Joan", "Janet"]
for users in usersList:
    print(f"{users}")


""" Task:
Using input from the user, 
Create a multiplication program that will times the users input up to 5 times the value.

e.g. user inputs 3, your program calculates:
1x3
2x3
3x3
4x3
5x3

You will need a for loop and range for this to work."""

num1 = int(input("Type in a number: "))
for loop1 in range(5):
    print(f"{num1} x {loop1 + 1} =", (loop1 + 1) * num1)
    sleep(0.6)

# get the user in each loop to input their answer and feedback if they are correct using an if/else statement
num2 = int(input("Type in a number: "))
for lop2 in range(5):
    ans2 = int(input(f"{num2} x {lop2 + 1} = "))
    if ans2 == (lop2 + 1) * num1:
        print("Correct!")
    else:
        print("Wrong answer. The correct answer is", (lop2 + 1) * num2)
    sleep(0.6)


print("Welcome to the table quiz.\n")
num = int(input("Enter a number: "))

for i in range(1, 5):  # 1,2,3,4
    answer = int(input(f" What is {i} x {num}? "))
    print(f"the answer is {answer} ")
    correct = i * num
    if answer == correct:
        print("Correct")

    else:
        print(f"No, the answer is  {correct}")

print("Finished")


print("Do you know your times tables?")
num3 = int(input("Type in a number: "))
for i in range(1, 10):  # 1 - 9
    ans3 = int(input(f"{num3} x {i} = "))
    cor3 = i * num3
    if ans3 == cor3:
        print("Correct!")
    else:
        print("Wrong answer. The correct answer is", cor3)
    sleep(0.6)
print(f"Hopefully you now know your {num3} times tables up to 9")
