import sqlite3  # import sqlite3 module

# use the connectMethod that belongs to the sqlite3 module
dbConnect = sqlite3.connect(
    "Python2/Project/filmflix.db"
)  # create a dbFile or open an existing dbFile

# create a cursor object to perform sql queries/commands
dbCursor = dbConnect.cursor()
