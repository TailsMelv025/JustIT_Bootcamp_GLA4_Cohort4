USE gla4_cohort4;

-- UNION

CREATE TABLE instructor(instructorID INT NOT NULL PRIMARY KEY, instructorName VARCHAR(16));
INSERT INTO instructor(instructorID, instructorName) VALUES
(5, "Mark"),
(1, "Abdul"),
(3, "Matt"),
(4, "Sandra");

CREATE TABLE trainer(trainerID INT NOT NULL PRIMARY KEY, trainerName VARCHAR(16), trainerAge INT);
INSERT INTO trainer(trainerID, trainerName, trainerAge) VALUES
(1, "Abdul", 32),
(2, "Zak", 26),
(3, "Waqas", 36);

SELECT trainerID, trainerName FROM trainer
UNION 
SELECT instructorID, instructorName FROM instructor; 
-- doesn't show records found in both tables

SELECT trainerID, trainerName FROM trainer
UNION ALL
SELECT instructorID, instructorName FROM instructor; 
-- shows all records from both tables

SELECT * FROM instructor;

-- JOIN
SELECT * FROM instructor INNER JOIN trainer ON instructorName=trainerName; -- the only common name is Abdul, so only Abdul is going to show
SELECT * FROM instructor INNER JOIN trainer ON instructorID=trainerID; -- the only common ID is 1 and 3, so only Abdul and Matt are going to show

-- display employees first and last name, and their department name
SELECT * FROM employees INNER JOIN department ON employeeDepartmentID=departmentID;
SELECT employeeName, departmentName FROM employees INNER JOIN department ON employeeDepartmentID=departmentID;

USE company;
SELECT * FROM employee INNER JOIN department ON DNO=DNUMBER;
SELECT FNAME, LNAME, DNAME FROM employee INNER JOIN department ON DNO=DNUMBER;
SELECT CONCAT(FNAME," ", LNAME) AS "Name", DNAME AS "Department" FROM employee INNER JOIN department ON DNO=DNUMBER;

SELECT FNAME, LNAME, DNAME FROM employee LEFT JOIN department ON DNO=DNUMBER; -- select employees, whether or not they have a department number

SELECT * FROM department;
SELECT FNAME, LNAME, DNAME FROM employee RIGHT JOIN department ON DNO=DNUMBER; -- select employees that have a department number AND departments without an employee

SELECT FNAME, LNAME, DNAME FROM employee FULL JOIN department ON DNO=DNUMBER; -- select employees, whether or not they have a department number

-- Display employees first name and last name and their department name?
SELECT fname AS "Forename", lname AS "Surname", dname AS "Department" 
FROM employee 
INNER JOIN department ON dno=dnumber;

-- display employees first and last name and their dependent name if they have.
SELECT fname AS "Forename", lname AS "Surname", dependent_name AS "Dependent on" 
FROM employee 
LEFT JOIN dependent ON ssn=essn;

-- display all departments and their manager names
SELECT * FROM department LEFT JOIN employee ON mgrssn=ssn;

-- display all countries and their cities
USE world;
SELECT c.`name` AS "Country", ci.`name` City
FROM country AS c LEFT JOIN city ci -- define country as c and city as ci
ON c.`code`=ci.countryCode
ORDER BY c.`name` ASC, ci.`name` ASC;

USE company;
SELECT * FROM instructor CROSS JOIN trainer;

-- write a query which displays full name of employee and its manager
SELECT CONCAT(a.fname," ",a.lname) AS employee, CONCAT(b.fname," ",b.lname) AS manager FROM employee a LEFT JOIN employee b ON a.ssn=b.superssn;

-- retreive Employee Full Name and total amount of hours Hours for an employee who is working more than 40 hours.
SELECT CONCAT(fname," ",lname) AS `name`, CONCAT(SUM(hours), " hrs") hours FROM employee 
FULL JOIN works_on ON ssn=essn
GROUP BY ssn HAVING hours>=40;