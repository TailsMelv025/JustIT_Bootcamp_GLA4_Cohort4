import sqlite3  # import sqlite3 module

# use the connectMethod that belongs to the sqlite3 module
dbCon = sqlite3.connect(
    "Python2\Pt9_DB\GLA4WAC2.db"
)  # create a dbFile or open an existing dbFile

# create a cursor object to perform sql queries/commands
dbCursor = dbCon.cursor()
