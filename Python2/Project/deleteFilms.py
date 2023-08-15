from flixConnect import *
import readFilms


# subroutine function
def deleteFilm():
    readFilms.readFilm()

    # Use the filmID PRIMARY KEY to select and delete a record in database table
    filmID = int(
        input("\nEnter Film ID to be deleted: ")
    )  # ? Can this take multiple inputs to delete mutliple at the same time?
    # Where someone enters ", ", replace with " OR "

    if (
        input(
            'Type "Y" to Confirm your selection.\nType anything else to cancel: '
        ).upper()
        == "Y"
    ):
        "DELETE FROM tblFilms WHERE filmID = {filmID}"
        dbCursor.execute(f"DELETE FROM tblFilms WHERE filmID = {filmID}")
        dbConnect.commit()
        print(f"Record {filmID} deleted from tblFilms table")
        # dbConnect.close()  # closes the connection
    else:
        print("No record has been deleted")


if __name__ == "__main__":
    deleteFilm()
