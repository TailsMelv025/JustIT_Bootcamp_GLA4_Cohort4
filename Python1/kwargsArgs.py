# Use the keyword/named argument where you provide a name to the variable as you pass it in
# Think of kwards as a dictionary
# Args accepts any number of positional argument

# Using kwargs and args


def kwargsArgs(*args, **kwargs):
    # userDetails = f"Your name is {pfName}, and you live in {pAddress}, and you are interested in {pInterest}"
    # return userDetails
    print(f"The args {args}")
    print(f"The kwargs {kwargs}")
    print("Finished unpacking argKwarg")


kwargsArgs(
    "Em",
    "123 No Way",
    "Coding",
    "happy",
    "gaming",
    "Python",
    "Java",
    num1=1,
    num2=2,
    num3=3,
    num4=10,
)

kwargsArgs(num1=1, num2=2, num3=3, num4=10)

kwargsArgs("Em", "123 No Way")
