# A variable holds a value in memory location that is needed for the execution of your program
# A variable can only hold one value at a time
# This value can change throughout the execution 

# Variables must be declared before they can be used

name1 = "John" # declare variable name1 and assign the value "John"
print("Welcome",name1) # returns: Welcome John
name1 = "Peter" # change variable name1 to the value "Peter"
print(f"Welcome {name1}") # returns: Welcome Peter

num1 = 10
num2 = 20
num3 = 30
answer1 = num1 + num1
answer2 = num2 + num3
answer3 = answer1 + answer2
print("The first answer is",answer1)
print("The second answer is",answer2)
print("The third answer is",answer3)

name = "Melvin"
location = "London"
interest = "Python, MySQL, and JavaScript"

print(f"My name is {name} \nMy location is {location} \nMy interests are {interest}")


# variable naming conventions
username = "jsmith" # use meaningful variable names
username1 = "johns"
userName = "john" # camelCase notation can be used as variables are case sensitive
print(username,userName) # username and userName are not the same varaibles 
user_name = "smith"
user_Name = "doe"
print(user_name,"is different to",user_Name)
usernum = 25
Username = "a"

#Avoid the following:
""" 
£errr = "money" # don't use symbols - will return error
2username = "Coder112345" # don't start with a number - will return error
user name = "test user" # don't use spaces - will return error
USERNAME = 12 # don't use all uppercase - will create a constant variable (value that never changes)
Username = "toby345" # don't start with an uppercase
"""


# TASK 3 - use input function
num1 = int(input("Enter your first number: ")) # similar to prompt in JavaScript. Returns string value, so need to use int to convert it
# use a variable and invoke the input function to ask the user for a second number
num2 = int(input("Enter your second number: "))
# add the two numbers
answer = num1+num2
# print out the total of the two numbers
print(answer)

# Python = integer (whole number) and float (decimal numbers)