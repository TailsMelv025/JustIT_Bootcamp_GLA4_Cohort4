"""
You can perform operations with string 
in a similar way to the operations that you can perform with numbers.
"""

compareLetters = "a" > "b"  # check if the letter a is greater than b
print(compareLetters)

# You can multiple a string
# It will concatenate the same value for the number of times stat
multiplyWord = "c" * 3  # multiply the word n times
print(multiplyWord)


# The + sign concatenates (joins) the two strings together
# There is no space because it hasn't been given that instruction
joinWords = "e" + "f"  # join the two words
print(joinWords)

# You can also use string handling techniques to find out things about a string
"""
len() is used to count the number of characters in a string
This would include spaces as well, if they were present
In Python, the Index always starts at 0
"""

course = "Python"
wordLength = len(course)
print(wordLength)

findFirstLetter = course[0]  # returns the first character from the string "Python"
print(findFirstLetter)

# TODO
# Return all the characters from the string held in the course variable using negative values
negativeIndexing = course[-wordLength:]  # [start:stop]
print(negativeIndexing)

# How can you access the letter h?
print(course[3])

# TODO
#  use any comparison operator to compare the letter "a" and "A"
print("a" == "A")
#  use any comparison operator to compare the letters "ax" and "ZZ"
print("ax" <= "zz")
#  use any comparison operator to compare your firstname with any another first name
firstName1 = "Melvin"
firstName2 = "Other"
print(firstName1 != firstName2)
# != , == , <= , >=, <,>


# The for loop can be used to iterate through a string and any sequence of elements (eg number)

name = "Tim the Software Technical Trainer"
for letter in name:
    print(letter)

searchStr = "Python is a great programming language"
findChar = input("Enter character to search for: ")

# The membership operator can be used to check if a value/substring is present or not
# in object and returns true if it does

if findChar in searchStr:  # opposite of the in operator is the "not in"
    print(f"Found {findChar}")
else:
    print(f"Not found")

# TODO - replace the in operator with the not in operator

if findChar not in searchStr:  # opposite of the in operator is the "not in"
    print(f"Not found")
else:
    print(f"Found {findChar}")


# You have been provided with the vowels in a list data structure and a variable
# name that is assigned with an empty string.
# TODO - assign your name to the variable called name and use a for loop and if statement to:
# Iterate through the list of vowels to find the vowels in your name

vowels = ["a", "e", "i", "o", "u"]
name = input("Enter your name here: ").title
# for :

if (char in vowels for char in name.lower()):
    # does the character from the vowels list also exsist in the name?
    print("Your name contains vowels")
else:
    print("Your name does not contain vowels")

"""
Center() will center align the string
Example:
https://www.w3schools.com/python/trypython.asp?filename=demo_ref_string_center2

Endswith() returns True if string ends with the value specified.
Example:
https://www.w3schools.com/python/trypython.asp?filename=demo_ref_string_endswith2
 
Startswith() returns True if string starts with the value specified.
Example:
https://www.w3schools.com/python/trypython.asp?filename=demo_ref_string_startswith2
 
format() formats the specified value and inserts it into the string's placeholder. The placeholder is defined by curly brackets
Example:
https://www.w3schools.com/python/trypython.asp?filename=demo_ref_string_format2
"""
