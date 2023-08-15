pStudy = input(
    "Enter a program of study: "
).title()  # use title to convert the first letter to upper case
curProgram = "Bootcamp"

"""
if condition is met:
    code block 1
else:
    code block 2
"""

# compare values held in pStudy and curProgram for a match
if pStudy == curProgram:
    # code block will be executed if there is a match when the comparison is performed
    print(f"Welcome to {pStudy}")
else:  # executes the code block below if there is no match
    print("Please enquire within")

# TODO Using if and else
# Create a program that find the minimum value between two numbers using if else

num1 = int(input("Please enter the first number: "))
num2 = int(input("Please enter the second number: "))

if num1 >= num2:
    print(f"{num2} is the minimum value")
else:
    print(f"{num1} is the minimum value")


cardValue = "King"
cardSuit = "Hearts"

chkCardValue = input("Enter card value: ").title()
chkCardSuit = input("Enter card suit: ").title()

# use the and operator
if cardValue == chkCardValue and cardSuit == chkCardSuit:
    # King        King                  Hearts        Hearts
    print("Winner!")
else:
    print("Try Again")

# TODO
# 1) Use if else to find item from a list
# 2) print the index value if the item is found
# 3) otherwise print a message "item not in list/not found"


"""list1 = ["Strawberry", "Banana", "Orange", "Cherry", "Apple", "Pear"]
input1 = str(input("Please enter a fruit: ").title())

if list1[input1] == True:
    print(f"{input1} is on the grocery list.")
else:
    print("That item is not on the grocery list.")"""


"""subjects = ["Math", "English", "Computers"]  # 3 or higher else should run
choice = int(input("Choose one subject:"))

if subjects[choice] == subjects[0]:
    print(f"You've chosen {subjects[choice]}")
    print(subjects[choice] == subjects[0])
else:
    print("That didn't match")
    print(subjects[0])
    print(choice)"""


score = int(input("Enter score here: "))

if score >= 75:  # check if score is greater than or equal to 75
    grade = "A"  # create a variable and assign it a value "A"
elif score >= 60:  # similar to elseif in JavaScript
    grade = "B"  # re-assign the value held in grade variable to "B"
elif score >= 50:
    grade = "C"  # re-assign the value held in grade variable to "C"
else:
    grade = "F"  # re-assign the value held in grade variable to "F"

print(f"You scored {score} and your grade is: {grade}")


# TODO - Using if Elif and else
# Create a Menu program that allows user to select between three subject choices
# User must be presented with the value assoiciated with each choice
# for example 1. Music, 2. Maths ....
# A choice must also be available for the user to exit the program
# A message using the print function must be display as per the user choice

menu = ["Music", "Maths", "Medicine"]
print(f"Subject Menu \n1. {menu[0]} \n2. {menu[1]} \n3. {menu[2]} \n4. Exit")
