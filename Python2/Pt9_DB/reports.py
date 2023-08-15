from connect import *


# def artist():
#     artistField = input("Enter the name of the artist to search for: ")
#     dbCursor.execute(
#         f"SELECT * FROM songs WHERE artist = '{artistField}'"
#     )  # selects all records
#     records = dbCursor.fetchall()  # fetches the selected records
#     for aRecord in records:
#         print(aRecord)


# def idField():
#     songIDField = input("Enter the name of the artist to search for: ")
#     dbCursor.execute(
#         f"SELECT * FROM songs WHERE songID = '{songIDField}'"
#     )  # selects all records
#     records = dbCursor.fetchall()  # fetches the selected records
#     for aRecord in records:
#         print(aRecord)


def recordsOrder():
    # dbCursor.execute("SELECT * FROM songs ORDER BY songID DESC")
    # dbCursor.execute("SELECT * FROM songs WHERE genre = 'Pop'")
    # dbCursor.execute("SELECT artist, genre FROM songs ORDER BY songID")
    # dbCursor.execute("SELECT * FROM songs WHERE title LIKE 'a%'")
    # dbCursor.execute("SELECT * FROM songs WHERE title NOT LIKE 'a%'")
    dbCursor.execute("SELECT * FROM songs WHERE genre = 'Pop' OR genre = 'Dance'")
    records = dbCursor.fetchall()  # fetches the selected records
    for aRecord in records:
        print(aRecord)


recordsOrder()
