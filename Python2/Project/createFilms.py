from flixConnect import *


# subroutine/function
def createFilm():
    film = []  # create an empty list called film
    # fields: filmID, title, yearReleased, rating, duration, genre

    # Ask for user input
    title = input(f"\nWhat is the film's title that you want to insert? ")
    rating = input(f"What is the age rating classification for {title}? ")
    genre = input(f"What genre is {title}? ")

    while True:
        try:
            yearReleased = int(input(f"What year was {title} released? "))
            duration = int(input(f"How many minutes long is {title}? "))
            break
        except ValueError:
            print("Please enter a numeric value.")

    # Add the data captured from title, yearReleased, rating, duration, genre
    userInput = [title, yearReleased, rating, duration, genre]
    film.extend(userInput)
    print(film)

    "INSERT INTO tblFilms(title,yearReleased,rating,duration,genre) VALUES(?,?,?,?,?)"
    dbCursor.execute(
        "INSERT INTO tblFilms(title,yearReleased,rating,duration,genre) "
        "VALUES(?,?,?,?,?) ",
        film,
    )
    dbConnect.commit()  # save the data permanently in the tables

    print(f"{title} ({yearReleased}) inserted into tblFilms table")


if __name__ == "__main__":
    createFilm()
