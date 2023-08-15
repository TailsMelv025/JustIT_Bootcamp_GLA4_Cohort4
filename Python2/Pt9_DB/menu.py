# imprt CRUD modules
import readSongs, addSongs, updateSongs, deleteSongs


# subroutine / function
def menuOptions():
    options = 0  # flag variable
    menuNumbers = (
        "Songs Menu Options\nEnter:\n1. Read\n2. Add\n3. Update\n4. Delete\n5. Exit"
    )
    optionsList = ["1", "2", "3", "4", "5"]
    while options not in optionsList:
        print(menuNumbers)

        # reassign the value of options
        options = input("Enter an option from the songs menu: ")

        if options not in optionsList:
            print(f"{options} is not a valid choice in the songs menu")
    return options


# create a boolean variable
mainProgram = True

while mainProgram:  # same as while True
    # call/invoke menuOptions function and assign to a variable
    mainMenu = menuOptions()
    if mainMenu == "1":
        readSongs.read()
    elif mainMenu == "2":
        addSongs.insertSongs()
    elif mainMenu == "3":
        updateSongs.update()
    elif mainMenu == "4":
        deleteSongs.delete()
    else:
        # reassign the mainProgram to false boolean variable
        mainProgram = False
input("Press Enter to quit the songs application")
