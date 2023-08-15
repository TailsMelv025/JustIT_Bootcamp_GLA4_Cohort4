from flixConnect import *
import readFilms


# subroutine/function
def updateFilm():
    readFilms.readFilm()

    # Use the filmID PRIMARY KEY to select and delete a record in database table
    filmID = int(input("\nEnter the Film ID of the record you want to update: "))

    # fields: filmID, title, yearReleased, rating, duration, genre
    # Set the field to be updated
    fieldName = ["*", "filmID", "title", "yearReleased", "rating", "duration", "genre"]
    while True:
        try:
            fieldIndex = int(
                input(
                    "\nFields: \nID, Title(2), Year Released(3), Rating(4), Duration(5) Genre(6)"
                    "\nType the number of the field value you want to update: "
                )
            )  # field index
            if 1 < fieldIndex < len(fieldName):  # between value 0 and last value
                fieldUser = fieldName[fieldIndex]  # update field fieldUser
            else:
                print("\nInput not in range. Please try again.")
        except ValueError:
            print("\nInput not a number. Please try again.")
        break

    # fieldName = input(
    #     f"filmID, title, yearReleased, rating, duration, genre"
    #     "\nWhat field do you want to update? "
    # ).lower()  #? filmID{filmID}

    # Set the value in the field to update
    fieldValue = input(f"Enter the {fieldUser} for film ID {filmID}: ").title()
    fieldValue = "'" + fieldValue + "'"  # add single quotation to the field value
    print(fieldValue)

    # Update the records in songs table
    "UPDATE tblFilms SET fieldName(title/yearReleased/rating/duration/genre) = fieldValue WHERE filmID = idField"
    dbCursor.execute(
        f"UPDATE tblFilms SET {fieldUser} = {fieldValue} WHERE filmID = {filmID}"
    )
    dbConnect.commit()

    print(f"Record ID {filmID} Updated: {fieldUser} updated to {fieldValue}")


if __name__ == "__main__":
    updateFilm()
