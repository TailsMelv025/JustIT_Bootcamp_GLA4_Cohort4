import logging
import time

"To Do: Predict, then Run, and then Investigate"
# different logging methods and severity
logging.basicConfig(
    filename=r"Python2\Pt8_Exceptions_CollectionsCodeBase\1_Exceptions\myFilelog.log",
    level=logging.DEBUG,
)

try:  # attempt to run the indented code block
    num1 = int(input(("Enter your first number: ")))
    num2 = int(input(("Enter your second number: ")))
    answer = num1 / num2
    # Output for developer/what the developer see
    logging.info(f"Divided {num1} / {num2} = {answer}")

except ZeroDivisionError:  # handles exception if code in try block fails
    print("You can't divide a number by zero")  # Output for user/what the user see
    logging.warning(
        f"{time.asctime()}|0 User attempted to divide by zero"
    )  # Output for developer/what the dev see

finally:
    print("Closing....")


"To Do: Task 1: Modify"
# Make:
# 1. Use any one of the logging methods to log error to the Exceptions folder in a file called myFilelog1.log
