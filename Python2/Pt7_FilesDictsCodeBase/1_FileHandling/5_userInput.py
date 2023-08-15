fname = input("Enter you full name: ")
address = input("Enter your address: ")
interest = input("Enter your interest: ")
age = int(input("Enter your age: "))

"Make"
"To Do: Task 1: Use the code above to ask for user input and then save it to a file called userDetails.txt"
with open(
    "Python2/Pt7_FilesDictsCodeBase/1_FileHandling/userDetails.txt", "r+"
) as userData:
    userInfo = f"Name: {fname}\nAddress: {address}\nInterest: {interest}\nAge: {age}"
    userData.write(userInfo)


"Further reading"
# https://www.w3schools.com/python/python_file_handling.asp
