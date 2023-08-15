playerList = []
addPlayer = True  # Flag variable

while addPlayer:  # the same while True
    # Execute code below until the loop is exited

    #  playerProfile["payerTag"] = input("Enter Player name: ")
    pName = input("Enter Player name: ")
    pPass = input("Enter player pass: ")
    pScore = int(input("Enter Current Score: "))
    pHscore = int(input("Enter High Scoree:"))

    # create a dictionary to hold player profiles
    "name = Paul, Age = 34, height....."
    playerProfile = {
        "playerTag": pName,
        "playerPass": pPass,
        "playerScore": pScore,
        "playerHscore": pHscore,
    }
    playerList.append(playerProfile)
    # add another player details
    anotherPlayer = input("Do you want to add another player? Y/N ").upper()
    if anotherPlayer == "N":  # check if yes continue , otherwise exit
        addPlayer = False  # reset the value of the boolean variable Add player to false and exit the loop

print(f"The list of players:\n{playerList}")

#      0                1                       2                         3
# {'payerTag': 'p1', 'payerPass': 'pass1', 'payerScore': 1, 'payerHscore': 2}, 0
# {'payerTag': 'p2', 'payerPass': 'pass2', 'payerScore': 3, 'payerHscore':4},  1
# {'payerTag': 'p3', 'payerPass': 'pass3', 'payerScore': 5, 'payerHscore':6},  2
# {'payerTag': 'p4', 'payerPass': 'pass4', 'payerScore': 7, 'payerHscore':8}  3

aDictionary = int(
    input("Enter the number(index position) of the record to be displayed: ")
)
aPlayer = playerList[aDictionary]  # index 0 or 1 or 2 or 3...
print(f"Player Profile: {aPlayer}")
# {'payerTag': 'p1', 'payerPass': 'pass1', 'payerScore': 1, 'payerHscore': 2}
aPlayerAttribute = input(
    f"What attribute you want to display from: {aPlayer}"
)  # Use the key to get the value
print(f"The Player: {aPlayerAttribute} = {aPlayer[aPlayerAttribute]}: ")


# The dir() function can be used to get a list of the members of a class:
# print(dir())  #

# print("printing")
# print(dir(list))  #
