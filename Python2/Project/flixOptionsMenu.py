# Import CRUD modules
import createFilms, readFilms, updateFilms, deleteFilms

from flixConnect import *
from time import sleep


# subroutine / function
def menuOptions():
    options = 0  # flag variable
    menuNumbers = (
        "\nFilmFlix Menu Options:\n"
        "1. Add a record\n"
        "2. Delete a record\n"
        "3. Amend a record\n"
        "4. Print records\n"
        "5. Exit\n"
    )
    optionsList = ["1", "2", "3", "4", "5", ""]
    while options not in optionsList:
        print(menuNumbers)

        # reassign the value of options
        options = input("Enter an option from the FilmFlix menu: ")

        if options not in optionsList:
            print(f"\n{options} is not a valid choice in the FilmFlix menu")
            sleep(1)
    return options


# Create a boolean variable
mainProgram = True

while mainProgram:  # same as while True
    # call/invoke menuOptions function and assign to a variable
    mainMenu = menuOptions()
    if mainMenu == "1":
        createFilms.createFilm()
    elif mainMenu == "2":
        deleteFilms.deleteFilm()
    elif mainMenu == "3":
        updateFilms.updateFilm()
    elif mainMenu == "4":
        readFilms.searchFilm()
    else:
        dbConnect.close()
        # reassign the mainProgram to false boolean variable
        mainProgram = False
input("Press Enter to quit the FilmFlix menu")
