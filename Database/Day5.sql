-- BETWEEN operator
/* Selects values within a given range. 
The values can be numbers, text, or dates.
The BETWEEN operator is inclusive: begin and end values are included */

USE company;
SELECT * FROM employee WHERE salary BETWEEN 25000 AND 35000; 
SELECT * FROM employee WHERE salary>=25000 AND salary<=35000;
SELECT * FROM employee WHERE 25000<=salary<=35000; -- DOES NOT WORK :(

-- display all employees who are born between 1960-01-01 and 1980-01-01 inclusive
SELECT * FROM employee WHERE bDate BETWEEN "1960-01-01" AND "1980-01-01";

-- Display all employeess who are not born between 1960-01-01 and 1980-01-01 inclusive
SELECT * FROM employee WHERE bDate NOT BETWEEN "1960-01-01" AND "1980-01-01";

-- GROUP BY
-- groups rows that have the same values into summary rows
SELECT * FROM employee;
-- find out how many male and female employees you have in employee table
SELECT COUNT(*) AS "Number of Employees", sex FROM employee GROUP BY sex;

-- display all salaries and number of employees who are receiving that salary.
SELECT COUNT(*), salary FROM employee WHERE salary IS NOT NULL GROUP BY salary;
-- write a query which select highest salary for each gender
SELECT MAX(salary), sex FROM employee WHERE salary IS NOT NULL GROUP BY sex; 
-- display total amount of salaries for both male and female employees.
SELECT SUM(salary) AS "Total Salary", sex 
FROM employee 
WHERE (sex="M" OR sex="F") AND salary IS NOT NULL 
GROUP BY sex; 

-- LIKE
-- select all employees whose name starts with "J"
SELECT * FROM employee WHERE fname LIKE "J%";
-- select all employees whose name has h as the second character
SELECT * FROM employee WHERE fname LIKE "_h%";

/*
WHERE columnName LIKE "a%"; -- any value that starts with "a", i.e. a, ab, abc
WHERE columnName LIKE "%a"; -- any value that ends with "a", i.e. a, ca, cba
WHERE columnName LIKE "%a%"; -- any value that starts with "a", i.e. a, ab, ca, abc, 
*/

-- SELECT Employees Name who has 'me' in their name.
SELECT * FROM employee WHERE fname LIKE "%me%" OR lname LIKE "%me%";
-- Select employees who's first Name can be anything but should have 'oh' after first character.
SELECT * FROM employee WHERE fname LIKE "_oh%";
-- Display first Name of employee which has 'Rames' and the last character can be anything.
SELECT * FROM employee WHERE fname LIKE "%Rames_";
-- Select record of Employee who is born in 1965.
SELECT * FROM employee WHERE bDate LIKE "1965%";
-- Display all employees who's first Name starts with A and ends with d.
SELECT * FROM employee WHERE fname LIKE "A%d";
-- Display all employees who's first Name start with J and does not ends with n.
SELECT * FROM employee WHERE fname LIKE "J%" AND fname NOT LIKE "%n";
-- display all employees who's first Name start with J and should be at least 5 characters long.
SELECT * FROM employee WHERE fname LIKE "J____%";
-- SELECT Employee who's full name start with 'Jennifer W';
SELECT * FROM employee WHERE CONCAT(fname," ",lname) LIKE "Jennifer W%";
-- Select an employee who's first name is 'Jennifer' but last name does not start with 'W'
SELECT * FROM employee WHERE fname="Jennifer" AND lname NOT LIKE "W%";


-- Having CLAUSE
-- Find a salary which is being received by more than two employees
SELECT salary, COUNT(*) AS 'No. of Employees' FROM employee GROUP BY salary HAVING COUNT(*)>2;

-- find department number and number of employees for that department which has more than 2 employees
SELECT COUNT(*), DNO FROM employee GROUP BY DNO HAVING COUNT(*)>2;


-- Find total number of employees for the gender which has more than 3 employees.
SELECT sex, COUNT(*) FROM employee GROUP BY sex HAVING COUNT(*)>3;
-- find gender and total amout of salary only for those gender where the total amount of salary is greater than 133000.
SELECT sex, SUM(salary) FROM employee GROUP BY sex HAVING SUM(salary)>133000;

SELECT CONCAT(fname," ", lname) AS "Full Name", CONCAT("£",FORMAT(salary,2)) AS "Salary" FROM employee;