from connect import *

import time


# subroutine/function
def insertSongs():
    songs = []  # create an empty list called songs
    # fields: SongID INT NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT, Title TEXT, Artist TEXT, Genre TEXT

    # Ask for user input
    title = input("Enter Song Title: ")
    artist = input("Enter Song Artist: ")
    genre = input("Enter Song Genre: ")

    # add the data captured from title, artist, genre
    songs.append(title)
    songs.append(artist)
    songs.append(genre)

    # insert data stored in the list into the songs table in the database
    dbCursor.execute("INSERT INTO songs(Title,Artist,Genre) VALUES(?,?,?)", songs)
    dbCon.commit()  # save the data permanently in the tables

    print(f"{title} by {artist} inserted into Songs table")


if __name__ == "__main__":
    insertSongs()
