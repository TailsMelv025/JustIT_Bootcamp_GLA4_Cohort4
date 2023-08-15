import time
from datetime import datetime

# def search(value):
#     fields = (0, "one", "two", "three", 4)
#     print(fields[int(value)])


# def userInput(*args):
#     for value in args:
#         print(value)
#         for character in value:
#             print(character)
#             if int(character) in [0, 1, 2, 3, 4, 5]:
#                 search(character)
#             else:
#                 del character


# userInput(input("Enter the values you want here. For multiple please comma seperate:"))


def tuple_to_csv_string(tuple_data):
    # Convert each element of the tuple to a string and join with commas
    csv_string = ",".join(str(item) for item in tuple_data)
    return csv_string


# Example usage:
searchLog = [(1, "Movie 1", 2000, 8.5), (2, "Movie 2", 1998, 7.9)]

csv_data = "\n".join(tuple_to_csv_string(row) for row in searchLog)
print(csv_data)
