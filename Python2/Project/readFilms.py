from flixConnect import *
from datetime import datetime
import csv


def readFilm():
    "SELECT * FROM tblFilms"
    dbCursor.execute("SELECT * FROM tblFilms")

    for records in dbCursor.fetchall():  # fetches the selected records
        print(records)


def searchField():
    fieldName = ["*", "filmID", "title", "yearReleased", "rating", "duration", "genre"]
    fieldUser = []  # empty list to be updated with user input

    while True:  # loop input until break
        try:
            fieldIndex = int(
                input(
                    "\nFields: \n0. All \n1. FilmID \n2. Title \n3. Year Released \n4. Rating \n5. Duration \n6. Genre"
                    "\nType the number for the field you want to show or press Enter to continue: "
                )
            )  # field index
            if 0 < fieldIndex < len(fieldName):  # between value 0 and last value
                print("\n" + fieldName[fieldIndex])  # test - print field selected
                fieldUser.append(fieldName[fieldIndex])  # add to list fieldUser
            elif fieldIndex == 0:
                fieldUser = "*"
                break
            else:
                print("Input not in range. Please try again.")
        except ValueError:
            break

    if fieldUser == "*":
        print("\n" + fieldUser)  # test - print all fields selected
    elif fieldUser == []:
        return
    else:
        fieldUser = list(
            dict.fromkeys(fieldUser)
        )  # converts to dictionary and back to list to remove duplicates
        fieldUser = ", ".join(fieldUser)
        print("\n" + fieldUser)  # test - print all fields selected
    return fieldUser


def searchCon():
    fieldName = ["*", "filmID", "title", "yearReleased", "rating", "duration", "genre"]

    try:
        fieldIndex = int(
            input(
                "\nFields: \n1. FilmID \n2. Title \n3. Year Released \n4. Rating \n5. Duration \n6. Genre"
                "\nType the number for the field you want to use as a criteria or press Enter to continue: "
            )
        )  # field index
        if 0 < fieldIndex < len(fieldName):  # between value 0 and last value
            print("\n" + fieldName[fieldIndex])  # test - print field selected
        else:
            print("Input not in range. Please try again.")
    except ValueError:
        return

    return fieldName[fieldIndex]


def orderField():
    orderUser = ["ASC", "DESC"]
    try:
        orderIndex = (
            int(
                input(
                    "\nType an EVEN number (i.e. 0) to Order By ASCENDING\nType an ODD number (i.e. 1) to Order By DESCENDING\nEnter a value here: "
                )
            )
            % 2
        )
    except ValueError:
        return

    print("\n" + orderUser[orderIndex])
    return orderUser[orderIndex]


def searchFilm():
    # select
    print("\nSELECT condition")
    fieldUser = searchField()
    if not fieldUser:
        return
    selectVal = f"SELECT {fieldUser} FROM tblFilms"
    print("\n" + selectVal)

    # where
    print("\nWHERE condition")
    searchUserA = searchCon()
    whereVal = ""
    if searchUserA:
        conValue = input("\nEnter the condition you want to search for: ")
        whereVal = f" WHERE {searchUserA} LIKE '{conValue}%'"
        print("\n" + whereVal)

        while searchUserA != "":
            boolCon = input(
                "\nType: \n'OR' if you want another condition where either are true"
                "\n'AND' if you want another condition where both are true"
                "\nOr press Enter to continue: "
            ).upper()

            if boolCon == "":
                break
            else:
                searchUserA = searchCon()
                if searchUserA:
                    conValue = input("\nEnter the condition you want to search for: ")
                    whereVal += f" {boolCon} {searchUserA} LIKE '{conValue}%'"
                    print("\n" + whereVal)

    # order by
    print("\nORDER BY condition")
    searchUserB = searchCon()
    orderVal = ""
    if searchUserB:
        orderBy = orderField()
        orderVal = f" ORDER BY {searchUserB} {orderBy}"
    print("\n" + orderVal)

    # search
    "SELECT {fieldName[fieldUser]} FROM tblFilms"  # fieldName = fieldA, fieldB, fieldC
    "\n(WHERE {field1} LIKE '{condition1}%' OR/AND {field2} LIKE '{condition2}%'...)"
    "\n(ORDER BY {field3} ASC/DESC)"  # ASC=even or 0, DESC=odd (i.e. %=0, %=1)
    filmSearch = selectVal
    if whereVal != "":
        filmSearch += whereVal
    if orderVal != "":
        filmSearch += orderVal
    print("\n" + filmSearch)
    dbCursor.execute(filmSearch)

    for records in dbCursor.fetchall():  # fetches the selected records
        print(records)
    return records


def saveFiles():
    searchRec = searchFilm()

    now = datetime.now()  # current date and time
    curDateTime = now.strftime("%Y%m%d_%H%M%S")

    with open(
        f"Python2/Project/{curDateTime}.csv", "w", newline=""
    ) as filePath:  # stores file as YYYYMMDD_hhmmss
        for records in searchRec:
            csv.writer(filePath).writerow(searchRec)
            csv.writer(filePath).writerows(records)
            # filePath.write(records)  # write to file


if __name__ == "__main__":
    searchFilm()
