# Use the keyword argument where you provide a name to the variable as you pass it into the function
# Think of kwargs as being a dictionary


def addition1(**kwargs):  # kwargs = KeyWord ARGumentS
    for varNums, numsValue in kwargs.items():  # an item is one pair
        print(varNums, numsValue)


# {key:value, }


addition1(num1=10, num2=20, num3=30)


def addition2(**kwargs):
    for varNums in kwargs.keys():  # filter by key name only
        print(f"The keys {varNums}")


addition2(num1=10, num2=20, num3=30)


def addition3(**kwargs):
    for numsValue in kwargs.values():  # filter by value only
        print(f"Value {numsValue}")


addition3(num1=10, num2=20, num3=30)
