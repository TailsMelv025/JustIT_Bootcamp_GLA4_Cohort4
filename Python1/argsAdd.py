# Use the argument to pass a number or number of clauses/parameter to a function/parameter
def addition2(*argNums):  #
    for nums in argNums:  # tuple, num = index
        print(nums)


addition2(1, 2, 3, 4, 5, 6, 7, 8)
