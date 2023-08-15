USE company;

-- STRING FUNCTION 
-- CONCAT() -- used to concatenate two strings or columns
SELECT CONCAT("Melvin"," ","Osei") AS name; 
-- display the full name of all employees
SELECT CONCAT(fname," ",lname," receives £",salary," per year") AS employee 
FROM employee;

-- TRIM() -- used to remove extra space
SELECT "     Melvin     " AS "no trim";
SELECT TRIM("     Melvin     ") AS trim;
SELECT LTRIM("     Melvin     ") AS "left trim";
SELECT RTRIM("     Melvin     ") AS "right trim";

-- LCASE()/LOWER() -- covert string to lower case
-- UCASE()/UPPER() -- covert string to upper case
SELECT LCASE("Melvin") AS "lower case"; SELECT LOWER("Melvin") AS "lower case";
SELECT UCASE("Melvin") AS "upper case"; SELECT UPPER("Melvin") AS "upper case";

-- REPLACE()
SELECT REPLACE("JavaLanguage","Language","Script"); 
-- replace the "Language" in "JavaLanguage" with "Script", which results in "JavaScript"

/*TASK
Select full name of all employees
1. It should be in upper case
2. Extra spaces should be removed
*/

SELECT DISTINCT UCASE(CONCAT(TRIM(fname)," ",TRIM(lname))) AS NAME 
FROM employee;

-- CURRENT_DATE()/CURDATE()
SELECT CURDATE();
-- CURRENT_TIME()/CURTIME()
SELECT CURTIME();

SELECT MONTHNAME("1998-01-25");
SELECT DAYNAME("1998-01-25");

SELECT YEARWEEK(CURDATE());
SELECT YEAR(CURDATE());
SELECT MONTH(CURDATE());
SELECT WEEK(CURDATE());
SELECT DAY(CURDATE());

SELECT TIMESTAMP(CURTIME());
SELECT WEEKDAY();

SELECT DAYOFYEAR(CURRENT_DATE());
SELECT DAYOFWEEK(CURRENT_DATE());
SELECT DAYOFMONTH(CURRENT_DATE());

-- Tuesday, 11th of July 2023
SELECT CONCAT(
DAYNAME("2023-07-11"),", ",
DAY("2023-07-11"),"th of ",
MONTHNAME("2023-07-11")," ",
YEAR("2023-07-11"))
AS "Date";

-- CURRENT_USER() -- return current login user
SELECT CURRENT_USER();
-- REVERSE() -- return the reverse of string
SELECT REVERSE("0123456789");
-- SUBSTRING()/SUBSTR() -- extract a sub string from a string
SELECT SUBSTR("Melvin",2,3); -- SUBSTRING(string, character to start on, characters total)
SELECT LENGTH("Melvin");

-- INSERT IGNORE
USE gla4_cohort4;
SELECT * FROM trainer;
INSERT IGNORE INTO trainer(trainerID, trainerName, trainerAge) VALUES
(15,"Anita",32),("Text","Victoria",50),(16,"Hubert",44);

SELECT RAND(); -- random number between 0 and 1
SELECT FLOOR(RAND()); -- rounds down
SELECT CEIL(RAND()); -- rounds up
SELECT FLOOR(RAND()*5); -- random number between 0 and 5, rounded down from 0 to 4
SELECT FLOOR(RAND()*5)+1; -- random number between 0 and 5, rounded down from 0 to 4 and +1 from 1 to 5
SELECT CEIL(RAND()*5); -- random number between 0 and 5, rounded up from 1 to 5