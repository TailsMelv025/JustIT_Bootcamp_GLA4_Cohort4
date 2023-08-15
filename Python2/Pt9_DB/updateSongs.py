from connect import *


# subroutine/function
def update():
    # Use the SongID PRIMARY KEY to select and update a record in database table
    idField = input("Enter Song ID to be updated: ")

    # set the field (title, artist, genre) to be updated
    fieldName = input("What field do you want to update? ").title()

    # set the field value for the field (title, artist, genre) to update
    fieldValue = input(f"Enter the {fieldName} for SongID {idField}: ")
    fieldValue = "'" + fieldValue + "'"  # add single quotation to the field value
    print(fieldValue)

    # update the records in songs table
    "UPDATE songs SET fieldName(title/artist/genre) = fieldValue WHERE songID = idField"
    dbCursor.execute(
        f"UPDATE songs SET {fieldName} = {fieldValue} WHERE songID = {idField}"
    )
    dbCon.commit()

    print(f"Record songID {idField} Updated: {fieldValue} added to {fieldName}")


if __name__ == "__main__":
    update()
