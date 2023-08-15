# Logical expression evaluates True or False
"Logical Operators: and, or,  not"

"""Comparison operator compare values
==    equal  ( 2 == 2)
< 	less than
> 	more than
<= 	less than or equal to 
>= 	greater than or equal to
!=    Not equal to"""

num1 = 10  # int(input("Enter a number: "))
num2 = 5
num3 = 11
num4 = 2


print(num1 == num2)
print(num1 == 10)
print(num2 == 5)


# Exercise: use the logical operator with the comaprison operator to evaluate the expresssions

# Logical Operators: and
print("Logical Operators: and")
print(num1 != 10 and num1 < 10)
"use num1 and num2 variables"
# When num1 = 10, num2 = 5
# When num1 = 10, num2 = 50
# When num1 = 15, num2 = 5

# Logical Operators: or
print("Logical Operators: or")
print(num1 != 10 or num1 < 10)
# When num1 = 10, num2 = 5
# When num1 = 10, num2 = 50
# When num1 = 15, num2 = 5


# Logical Operators: not
print("Logical Operators: not")
# Example:
print(not (num1 != 10))
# not() will reverse the criteria inside its parentheses


print("Logical Operators: not with and")
"num1 = 10"
print(not (num1 == 10))  # num1 is not equal to 10
# When num1 is not = 10, num2 is not = 5
# When num1 is not = 10, num2 is not = 50
# When num1 is not = 15, num2 is not = 5
# When num1 is not = 1, num2 is not = 50


# Logical Operators: or with not
print("Logical Operators: or with not")
# When num1 is not = 10,  or num2 is not = 5
# When num1 is not = 10,  or num2 is not = 50
# When num1 is not = 1,  or num2 is not = 50

# print(num1 == 10 and (num1 > 8 or (num1 % 2 == 0 and num1 // 3 == 3)))
