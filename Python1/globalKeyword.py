variable = 1  # global - change this going forward on the sheet
print(f"variable value before = {variable}")


def function():
    global variable  # this gives access to amend / change the value of variable
    variable = variable + 6  # variable's value has been re-assigned to 7
    sum = variable + 1  # 7 + 1
    return sum  # 8


function()
print("variable value after =", variable)  # returns: 7, I want this variable
print(f"sum value =", function())  # returns: 8
