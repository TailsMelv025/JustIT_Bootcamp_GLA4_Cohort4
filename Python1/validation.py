try:  # the code to try and execute

    def test():
        num1 = input("Enter the first number: ")
        num2 = input("Enter the second number: ")
        answer = int(num1) + int(num2)
        print(answer)

    test()

# Single Error Handling
except ValueError:  # handle the error
    print(f"Please enter a numeric value")
    test()

# Multiple Error Handling
except (ValueError, IndexError, NameError) as e:  # handle the error
    if ValueError:
        print(f"Please enter a numeric value")
    elif IndexError:
        print(f"The following error has occured: {e}")
    elif NameError:
        print(f"The following error has occured: {e}")
