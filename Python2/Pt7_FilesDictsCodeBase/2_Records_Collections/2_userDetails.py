# fname    = input("Enter you full name: ")
# address   = input("Enter your address: ")
# interest = input("Enter your interest: ")
# age      =    int(input("Enter your age: "))


# create a dictionary
dict1 = {"Fullname": "Jane Smith", "Age": 23, "Hobby": "Coding", 1: "Gamer"}

# create a dictionary with keys but no values
print("Dictionary with Keys but NO Values")
userDetails1 = {"fname": "", "address": "", "interest": "", "age": ""}
print(userDetails1)

# Use key to add values to dictionary
userDetails1["fname"] = input("Enter your full name: ")
print(userDetails1)

"Extension"
"Modify"
"To Do: Task 1: write the input statement to add the remaining values to the userDetails1 dictionary above"
userDetails1["address"] = input("Enter your city: ")
print(userDetails1)
userDetails1["interest"] = input("Enter your interest: ")
print(userDetails1)
userDetails1["age"] = int(input("Enter your age: "))
print(userDetails1)

# create a dictionary with no keys and no values
print("Dictionary with NO Keys and NO Values")
userDetails2 = {}
print(userDetails2)

"Make"
"To Do: Task 2: Create a dictionary with no keys as shown below, then write the input statement to add the keys and values."
userDetails2 = {}

dKey1 = input("Enter your first key: ")
userDetails2[dKey1] = input(f"Enter your {dKey1}: ")
print(userDetails2)

userDetails2[input("Enter your second key: ")] = input(
    "Enter the corresponding value: "
)
print(userDetails2)

keyVals = int(
    input("Enter the number of key-value pairs you want to add to the dictionary: ")
)
for dictItems in range(keyVals):
    key = input("Enter Key: ")
    value = input(f"Enter the value for {key}: ")
    userDetails2[key] = value
print(userDetails2)
