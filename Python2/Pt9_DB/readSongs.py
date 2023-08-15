from connect import *


def read():
    dbCursor.execute("SELECT * FROM songs")  # selects all records
    records = dbCursor.fetchall()  # fetches the selected records
    for aRecord in records:
        print(aRecord)


if __name__ == "__main__":
    read()
