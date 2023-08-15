# Data types are varuables you use to reserve some space in memory
# Python variables do not need an explicit declaration to

# List is an ordered sequence of items
# It is a very flexible data type in Python
# The values in a list don't have to be of the same type
# Items in a list can be modified
# Items can be accessed based on their index position
list1 = [1,0,-10,9,0.5,"string","list",1>0,0>1,True,False]
list2 = [1,3,4,5,10,20]
print(f"\nThis is a {type(list1)} \n{list1}")
print(f"\nThis is a {type(list2)} \n{list2}")

# Tuple is a sequence of items that are in order 
# It is not possible to modify the tuples
# Tuples are faster than list
# The primary use of tuples is to create, write, and protect data
# Items can be accessed based on their index position

# declare a typle variable and assign values of different datapes in the tuple
tuple1 = (1,0,-10,9,0.5,"string","Tuple",1>0,0>1)
print(f"This is a {type(tuple1)}: \n{tuple1}")

# Set is a collection of unique items that are not in order
# Duplicates are eliminated in a set
# Items cannot be accessed based on their index position
set1 = {4,5,5,5,5,5,10.5,"xyz",5,1.3,"xyz"} 
print(f"This is a {type(set1)}: \n{set1}") # returns: 1.3, 4, 5, 'xyz', 10.5

# Dictionary stored data as key value pairs
# This retrieves a specific value from a dictionary where you need to know the key

dictionary1 = {"age":23, "homeOwner":True}
dictionary2 = {1:"John", 2:"Anna", 3:"Peter"}
print(f"This is a {type(dictionary1)}: \n{dictionary1}")
print(dictionary2)
print(dictionary2[2])