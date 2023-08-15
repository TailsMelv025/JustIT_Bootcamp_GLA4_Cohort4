globalNum1 = 5


def modifyGlobalNum():
    global globalNum1  # use global keyword to modify the value held in globalNum1 variable
    globalNum1 = 500 + globalNum1  # local scope
    print(
        f"Printing modified global value {globalNum1} from localSubRoutine"
    )  # returns: 505


modifyGlobalNum()

print(f"Printing global variable {globalNum1} from global")
