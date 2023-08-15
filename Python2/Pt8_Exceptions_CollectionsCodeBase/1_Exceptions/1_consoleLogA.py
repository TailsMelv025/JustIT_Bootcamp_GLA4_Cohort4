import logging

# objective
# Import and use the logging module/class
# Understand and use the severity levels
# Configure file path and use exception handling to write logs to file with different severity levels


"read for 2 minutes"

""" Python Exception is represented in class hierarchy using built in or user define exception types
object of the class exception will be created when an exception is raised.
 exception class inherits from the base exception class

 Both the StandardError and Warning inherits from the Exception class.
 
 Standard errors will terminate program if not handle correctly
 Standard error like EOFError results in trying to read beyond the end of a file at run time.
 ZeroDivisionError trying to divide by zero.
 Indentation error improper indentation of programming/code blocks."""

# An exception is handled using the try and except block.

"To Do: Predict, then Run, and then Investigate"

# different logging methods and severity

logging.basicConfig(
    level=logging.DEBUG
)  # without this error logging level, only critical, error, and warning will be printed no matter the order they have been typed
logging.critical("Critical")  # highest logging level - will show by default
logging.error("Error")  # second highest logging level - will show by default
logging.warning("Warning")  # third highest logging level - will always show by default
logging.info("Info")  # fourth highest logging level
logging.debug("Debug")  # fifth highest logging level
# logging levels are only shown if declared i.e. logging.info
# logging levels will show what is asked during logging.basicConfig(level=logging), and anything higher than itself

"To Do: Modify"
# Modify:
# Task 1. Change the level from level=logging.DEBUG to logging.INFO, run the code and explain the output from the terminal
# Task 2. Remove the level=logging.DEBUG or level=logging.INFO, between the parenthesis of logging.basicConfig and run the code and explain the output from the terminal
