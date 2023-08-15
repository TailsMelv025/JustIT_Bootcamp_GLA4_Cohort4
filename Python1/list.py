list1 = [] # declare list1 variable and assign it a list datatype
list2 = ["HTML", "CSS"]
print(list1)

# access list items by their index position
#index     0       1      2   3 4  5    6    7
list3 = ["Paul","Kate","Anna",1,2,34.7,-8,"Katie"]
print(list3[1])

tuple1 = ("Paul","Kate","Anna",1,2,34.7,-8,"Katie")
print(tuple1[1])

# Slicing a list
print(list3[2:6]) # list[start:end] returns: 'Anna', 1, 2, 34.7 (from 2, not including 6)
print(list3[2:6:2]) # list[start:end:step] returns: 'Anna', 2 (from 2, not including 6, skip every 2 items)

# ~list exercise
# create a list of 6 items

# insert a new item in postion 3

# add another item to the list

# remove an item by value

# remove the item at index position 3

# for every list manipulation print the list