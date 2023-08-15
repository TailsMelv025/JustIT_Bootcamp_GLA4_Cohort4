# Nested

userAge = int(input("Enter your age: "))
ageLimit = 16
passCode = "dfe1w3dev"
# Exercise: Modify the code above to use else for both if condition
if (
    userAge > ageLimit
):  # compare the value held in userAge against the value held in ageLimit
    print(
        "You met the minimum age requirement"
    )  # execute if the condition above is met
    userCode = input("Enter code: ")  # "dfe1w3dev"
    if userCode == passCode:  # this block is nested inside the first if
        print(f"Your code {userCode} is valid. Access granted !")
    else:
        print(f"Your code {userCode} is invalid. Access Denied !")

else:
    print(f"You are {ageLimit} years old and below the age limit!")
