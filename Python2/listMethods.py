"List Methods"

"T '' raverse"  # Move through a sequence
"You can use a for loop to traverse"

# TODO - Use any two list methods from above to perform operation on the list, listOfNames
# list.count(item)  #
# list.reverse()    # reverse list
# list.sort()   # sort list
listOfNames = ["Nicole", "Laura", "Silvia" "Steve", "Juliet", "Laura", "Silvia"]
print(f"\nWe have {listOfNames.count('Nicole')} 'Nicole' on the list\n")
print(listOfNames.reverse())

# TODO 4 - Preduct, run, and investigate the code above
#   Index         0         1        2         3        4         5         6
listOfNames = ["Nicole", "Laura", "Silvia", "Steve", "Juliet", "Laura", "Silvia"]
print(listOfNames)  # Prints the list
print(listOfNames[2])  # Prints: Silvia
print(f"Number of items in listOfNames: {len(listOfNames)}")

# The len() used for the code below
for index in range(len(listOfNames)):
    print(f"{index} : {listOfNames[index]}")

for nums in range(5):  # 0,1,2,3,4
    print(nums)
