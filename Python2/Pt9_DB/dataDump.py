from connect import *
import readSongs
import time


# subroutine / function
def bulkInsert():
    # load and read (songs.sql) from file
    with open(f"Python2\Pt9_DB\songs.sql") as sqlFile:
        # read content in alias (sqlFile) and save into dumpData variable
        dumpData = sqlFile.read()

        # call/invoke the executescript method and pass dumpData as an argument
        dbCursor.executescript(dumpData)
        dbCon.commit()

        time.sleep(3)

        # call readSongs.read()
        readSongs.read()


if __name__ == "__main__":
    bulkInsert()
