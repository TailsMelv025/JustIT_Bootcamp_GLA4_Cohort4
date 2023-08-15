from connect import *


# subroutine function
def delete():
    # Use the songID PRIMARY KEY to select and delete a record in database table
    idField = input("Enter Song ID to be deleted: ")

    "DELETE FROM songs WHERE songID = idField"
    dbCursor.execute(f"DELETE FROM songs WHERE songID = {idField}")
    dbCon.commit()

    print(f"Record {idField} deleted from songs table")
    dbCon.close()  # closes the connection


if __name__ == "__main__":
    delete()
