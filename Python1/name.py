# Input function: allow the program to take a user input from the user

print("What is your name? ") # display/output the question "What is your name?"
# Use str function to tell Python you are expecting a string data type
name0 = str(input()) # invoke the input function to capture user data
print("Your name is:",name0)

# efficient coding practice
name1 = str(input("What is your name? ")) # asking for user input dynamically
print("Welcome",name1)

# TASK - convert your name, interests, and city variables to become dynamic
name = str(input("What is your name? "))
location = str(input("What is your city? "))
interest1 = str(input("What is your main interest? "))
interest2 = str(input("What is your secondary interest? "))
interest3 = str(input("What else are you interested in? "))

print(f"My name is {name} \nMy location is {location} \nMy interests are {interest1}, {interest2}, and {interest3}")

# Dynamic values = values defined by the user, so this can vary each time