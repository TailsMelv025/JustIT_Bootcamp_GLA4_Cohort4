-- SELECT Query
USE company;

SELECT * FROM company.employee;

SELECT * FROM employee; 

SELECT fname, lname, salary FROM employee;

SELECT fname, lname, salary FROM employee WHERE fname="Jennifer";

SELECT * FROM employee WHERE fname="Jennifer";

SELECT * FROM employee WHERE fname="Jennifer" AND (lname="Wallace" OR salary=55000);

SELECT * FROM employee WHERE lname="Borg" OR lname="English";
UPDATE employee SET fname="Jennifer" WHERE lname="Borg" OR lname="English";
SET SQL_SAFE_UPDATES=0;

SELECT * FROM employee LIMIT 3 OFFSET 3;

-- display all employees who recieve more than 30000 salary
SELECT * FROM employee WHERE salary>30000;

-- display all male employees who receive less than 30000 salary
SELECT * FROM employee WHERE salary<30000 AND sex="M";

-- display all male and female employees who receive less than 30000 salary;
SELECT * FROM employee WHERE salary<30000 AND (sex="M" OR sex="F");


-- SORTING DATA

/*
ASC -> Ascending order (A-Z) or (lowest to highest)
DESC -> Descending order (Z-A) or (highest to lowest)
*/

-- select an employee who is receiving highest salary
SELECT * FROM employee 
ORDER BY salary DESC LIMIT 1;

-- select an employee who is receiving lowest salary
SELECT * FROM employee WHERE salary IS NOT NULL
ORDER BY salary ASC LIMIT 1;

-- select top 5 employees who are receiving highest salary
SELECT * FROM employee 
ORDER BY salary DESC LIMIT 5;

-- select employee who is receiving second lowest salary
SELECT * FROM employee 
ORDER BY salary ASC LIMIT 1 OFFSET 1;

-- select female employee who is receiving highest salary
SELECT * FROM employee WHERE sex="F" 
ORDER BY salary DESC LIMIT 1 ;

-- select male employee who is receiving lowest salary
SELECT * FROM employee WHERE sex="M" AND salary IS NOT NULL 
ORDER BY salary ASC LIMIT 1 ;


-- IN 

-- select any employee where fname 

-- ALIAS in MySQL
SELECT fname AS "First Name", lname AS "Last Name" FROM employee;

SELECT CONCAT(fname," ",lname) AS "Full Name" FROM employee;


-- AGGREGATE FUNCTIONS
/* AVG(), MAX(), MIN(), SUM(), COUNT() */

-- display total amount of salary for all employees
SELECT SUM(salary) AS "Total Salary" FROM employee;

-- what is the minimum salary you are paying to your employee?
SELECT MIN(salary) AS "Minimum Salary" FROM employee;

-- Display total number of employees
SELECT COUNT(*) AS "Total Number of Employees" FROM employee;

-- display maximum and minimum salary that you pay to your employee
SELECT MIN(salary) AS "Minimum Salary", MAX(salary) AS "Maximum Salary" 
FROM employee;

-- display average of all employees salaries.
SELECT AVG(salary) AS "Average Salary" FROM employee;

-- display total amount of salaries for female employees.
SELECT SUM(salary) AS "Total Salary for Female Employees" 
FROM employee 
WHERE sex="F";

SELECT DISTINCT fName FROM employee;

