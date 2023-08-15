from connect import *
import readSongs
import time


# subroutine/function
def insertSongs():
    songs = [
        ("Hold on", "Megaheart", "Blues"),
        ("Keep on dreaming", "Heart Fighters", "Rock"),
        ("Sandy shores", "Tiny Tiny", "Rock and Roll"),
        ("My heart is in Dublin", "Monica Wonder", "Rock"),
        ("I lost my mind tonight", "Hairy February", "Country"),
    ]

    # insert data stored in the list into the songs table in the database
    dbCursor.execute("INSERT INTO songs(Title,Artist,Genre) VALUES (?,?,?)", songs)
    dbCon.commit()  # save the data permanently in the table

    print(f"{songs[0]} inserted into Songs table")
    time.sleep(3)
    # call readSongs.read()
    readSongs.read()


if __name__ == "__main__":
    insertSongs()
    dbCon.close()  # closes the connnection
