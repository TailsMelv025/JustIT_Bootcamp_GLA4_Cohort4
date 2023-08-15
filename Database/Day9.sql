-- Store Procedure is a pre-compiled statement stored into the database, like a JavaScript function
-- It uses resources, but it makes it easier to reuse code, enhance security, and reduce network traffic

USE gla4_cohort4;
USE company;

-- STORE PROCEDURE
/*DELIMITER {custom delimiter}
CREATE PROCEDURE {procedureName}([optional parameters])
BEGIN
// procedure body...
// procedure body...
END
{custom delimiter}
*/

-- create a store procedure which displays all employees
DELIMITER &
CREATE PROCEDURE allEmployee()
BEGIN
	SELECT * FROM employee;
END&

CALL allEmployee();


-- Input Parameters - these parameters allow you to pass values into the stored procedure
-- Output Parameters - these allow the stored procedure to return values back to the calling code
-- Calling code can retrieve values after executing the stored procedure
-- Input/Output Parameters - these parameters act as both input and output parameters

-- create a store procedure which displays employee records whose first name is passing as an arrgument

DELIMITER $$
CREATE PROCEDURE displayRecord(IN firstName VARCHAR(15))
BEGIN
	SELECT * FROM employee WHERE fname=firstName;
END$$

CALL displayRecord("Jennifer");


DELIMITER &&
CREATE PROCEDURE totalSalary(OUT allSalary INT)
BEGIN
	SELECT SUM(salary) INTO allSalary FROM employee;
    SELECT SUM(salary) INTO maleSaleries FROM employee WHERE sex="M";
END&&

CALL totalSalary(@totalAmountOfSalary, @totalOfAllMaleSalary);
SELECT @totalAmountOfSalary;

DROP PROCEDURE totalSalary;



/*
Write a store procedure which will display total amount of salaries using OUT parameter
for any gender we are passing as parameter
use both IN and OUT parameter
*/


DELIMITER +
CREATE PROCEDURE totalSalary(OUT totalAmountSalary INT, IN gender TEXT)
BEGIN
	SELECT SUM(salary) INTO totalAmountSalary FROM employee WHERE sex=gender;
END+
DELIMITER ;
CALL totalSalary(@totalAmountOfSalary,'M');
SELECT @totalAmountOfSalary;
DROP PROCEDURE totalSalary;


/*
Write a store procedure which display employee record for 
which you are passing first Name and last name
*/

SELECT * FROM employee;
DELIMITER +-
CREATE PROCEDURE displayRecord(IN forename TEXT, IN surname TEXT)
BEGIN
	SELECT CONCAT() FROM employee;
END+-
DELIMITER ;
CALL displayRecord('','');
